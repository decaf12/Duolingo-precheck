// import * as constants from "./constants.js";

document.addEventListener(
    'keydown',
    async function (e){
        if (e.ctrlKey && e.key === "Enter")
        {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("Enter key pressed");
            // const prompt = document.getElementsByClassName(constants.TRANSLATION_CLASS);
            // console.log(prompt);
            let sending = await browser.runtime.sendMessage({
                answer: document.getElementsByTagName("textarea")[0].value,
            })
            console.log("Passed: " + sending.correct);
            if (sending.correct) {
                const submit = new KeyboardEvent('keydown', {key: "Enter"});
                document.dispatchEvent(submit);
            }
        }
    }
)