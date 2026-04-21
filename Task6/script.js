{
    var a = 10;
    var b=20;
    [b,a]=[a,b];
    console.log(a);
    console.log(b);
}
//=========================================================================================
{
    function min_max(...numbers){
        return {
            min: Math.min(...numbers),
            max: Math.max(...numbers)
        };
    }
    console.log(min_max(1,2,3,4,5));

}
//=========================================================================================
{
    var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
    //test that every element in the given array is a string 
    var test_1=fruits.map((fruit)=>{
        return (typeof fruit === "string")?true:false;
    });
    test_1.map((i)=>{
        (i)?console.log("string"):console.log("not string");
    });

    //test that some of array elements starts with "a" 
    var test_2=fruits.filter((fruit)=>{
        if(fruit.startsWith("a"))return fruit;
    });
    (test_2.length>0)?console.log(test_2):console.log("no fruits start with a");

    //generate new array filtered from the given array with only elements that starts with "b" or "s"
    var test_3=fruits.filter((fruit)=>{
        if(fruit.startsWith("b") || fruit.startsWith("s"))return fruit;
    });
    (test_3.length>0)?console.log(test_3):console.log("no fruits start with b or s");

    //generate new array each element of the new array contains a string declaring that you like the give fruit element 
    var test_4=fruits.map((fruit)=>{
        return `I like ${fruit}`;
    });

    //use forEach to display all elements of the new array from previous point
    test_4.forEach((fruit)=>{
        console.log(fruit);
    });
}