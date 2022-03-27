document.addEventListener(
    'keydown',
    function (e){
        if (e.key === "Enter")
        {
            console.log("Enter key pressed");
            e.stopImmediatePropagation();
        }
    }
)