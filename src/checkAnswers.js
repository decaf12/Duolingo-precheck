export function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let key;
    let value;

    if ('grader' in challenge) {
      answerKey.set(`${challenge.prompt}: translate`, challenge.grader.vertices);
    }

    if (challenge.type !== 'translate') {
      switch (challenge.type) {
        case 'form': {
          key = challenge.promptPieces.map((x) => (x === '' ? '___' : x)).join('');
          value = challenge.correctIndex;
          break;
        }
        default: {
          key = null;
          value = null;
        }
      }
      answerKey.set(`${key}: ${challenge.type}`, value);
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
        const nextVisited = { ...currVisited };
        nextVisited[vertex.to] = null;

        if (!vertex.lenient.trim().length) {
          stack.push([vertex.to, currTokenID, { ...nextVisited }]);
        } else if (vertex.lenient === currToken) {
          stack.push([vertex.to, currTokenID + 1, { ...nextVisited }]);
        } else if ('orig' in vertex) {
          const orig = vertex.orig.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
          if (orig === currToken) {
            stack.push([vertex.to, currTokenID + 1, { ...nextVisited }]);
          }
        }
      }
    });
  }

  return false;
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
  const key = `${challengePrompt}: ${challengeType}`;
  console.log(`Key: ${challengePrompt}: ${challengeType}`);
  if (challengeType === 'translate') {
    const vertices = answerKey.get(key);
    return gradeTranslation(answer, vertices);
  }
  const correctAnswer = answerKey.get(key);
  console.log(`Answer key: ${JSON.stringify(answerKey)}`);
  return answer === correctAnswer;
}
