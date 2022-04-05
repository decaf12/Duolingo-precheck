export function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let value;

    if ('grader' in challenge) {
      answerKey.set(`${challenge.prompt}: translate`, challenge.grader.vertices);
    }

    if (challenge.type !== 'translate') {
      switch (challenge.type) {
        default:
          value = null;
          break;
      }
      answerKey.set(`${challenge.prompt}: ${challenge.type}`, value);
    }
  });
}

export function gradeTranslation(answer, vertices) {
  const answerSplit = answer.split(' ');
  const lastVertexID = vertices.length - 1;
  const stack = [[0, 0, { 0: null }]];

  while (stack.length) {
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
  console.log(`Key: ${challengePrompt}: ${challengeType}`);
  const vertices = answerKey.get(`${challengePrompt}: ${challengeType}`);
  return gradeTranslation(answer, vertices);
}
