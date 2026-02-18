//1)welcome alert
alert("Welcome to my first site");

//2)body of exchangeEgyPound
function exchangeEgyPound(pounds) {
    const $dolar = 30.9;
    let exchangedMoney = pounds / $dolar;
    return exchangedMoney.toFixed(1);
}

//calling exchangeEgyPound function
console.log(`exchangeEgyPound (2000): $${exchangeEgyPound(2000)}`);
console.log(`exchangeEgyPound (340): $${exchangeEgyPound(340)}`);

//seperator
console.log("=====================================================");

//3)body of display numbers
function displayNumbers() {
    for (let index = 1; index <= 20; index++) {
        index % 2 ? console.log(index) : console.log("I’m even");
    }
    console.log("=====================================================");
}

//4)data validation
function dataValidation() {
    let firstName = prompt("Enter your first name");
    while (!isNaN(firstName)) {
        firstName = prompt("Enter your first name");
    }
    let mobileNumber = prompt("Enter your phone number");
    while (!isFinite(mobileNumber) ||mobileNumber==null|| mobileNumber.length != 11) {
        mobileNumber = prompt("Enter your phone number");
    }
    let birthYear = prompt("Enter your birth year");
    while (birthYear <= 1900||isNaN(birthYear)) {
        birthYear = prompt("Enter your birth year");
    }
    let color = prompt("Color should be (red or green or blue)");
    while (color != "red" && color != "green" && color != "blue") {
        color = prompt("Color should be (red or green or blue)");
    }
    let age = new Date().getFullYear() - birthYear;
    document.write(`<h2 style="color:${color}">welcome dear ${firstName}</h2>`);
    document.write(`<h2 style="color:${color}">your age is ${age}</h2>`);
    document.write(`<h2 style="color:${color}">your mobile is ${mobileNumber}</h2>`);
}

//calling dataValidation function
dataValidation();

//=============================================bonus=============================================
function equalFunc(a,b,c){
    if(a==b&&b==c)return 3;
    if(a==b||a==c||b==c)return 2;
    return 0;
}
console.log(equalFunc(3, 4, 3));
console.log(equalFunc(1, 1, 1));
console.log(equalFunc(3, 4, 1));
console.log("=====================================================");
//==============================================================================================
var sum=0;
while(true){
    let num = prompt("Enter your number");
    if(isNaN(num)||num==""||num==null)continue;
    num=parseFloat(num);
    sum+=num;
    if(num==0||sum>50)break;
}
alert(`sum= ${sum}`);
//==============================================================================================
var message = prompt("Enter your message");
for (let index = 1; index <=6; index++) {
    document.write(`<h${index}>${message}</h${index}>`)
}


