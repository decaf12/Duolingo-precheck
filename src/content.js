'use strict';

const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", browser.runtime.getURL('makeSubmission.js'));
const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
head.insertBefore(script, head.lastChild);

import { makeSubmission } from "./makeSubmission.js";

document.addEventListener(
    'keydown',
    async function (e){
        if (e.ctrlKey && e.key === "Enter")
        {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("Enter key pressed");

            const [prompt, answer, challengeType] = makeSubmission();
            let sending = await browser.runtime.sendMessage({
                prompt: prompt,
                answer: answer,
                challengeType: challengeType
            })
            console.log("Passed: " + sending.correct);
            if (sending.correct) {
                const submit = new KeyboardEvent('keydown', {key: "Enter"});
                document.dispatchEvent(submit);
            }
        }
    }
)