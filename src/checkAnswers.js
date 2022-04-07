import * as constants from './constants';

export function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let prompt;
    let value;

    if ('grader' in challenge) {
      answerKey.set(`${challenge.prompt}: ${constants.TYPE_TRANSLATE}`, challenge.grader.vertices);
    }

    if (challenge.type !== constants.TYPE_TRANSLATE) {
      switch (challenge.type) {
        case constants.TYPE_FORM: {
          prompt = challenge.promptPieces.join('');
          value = challenge.correctIndex;
          break;
        }
        default: {
          prompt = null;
          value = null;
        }
      }
      answerKey.set(`${prompt}: ${challenge.type}`, value);
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

    const currToken = answerSplit[currTokenID];

    vertices[currVertexID].forEach((vertex) => {
      if (!(vertex.to in currVisited)) {
        if (!vertex.lenient.trim().length) {
          stack.push([vertex.to, currTokenID, { ...currVisited, [vertex.to]: null }]);
        } else if (vertex.lenient === currToken) {
          stack.push([vertex.to, currTokenID + 1, { ...currVisited, [vertex.to]: null }]);
        } else if ('orig' in vertex) {
          const orig = vertex.orig.replace(/[.,!?$;:]/g, '');
          if (orig === currToken) {
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
  if (challengeType === constants.TYPE_TRANSLATE) {
    const vertices = answerKey.get(key);
    return gradeTranslation(answer, vertices);
  }
  const correctAnswer = answerKey.get(key);
  console.log(`Correct answer: ${correctAnswer}`);
  return answer === correctAnswer;
}
