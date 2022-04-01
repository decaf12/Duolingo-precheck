export function addToKey(answerKey, challenges) {
    challenges.forEach(challenge => {
        let value;
        if (challenge.type === "translate") {
            value = challenge.compactTranslations;
        }
    
        answerKey.set(`${challenge.prompt}: ${challenge.type}`, value);
    });
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
    const answerList = answerKey.get(`${challengePrompt}: ${challengeType}`);
    return answer === answerList[0];
}