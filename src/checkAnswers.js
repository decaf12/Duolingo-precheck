import { TSMap } from 'typescript-map';
import * as constants from './challengeTypeConstants';

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

    if (currVertexID === lastVertexID && currPos === lastPos) {
      console.log('Last vertex reached.');
      return true;
    }

    const remainingAnswer = answerNoSpaces.slice(currPos);
    const remainingLength = remainingAnswer.length;

    vertices[currVertexID].forEach((vertex) => {
      if (!(vertex.to in currVisited)) {
        const lenientLength = vertex.lenient.length;
        if (!vertex.lenient.trim().length) {
          stack.push([vertex.to, currPos, { ...currVisited, [vertex.to]: null }]);
        } else if (remainingLength >= lenientLength
                  && remainingAnswer.slice(0, lenientLength) === vertex.lenient) {
          stack.push([vertex.to, currPos + lenientLength, { ...currVisited, [vertex.to]: null }]);
        } else if ('orig' in vertex) {
          if (remainingLength >= vertex.orig.length
            // eslint-disable-next-line max-len
            && vertex.orig.toLowerCase() === remainingAnswer.slice(0, vertex.orig.length).toLowerCase()) {
            // eslint-disable-next-line max-len
            stack.push([vertex.to, currPos + remainingLength, { ...currVisited, [vertex.to]: null }]);
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
