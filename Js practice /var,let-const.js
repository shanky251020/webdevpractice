/*
var a = 10;
a++;
console.log(a);

let b = 20;
b++;
console.log(b);

const c =20;
c++;
console.log(c) // It throws an error as const var cannot be further changed

*/

// Now let's see what cannot we change in const

const obj = {
    a : 10,
    b : 20,
    c : 30,
}
obj.d = 10; // It works completely fine
delete obj.d; // It also works completely fine 
// so const is not fully immutable but we cannot assign obj it to different thing 
