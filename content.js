var PLAYERFOOTER_ID = "root";

document.addEventListener(
    'keydown',
    async function (e){
        if (e.ctrlKey && e.key === "Enter")
        {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("Enter key pressed");
            let sending = await browser.runtime.sendMessage({
                answer: "Test answer",
            })
            console.log("Passed: " + sending.correct);
            if (!sending.correct) {
                const submit = new KeyboardEvent('keydown', {key: "Enter"});
                document.dispatchEvent(submit);
            }
        }
    }
)