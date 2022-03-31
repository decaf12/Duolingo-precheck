function makeSubmission() {
    const TRANSLATE = '[data-test="challenge challenge-translate"]';
    const TRANSLATE_PROMPT = '[data-test="hint-token"]';
    const ANSWER_FILTER_TEXTBOX = '[data-test="challenge-translate-input"]';

    if (Array.from(document.querySelectorAll(TRANSLATE)).length) {
        const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
        const prompt = promptCollection.map(x => x.innerHTML).join("");
        const answer = document.querySelectorAll(ANSWER_FILTER_TEXTBOX)[0].value;
        return [prompt, answer];
    }
}

const submissionScript = document.createElement('script');
submissionScript.setAttribute("type", "module");
submissionScript.setAttribute("src", browser.runtime.getURL('makeSubmission.js'));
const submissionHead = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
submissionHead.insertBefore(submissionScript, submissionHead.lastChild);

document.addEventListener(
    'keydown',
    async function (e){
        if (e.ctrlKey && e.key === "Enter")
        {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("Enter key pressed");

            const [prompt, answer] = makeSubmission();
            let sending = await browser.runtime.sendMessage({
                prompt: prompt,
                answer: answer,
            });
            console.log("Passed: " + sending.correct);
            if (sending.correct) {
                const submit = new KeyboardEvent('keydown', {key: "Enter"});
                document.dispatchEvent(submit);
            }
        }
    }
);
