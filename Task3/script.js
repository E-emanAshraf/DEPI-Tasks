// 1. Write a script that accepts a string from user through prompt and
// count the number of ‘e’ characters in it.

{
    let str = prompt("Enter your string");
    let matches = str.match(/e/g);  //case sensitive if not sensitive var matches = str.match(/e/gi);
    let count = matches ? matches.length : 0;
    console.log(count);
}

//****************************************************************************************
// 2. Write a script to determine whether the entered string is
// palindrome or not. Request the string to be entered via prompt, ask
// the user whether to consider case sensitivity of the entered string or
// not via confirm, handle both cases in your script i.e. RADAR NOON
// MOOMarepalindrome.

{
    let original = prompt("Enter your string");
    let sensitivity = confirm("Press OK for case sensitive, Cancel for not case sensitive");
    let str = original;
    (sensitivity) ? str = str : str = str.toLowerCase();
    let reversed_word = str.split("").reverse().join("");
    (reversed_word == str) ? console.log(`${original} is palindrome`) : console.log(`${original} is not palindrome`);
}

//****************************************************************************************
// 3. Fill an array of 3 elements from the user, and apply each of the
// following mathematical operations on it (+, *, /). Format the output as
// shown in Fig.

{
    let arr = [];
    let num;
    for (let i = 0; i < 3; i++) {
        num = parseFloat(prompt("Enter your number"));
        while (num == 0) {
            num = parseFloat(prompt("Enter your number except 0 for /"));
        }
        arr.push(num);
    }
    let sum = arr[0] + arr[1] + arr[2];
    let mul = arr[0] * arr[1] * arr[2];
    let div = (arr[0] / arr[1] / arr[2]).toFixed(1);

    document.write(`<h1>Adding -- Multipling -- Dividing 3 values</h1>`);
    document.write("<div style='width:500px;height:1px;background-color:black'></div>");
    document.write(`<h3 style='color:red'>sum of 3 values ${arr[0]} + ${arr[1]} + ${arr[2]} = <span style='color:black'>${sum}</span></h3>`);
    document.write(`<h3 style='color:red'>multiplication of 3 values ${arr[0]} * ${arr[1]} * ${arr[2]} = <span style='color:black'>${mul}</span></h3>`);
    document.write(`<h3 style='color:red'>division of 3 values ${arr[0]} / ${arr[1]} / ${arr[2]} = <span style='color:black'>${div}</span></h3>`);
    document.write("<div style='width:400px;height:10px;'></div>");
}

//****************************************************************************************
// 4. Fill an array (5 numerical values) from the user, Sort it in
// descending and ascending orders then display the output as shown
// in Fig.

{
    let arr = [];
    let num;
    for (let i = 0; i < 5; i++) {
        num = parseFloat(prompt("Enter your number"));
        arr.push(num);
    }
    //spread operator
    let descending = [...arr].sort((a, b) => b - a).join(" , ");
    let ascending = [...arr].sort((a, b) => a - b).join(" , ");
    document.write(`<h1>Sorting</h1>`);
    document.write("<div style='width:500px;height:1px;background-color:black'></div>");
    document.write(
        `<h3 style='color:red'>u've entered the values of <span style='color:black'>${arr.join(" , ")}</span></h3>`,
    );
    document.write(
        `<h3 style='color:red'>ur values after being sorted descending <span style='color:black'>${descending}</span></h3>`,
    );
    document.write(
        `<h3 style='color:red'>ur values after being sorted ascending <span style='color:black'>${ascending}</span></h3>`,
    );
    document.write("<div style='width:400px;height:10px;'></div>");
}

//****************************************************************************************
// 5.Write a script that ask the user to Enter the value of a circle’s radius
// in order to calculate its area as shown in fig

{
    let r = parseFloat(prompt("What is the value of your circle raduis"));
    let area = Math.PI * r * r;
    alert(`area of the circle = ${area}`)
}

//****************************************************************************************
// 6.Enter another value to calculate its square root and alert the result
// as shown in fig

{
    let num = parseFloat(prompt("What is the value you want to calculate its square root"));
    let res = Math.sqrt(num);
    alert(`sqrt of ${num} = ${res}`)
}

//****************************************************************************************
// 7.Enter an angle to calculate its cos value then display the output as
// shown in Fig

{
    let num = parseFloat(prompt("What is the value you want to calculate its cos value"));
    let radians = num * (Math.PI / 180);
    let res = Math.cos(radians).toFixed(4);
    document.write(`<h3>cos of ${num}° = ${res}</h3>`);
}
