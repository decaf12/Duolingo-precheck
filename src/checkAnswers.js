function makeRegex(answer) {
    for (let i = 0; i < answer.length; i++) {
        const rawCharacter = answer[i];
        
        switch (rawCharacter) {
            case "[":
                answer[i] = "(";
                break;
            case "]":
                answer[i] = ")";
                break;
            case "/":
                answer[i] = "|";
                break;
        }
    }
    return new RegExp(`^${answer}$`);
}

export function addToKey(answerKey, challenges) {
    challenges.forEach(challenge => {
        let value;
        
        switch (challenge.type) {
            case "translate":
                value = challenge.compactTranslations;
                break;
        }
    
        answerKey.set(`${challenge.prompt}: ${challenge.type}`, value);
    });
}

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
    const answerList = answerKey.get(`${challengePrompt}: ${challengeType}`);
    return answer === answerList[0];
}