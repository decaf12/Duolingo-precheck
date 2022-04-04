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
  const stack = [[0, 0]];
  const answerSplit = answer.split(' ');
  const visited = new Set();
  visited.add(0);
  const destination = vertices.length - 1;

  while (stack.length) {
    const [currNodeID, currTokenID] = stack.pop();
    if (currNodeID === destination) {
      return true;
    }

    const currToken = answerSplit[currTokenID];
    vertices[currNodeID].forEach((vertex) => {
      if (!visited.has(vertex.to)) {
        if (vertex.lenient === currToken) {
          visited.add(vertex.to);
          stack.push([vertex.to, currTokenID + 1]);
        } else if (vertex.lenient === '' || vertex.lenient === ' ') {
          visited.add(vertex.to);
          stack.push([vertex.to, currTokenID]);
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
