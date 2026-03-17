var nameInput = document.getElementById("name");
var email = document.getElementById("email");
var age = document.getElementById("age");
var add = document.getElementById("add");
var tableBody = document.getElementById("tableBody");
var nameregex = /^[a-zA-Z]*$/;
var emailregex = /^[a-zA-Z]{4,6}@[a-zA-Z]{3,6}\.[a-zA-Z]{2,3}$/;
var ageregex = /^[0-9]*$/;

//errors
var nameError = document.createElement("span");
var emailError = document.createElement("span");
var ageError = document.createElement("span");

// Append after inputs
nameInput.after(nameError);
email.after(emailError);
age.after(ageError);


nameInput.addEventListener("input", function () {
    if (!nameregex.test(nameInput.value)) {
        nameError.textContent = "Name should contain only letters";
        nameError.style.color = "red";
    }
    else {
        nameError.textContent = "";
    }
});

email.addEventListener("input", function () {
    if (!emailregex.test(email.value)) {
        emailError.textContent = "invalid email format";
        emailError.style.color = "red";
    } else {
        emailError.textContent = "";
    }
});

age.addEventListener("input", function () {
    if (!ageregex.test(age.value)) {
        ageError.textContent = "age should contain only numbers";
        ageError.style.color = "red";
    }
    else {
        ageError.textContent = "";
    }
});

add.addEventListener("click", function (e) {
    e.preventDefault();
    if (nameInput.value === "") {
        nameError.textContent = "Name is required";
        nameError.style.color = "red";
    }
    if (email.value === "") {
        emailError.textContent = "email is required";
        emailError.style.color = "red";
    }
    if (age.value === "") {
        ageError.textContent = "age is required";
        ageError.style.color = "red";
    }
    if (
        nameregex.test(nameInput.value) &&
        emailregex.test(email.value) &&
        ageregex.test(age.value)
    ) {
        var newrow = document.createElement("tr");
        var namecell = document.createElement("td");
        var emailcell = document.createElement("td");
        var agecell = document.createElement("td");
        newrow.appendChild(namecell);
        newrow.appendChild(agecell);
        newrow.appendChild(emailcell);
        tableBody.appendChild(newrow);

        namecell.textContent = nameInput.value;
        emailcell.textContent = email.value;
        agecell.textContent = age.value;
        age.value = "";
        email.value = "";
        nameInput.value = "";
    }
});

clear.addEventListener("click", function () {
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
});