const PROMPT_FILTER = '[data-test="hint-token"]';
const ANSWER_FILTER_TEXTBOX = '[data-test="challenge-translate-input"]';

document.addEventListener(
    'keydown',
    async function (e){
        if (e.ctrlKey && e.key === "Enter")
        {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("Enter key pressed");
            const promptCollection = Array.from(document.querySelectorAll(PROMPT_FILTER));
            const prompt = promptCollection.map(x => x.innerHTML).join("");

            let sending = await browser.runtime.sendMessage({
                prompt: prompt,
                answer: document.querySelectorAll(ANSWER_FILTER_TEXTBOX)[0].value,
            })
            console.log("Passed: " + sending.correct);
            if (sending.correct) {
                const submit = new KeyboardEvent('keydown', {key: "Enter"});
                document.dispatchEvent(submit);
            }
        }
    }
)