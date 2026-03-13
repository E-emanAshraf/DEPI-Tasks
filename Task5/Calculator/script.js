function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate(nums, ops) {
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "*" || ops[i] === "/") {

            let result;

            if (ops[i] === "*") {
                result = multiply(nums[i], nums[i + 1]);
            } else {
                result = divide(nums[i], nums[i + 1]);
            }

            nums.splice(i, 2, result); 
            ops.splice(i, 1);
            i--;
        }
    }

    let res = nums[0];

    for (let i = 0; i < ops.length; i++) {

        if (ops[i] === "+") {
            res = sum(res, nums[i + 1]);
        } else {
            res = subtract(res, nums[i + 1]);
        }

    }

    return res;
}

function expression(str) {
    let numbers = str.split(/[\+\-\*\/]/).map(Number);
    let operators = str.match(/[\+\-\*\/]/g) || [];
    return calculate(numbers, operators);
}

var elements = document.querySelectorAll("[value]");
var calc = "";

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        if (this.value === "C") {
            calc = "";
            document.getElementById("Answer").value = "";
        }
        else if (this.value === "=") {
            let result = expression(calc);
            document.getElementById("Answer").value = result;
            calc=result.toString();
        } 
        else {
            document.getElementById("Answer").value += this.value;
            calc += this.value;
        }

    });
}