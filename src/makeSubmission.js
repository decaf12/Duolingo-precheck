export function makeSubmission() {
    const TRANSLATE = '[data-test="challenge challenge-translate"]';
    const TRANSLATE_PROMPT = '[data-test="hint-token"]';
    const ANSWER_FILTER_TEXTBOX = '[data-test="challenge-translate-input"]';

    if (Array.from(document.querySelectorAll(TRANSLATE)).length) {
        const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
        const prompt = promptCollection.map(x => x.innerHTML).join("");
        const answer = document.querySelectorAll(ANSWER_FILTER_TEXTBOX)[0].value;
        const challengeType = "translate"
        return [prompt, answer, challengeType];
    }
}