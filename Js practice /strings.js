let apple = "HEllo i am a apple string"; // This is one way of creating string 
// It will show error as string without backslash is ended apple so this is the problem with single quote string 
let mango = 'Hello I am Apple\'s brother';

// Another way of creating string is backticks
// ${argument value} -- This will access the value of string
let hello = `I am hero ${mango}`;

let longstr = `This is a big string \n because It has \n many letters`
console.log(longstr);

let wall = "I am the biggest wall";
let key = "am";
console.log(wall.indexOf(key)); // It tells the index of key if it finds in the string otherwise -1

let bye = "abaabbaab"
console.log(bye.indexOf("ab")); // It tells the first occurence of the letter or key 

let bye1 = "ababbbaba"
console.log(bye1.indexOf("ab",2)); // The second argument means that it helps to find occurence after 2 position

console.log(bye1.lastIndexOf("ab")); // It tells the occurence from the last 

let mainstr = "This-is-a-long-string";
let smallstr = mainstr.slice(2,4);  //Slice takes start and end gives the element which is in b/w and this also works with negative numbers.
console.log(smallstr);

console.log(mainstr.substring(1,2));
console.log(mainstr.substr(0,5)); // This takes argument as start and length till which it has to give


