var run = [true, true, true, true, true];
function button(element, question) {
    if (run[question - 1] === true) {
        document.getElementById("correct" + question).style.borderColor = "lime";
        if (element.id === "incorrect" + question) {
            element.style.borderColor = "red";
        };
        run[question - 1] = false
    };
}
