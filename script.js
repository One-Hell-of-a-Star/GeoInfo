var run = [true, true, true, true, true];
function button(element, question) {
    if (run[question] === true) {
        document.getElementById("correct" + question).style.borderColor = "lime";
        if (element.id === "incorrect" + question) {
            element.style.borderColor = "red";
        };
        run[question] = false
    };
}
