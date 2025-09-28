var run = true;
function button(element) {
    if (run === true) {
        document.getElementById("correct").style.borderColor = "lime";
        if (element.id === "incorrect") {
            element.style.borderColor = "red";
        };
        run = false
    };
}
