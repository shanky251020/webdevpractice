const myName = 'Shashank Sharma';
console.log(myName); // o/p - Shashank Sharma


const firstName = 'shashank'
const secondName = 'sharma'
/*The first way is the old way. We can use the + to tell JavaScript to connect two strings. Notice how we have insert the space between firstName and lastName. The computer only does exactly what you tell it to do. If you don't insert that space, it doesn't get put there.

The second line is the new way of doing this. JavaScript got a large update in 2015 and it made things a lot easier. Now you can use the back tick (notice the first uses a double quote, you must use back ticks to do template strings) to do template strings. If you do that, anything inside of ${yourVariableHere} gets output in the string. Cool, right? */
const sentence = "Hello "+ firstName + " "+SecondName + " "+ "How are you !"
const sentenceTemplate = `Hello ${firstName} ${secondName} ! How are you !` // Sentence template using backticks and dollar sign 
// o/p is "Hello shashank Sharma ! How are you" 

// Booleans and control flow

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

if (2 + 2 === 4) {
    console.log(
      "Oh thank god, the fundamental principles of mathematics still hold true."
    );
  } else {
    console.log("Uh, panic?");
  }

  const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty >= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}

//loops
let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);


//functions 

function addTwo(number)
{
  return number+2;
}
const finalAnswer = addTwo(5)
console.log(finalAnswer)  // o/p : 7

// Another function which takes the argument as firstName , lastName, honorific , greeting

function greet(firstName, lastName, honorific,greeting){
  return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}
console.log(greet("Brian","Holt","Lord","Salutation"))

// scope : Every time you call a function, it has its own scope. Other things can't peek into it; it just has its own little workspace for it work with. Once its done, any variable that you haven't explicitly held on to or returned at the end is discarded.
// example :- 
function addFive(number) {
  const someVariable = "you can't see me outside this function";
  return number + 5;
}

addFive(10);
console.log(someVariable);
// op : reference error because someVaribale is not accessible outside the scope of function

// Built-In functions 

const sentence = "HEY I AM SHASHANK"
console.log(sentence.toLowerCase());

// Another one 

console.log(Math.round(5.1));  // o/p 5 

// Here is another one hahaa

const myName = "Shashank Sharma"
console.log(myName.substr(3,4));

// There are bunch of builtin function we can explore on MDN .


