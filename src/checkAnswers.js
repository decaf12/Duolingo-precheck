function makeRegex(answer) {
  const letterArray = Array.from(answer);
  const arrayLength = letterArray.length;
  for (let i = 0; i < arrayLength; i += 1) {
    const rawCharacter = letterArray[i];

    switch (rawCharacter) {
      case '[':
        letterArray[i] = '(';
        break;
      case ']':
        letterArray[i] = ')';
        break;
      case '/':
        letterArray[i] = '|';
        break;
      default:
        letterArray[i] = rawCharacter;
        break;
    }
  }
  return new RegExp(`^${letterArray.join('')}$`);
}

export function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let value;

    switch (challenge.type) {
      case 'translate':
        // value = challenge.compactTranslations.map(makeRegex);
        value = challenge.grader.vertices;
        // challenge.grader.vertices.forEach(index => {
        //     value.push(index);
        // })
        value.forEach((x) => console.log(x[0].to));
        break;

      default:
        break;
    }
    answerKey.set(`${challenge.prompt}: ${challenge.type}`, value);
  });
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
  const answerList = answerKey.get(`${challengePrompt}: ${challengeType}`);
  console.log(`Answer list: ${answerList}`);
  return answerList.some((key) => key.test(answer));
}

export function gradeTranslation(answer, vertices) {
  const stack = [vertices[0]];
  console.log(stack[0]);
}
