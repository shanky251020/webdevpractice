function ceo()
{
    console.log("Hey I am CEO")
    cto()
}

function cto()
{
    console.log("Hey I am CTO")
    vp()
}
function vp()
{
    console.log("Hey I am Vp")
    techlead();
}

function techlead()
{
    console.log("Hey I am tech lead")
    dev();
}

function dev()
{
    console.log(" Hey i am developer")
   //  throw new error("The code didnot work ") --- we can check that other fun is in call stack 
 }

console.log("I am calling ceo function")
ceo();

/* execution flow --- Function call stack 
    |developer |
    |techlead()|
    |vp()      |
    |cto()     |
    |ceo()     | after this it moves to below ceo()
    ------------
    */