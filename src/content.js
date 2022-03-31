'use strict';

const submissionScript = document.createElement('script');
submissionScript.setAttribute("type", "module");
submissionScript.setAttribute("src", browser.runtime.getURL('makeSubmission.js'));
const submissionHead = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
submissionHead.insertBefore(submissionScript, submissionHead.lastChild);

import { makeSubmission } from "./makeSubmission.js";

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
            })
            console.log("Passed: " + sending.correct);
            if (sending.correct) {
                const submit = new KeyboardEvent('keydown', {key: "Enter"});
                document.dispatchEvent(submit);
            }
        }
    }
)