export function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let value;

    switch (challenge.type) {
      case 'translate':
        value = challenge.grader.vertices;
        break;

      default:
        break;
    }
    answerKey.set(`${challenge.prompt}: ${challenge.type}`, value);
  });
}

export function gradeTranslation(answer, vertices) {
  const answerSplit = answer.split(' ');
  const destination = vertices.length - 1;
  const stack = [[0, 0, { 0: null }]];

  while (stack.length) {
    const [currVertexID, currTokenID, currVisited] = stack.pop();
    console.log(`Current vertex ID: ${currVertexID}`);

    if (currVertexID === destination) {
      return true;
    }

    const currToken = answerSplit[currTokenID];

    vertices[currVertexID].forEach((vertex) => {
      console.log(`Candidate vertex ID: ${vertex.to}, vertex token: ${vertex.lenient} token length: ${vertex.lenient.length}`);
      console.log(`Current visited object: ${JSON.stringify(currVisited)}`);
      if (!(vertex.to in currVisited)) {
        const nextVisited = { ...currVisited };
        nextVisited[vertex.to] = null;

        const lenient = vertex.lenient.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        if (lenient === currToken) {
          stack.push([vertex.to, currTokenID + 1, { ...nextVisited }]);
          console.log(`Vertex pushed: ${vertex.to}`);
        } else if ('orig' in vertex) {
          const orig = vertex.orig.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
          if (orig === currToken) {
            stack.push([vertex.to, currTokenID + 1, { ...nextVisited }]);
            console.log(`Vertex pushed: ${vertex.to}`);
          }
        } else if (lenient === '' || lenient === ' ') {
          stack.push([vertex.to, currTokenID, { ...nextVisited }]);
          console.log(`Vertex pushed: ${vertex.to}`);
        }
      }
    });
  }

  return false;
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
  const vertices = answerKey.get(`${challengePrompt}: ${challengeType}`);
  return gradeTranslation(answer, vertices);
}
