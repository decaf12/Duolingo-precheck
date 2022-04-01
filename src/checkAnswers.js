export function addToKey(answerKey, challenges) {
    challenges.forEach(challenge => {
        answerKey.set(`${challenge.prompt}: ${challenge.type}`, challenge.compactTranslations);
    });
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
    const answerList = answerKey.get(`${challengePrompt}: ${challengeType}`);
    return answer === answerList[0];
}