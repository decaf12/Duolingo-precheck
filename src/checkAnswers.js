import { TSMap } from 'typescript-map';
import * as constants from './challengeTypeConstants';

function caseInsensitiveCmp(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

export function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let challengePrompt;
    let value;

    if ('grader' in challenge) {
      answerKey.set(`${challenge.prompt}: ${constants.TYPE_TRANSLATE}`, challenge.grader.vertices);
    }

    if (challenge.type !== constants.TYPE_TRANSLATE) {
      switch (challenge.type) {
        case constants.TYPE_FORM: {
          challengePrompt = challenge.promptPieces.join('');
          value = challenge.correctIndex;
          break;
        }

        case constants.TYPE_MATCH: {
          challengePrompt = challenge.pairs.map((x) => x.learningToken).sort().join('');
          value = new TSMap();
          challenge.pairs.forEach((x) => {
            value.set(x.learningToken, x.fromToken);
          });
          break;
        }

        case constants.TYPE_JUDGE: {
          challengePrompt = challenge.prompt;
          // eslint-disable-next-line prefer-destructuring
          value = challenge.correctIndices[0];
          break;
        }

        case constants.TYPE_SELECT: {
          challengePrompt = `<span>Which one of these is \u201C${challenge.prompt}\u201D?</span>`; /* u201C and u201D are curly quotes */
          value = challenge.correctIndex;
          break;
        }

        default: {
          challengePrompt = null;
          value = null;
        }
      }
      answerKey.set(`${challengePrompt}: ${challenge.type}`, value);
    }
  });
}

export function gradeTranslation(answer, vertices) {
  const answerNoSpaces = answer.replace(/[-\s,.?!]/g, '');
  const lastVertexID = vertices.length - 1;
  const lastPos = answerNoSpaces.length;
  const stack = [[0, 0, { 0: null }]];

  while (stack.length > 0) {
    const [currVertexID, currPos, currVisited] = stack.pop();
    console.log(`Current vertex: ${currVertexID}`);

    if (currVertexID === lastVertexID && currPos >= lastPos) {
      console.log('Last vertex reached.');
      return true;
    }

    vertices[currVertexID].forEach((vertex) => {
      if (!(vertex.to in currVisited)) {
        const lenientLen = vertex.lenient.length;

        if (!vertex.lenient.trim().length) {
          stack.push([vertex.to, currPos, { ...currVisited, [vertex.to]: null }]);
        } else if (answerNoSpaces.slice(currPos, currPos + lenientLen) === vertex.lenient) {
          stack.push([vertex.to, currPos + lenientLen, { ...currVisited, [vertex.to]: null }]);
        } else if ('orig' in vertex) {
          const origLen = vertex.orig.length;
          if (caseInsensitiveCmp(vertex.orig, answerNoSpaces.slice(currPos, currPos + origLen))) {
            stack.push([vertex.to, currPos + origLen, { ...currVisited, [vertex.to]: null }]);
          }
        }
      }
    });
  }

  return false;
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
  const key = `${challengePrompt}: ${challengeType}`;
  if (challengeType === constants.TYPE_TRANSLATE) {
    const vertices = answerKey.get(key);
    return gradeTranslation(answer, vertices);
  }

  if (challengeType === constants.TYPE_MATCH) {
    const matchLookup = answerKey.get(key);
    if (matchLookup.has(answer.previousText) && matchLookup.has(answer.currentText)) {
      return true;
    }

    if (!matchLookup.has(answer.previousText) && !matchLookup.has(answer.currentText)) {
      return true;
    }

    if (matchLookup.has(answer.previousText)) {
      return answer.currentText === matchLookup.get(answer.previousText);
    }
    return answer.previousText === matchLookup.get(answer.currentText);
  }

  const correctAnswer = answerKey.get(key);
  return answer === correctAnswer;
}
