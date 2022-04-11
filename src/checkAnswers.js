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

        case constants.TYPE_JUDGE: {
          challengePrompt = challenge.prompt;
          // eslint-disable-next-line prefer-destructuring
          value = challenge.correctIndices[0];
          break;
        }

        case constants.TYPE_SELECT: {
          challengePrompt = `<span>Which one of these is \u201C${challenge.prompt}\u201D?</span>`; /* u201C and u201D are curly quotes */
          console.log(`Select prompt: ${challengePrompt}`);
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
  const answerSplit = answer.split(' ');
  const lastVertexID = vertices.length - 1;
  const stack = [[0, 0, { 0: null }]];

  while (stack.length > 0) {
    const [currVertexID, currTokenID, currVisited] = stack.pop();
    console.log(`Current vertex: ${currVertexID}`);

    if (currVertexID === lastVertexID) {
      console.log('Last vertex reached.');
      return true;
    }

    const currToken = answerSplit[currTokenID] || '';

    vertices[currVertexID].forEach((vertex) => {
      if (!(vertex.to in currVisited)) {
        if (!vertex.lenient.trim().length) {
          stack.push([vertex.to, currTokenID, { ...currVisited, [vertex.to]: null }]);
        } else if (vertex.lenient === currToken) {
          stack.push([vertex.to, currTokenID + 1, { ...currVisited, [vertex.to]: null }]);
        } else if ('orig' in vertex) {
          const orig = vertex.orig.replace(/[.,!?$-;:]/g, '');
          if (orig.toLowerCase() === currToken.toLowerCase()) {
            stack.push([vertex.to, currTokenID + 1, { ...currVisited, [vertex.to]: null }]);
          }
        }
      }
    });
  }

  return false;
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
  const key = `${challengePrompt}: ${challengeType}`;
  console.log(`Key: ${key}`);
  if (challengeType === constants.TYPE_TRANSLATE) {
    const vertices = answerKey.get(key);
    return gradeTranslation(answer, vertices);
  }
  const correctAnswer = answerKey.get(key);
  return answer === correctAnswer;
}
