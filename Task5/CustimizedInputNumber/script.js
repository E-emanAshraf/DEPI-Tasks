var num = /^[0-9]*$/;
var span = document.createElement("span");
var inputField = document.getElementById("inputField");
inputField.addEventListener("input", function () {
    if (!num.test(inputField.value)) {
        document.body.insertBefore(span, inputField.nextSibling);
        span.style.color = "red";
        span.textContent = "Please enter numbers only.";
    }
    else {
        span.textContent = "";
    }
});
var clearButton = document.getElementById("clear_input");
clearButton.addEventListener("click", function () {
    inputField.value = "";
    span.textContent = "";
});
