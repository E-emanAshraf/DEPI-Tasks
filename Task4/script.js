//1)
function showDateTime() {
    var now = new Date();
    var localTime = now.toLocaleString();
    document.write("Current date and time: " + localTime);
}
//========================================================================================
//2)
var advWindow;
function openAdWindow() {
    setTimeout(function () {

        advWindow = window.open("", "", "width=500,height=400");

        advWindow.document.write("<h2>Special Offer!</h2>");
        advWindow.document.write("<p>This is an advertising page. Here you can write long paragraphs about products, services, or any promotional content. Advertising helps companies communicate with customers and present their best offers.</p>");
        advWindow.document.write("<p>Our company provides high-quality products with excellent customer service. We aim to deliver the best experience for our clients through innovation, reliability, and commitment to excellence.</p>");
        advWindow.document.write("<p>Stay connected with us to discover more exciting offers and promotions in the future.</p>");

    }, 3000);
}

function closePage() {
    advWindow.close();
}
//========================================================================================
//3)
{
var regexeven = /^[0-9]*(0|2|4|6|8)$/;
var str="5578";
console.log(regexeven.test(str));
}
//========================================================================================
//4)
{
var name=prompt("Enter your name:");
var regexname=/^[a-zA-Z][a-zA-Z]+$/;
if(regexname.test(name)){
    console.log("Valid name");
}
else{
    console.log("Invalid name");
}
var phone=prompt("Enter your phone number:");
var regexphone=/^[0-9]{8}$/;
if(regexphone.test(phone)){
    console.log("Valid phone number");
}
else{
    console.log("Invalid phone number");
}
var mobile=prompt("Enter your mobile number:");
var regexmobile=/^(010|011|012)[0-9]{8}$/;
if(regexmobile.test(mobile)){
    console.log("Valid mobile number");
}
else{
    console.log("Invalid mobile number");
}
var email=prompt("Enter your email:");
var regexemail=/^[a-zA-Z]{3,5}@[0-9]{3,5}\.com/;
if(regexemail.test(email)){
    console.log("Valid email");
}
else{
    console.log("Invalid email");
}
var color=prompt("Enter your color:");
var regexcolor=/^(red|green|blue){1}$/;
if(regexcolor.test(color)){
    console.log("Valid color");
}
else{
    console.log("Invalid color");
}


var today = new Date();
today=today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
document.write(`<h2 style="color:${color}">`);
document.write("Welcome dear " + name + "<br>");
document.write("Today's date is: " + today + "<br>");
document.write("Your phone number is: " + phone + "<br>");
document.write("Your mobile number is: " + mobile + "<br>");
document.write("Your email is: " + email);
document.write("</h2>");
}