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
  const stack = [[0, 0, 1]];
  const answerSplit = answer.split(' ');
  const destination = vertices.length - 1;

  while (stack.length) {
    const [currNodeID, currTokenID, currVisited] = stack.pop();

    if (currNodeID === destination) {
      return true;
    }

    const currToken = answerSplit[currTokenID];

    // eslint-disable-next-line no-loop-func
    vertices[currNodeID].forEach((vertex) => {
      // eslint-disable-next-line no-bitwise
      if ((currVisited & (1 << vertex.to)) === 0) {
        // eslint-disable-next-line no-bitwise
        const nextVisited = currVisited | (1 << vertex.to);
        if (vertex.lenient === currToken) {
          stack.push([vertex.to, currTokenID + 1, nextVisited]);
        } else if (vertex.lenient === '' || vertex.lenient === ' ') {
          stack.push([vertex.to, currTokenID, nextVisited]);
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
