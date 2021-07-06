/* function sayHello()
{
    console.group("Hello !")
}
console.log("and the wait starts")
setTimeout(sayHello,1000)  // And a minute later Hello prints 
*/
/*
function sayBye()
{
    console.log("Bye !")
}
console.log(" And the wait starts")
setInterval(sayBye,1000)
*/
// And a minute later it keeps on printing Bye until it is cancelled


//Now to cancel the interval 
/*
function sayBye()
{
    console.log("Bye !")
}

console.log(" And the wait starts")
var intervalId = setInterval(sayBye,1000);
clearInterval(intervalId) // it clears the interval  and nothing is printed
*/

//Another way for clear understanding 

/*
var intervalId;
var count =0;
function sayBye()
{
    count++;
    if(count>5)
    {
        clearInterval(intervalId)
    }
    console.log("Bye !");
}

intervalId =setInterval(sayBye,1000);
*/

// another way of using above syntaxes is 

setInterval(function() {
    console.log("Bye")
}, 1000);

