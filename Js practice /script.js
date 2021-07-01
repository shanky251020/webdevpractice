let a =10;   // It creates variable of 10 value
console.log(a);  // It prints the value at console.
let b =20;
console.log(b);

let c=[1,2,3,4,5];  // It creates array of size 5                        
console.log(c);

// variables , scope , Arrays , functions , loops etc.

x = 10; // Global Variable 
var y=30; // Function Variable 
let z =40; // Block variable 

// Example of Global variable, function variable and block variable 

function fun()
{
    let a =5;
    if(a==5)
    {
        var i =20;
        let b=10;
        console.log("Inside",b); //10 --- this is defined within the block 
        console.log("Inside",i); // 20 ---- this is because var i=20;
    }
    console.log("Outside",b); //20 -- this comes from the top this also means that b here is not defined outside block
    console.log("Outside",i); // 20 -- this proves that var has a function block .
}
fun();
//console.log("Global",i);  This will not print i as i has the variable var which supports function block

function square_root(n)
{
   console.log(Math.sqrt(n));
   return "Square root printed";
}
square_root(100);

//Function hoisting 

apple(); // This type of function calling works because of function hoisting 
banana(); // This function calling does not work .

function apple()
{
    console.log("Hello world");
}

var banana = function()   // This type of function does not hoist 
{
    console.log("Hello sunday");
}

// apple();  This type of function calling works
// banana(); This type of function calling works 