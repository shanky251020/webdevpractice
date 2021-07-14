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

// Now lets get hands-on objects and Arrays - Remember deep dive this in Kyle Simpson(gettify) Courses 

const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100
}

console.log(person);
console.log(person.name);
console.log(person['name']); // same as the line above 

// o/p of this will be 
/* Object {
  "city": "Seattle",
  "favoriteFood": "🌮",
  "name": "Brian Holt",
  "numberOfTacosWanted": 100,
  "state": "WA",
  "wantsTacosRightNow": true,
}
"Brian Holt"
"Brian Holt"
undefined */

/*This is called an object. They're extremely useful in JavaScript; they're how you'll group together like-information so that they can be used together. They contain a bunch of keys and values. The keys are on the left side of the : and represent how you get that piece data of out of the object. name is one such key, and the way I get the name of the

Used in conjunction with functions they're very powerful. */

// Now look at another program where objects are passed in function

// These are two objects names person1 and person2 
const person1 = {
  name: "Brian",
  ageRange: "25-35"
};
const person2 = {
  name: "Jack",
  ageRange: "65-75"
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Daft Punk your crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);

// guess the o/p of this program :-
/*"We think you\'ll like Daft Punk your crazy millenial."
"You\'re obviously going to like Johnny Cash. He walks the line."
undefined */


// Objects can also have functions in them 

const fruits = {
  fruitName: "apple",
  fruitTaste: "Mango",
  newFruit:function newFruit()
  {
    console.log("Hello i am strawbeery")
  }
};

fruits.newFruit()  // Hello I am strawberry 

//Nested Object 

const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    city: "Seattle",
    state: "WA",
    country: "USA"
  }
};

console.log(me);
/* o/p :
Object {
  "location": Object {
    "city": "Seattle",
    "country": "USA",
    "state": "WA",
  },
  "name": Object {
    "first": "Brian",
    "last": "Holt",
  },
}
undefined

*/

//context
const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA"
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  }
};

console.log(me.getAddress());
/* Output:
"Brian Holt
500 Fakestreet
Seattle, WA 55555
USA"
undefined 

explaination :-  refer this stuff in more depth in kyle simpson course
anywhere you are in JavaScript you have a context you are in. You can reference that context by using this. If I just reference this from the outtermost layer, it'll be the global object, which in the browser is something called window. window already has a bunch of stuff on it. */

console.log(this === window);
console.log(this.scrollY);
console.log(window.scrollY);

/* Output :- 
true
0
0
undefined
*/

//ARRAYS 
//Objects are un-ordered collections of datas using keys and values. Arrays, in contrast, are ordered collections of data. If you put something in an array, it has an order.
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);

// Another example 
const courses = [
  { teacher: "Kyle Simpson", course: "JS Function Lite" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React v3" },
  { teacher: "Steve Kinney", course: "State Management" }
];

courses.push({ teacher: "Sean Larkinn", course: "Webpack" });

console.log(courses);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };

console.log(courses);


// Output of this :

/*
Array [
  Object {
    "course": "JS Function Lite",
    "teacher": "Kyle Simpson",
  },
  Object {
    "course": "Intro to Vue",
    "teacher": "Sarah Drasner",
  },
  Object {
    "course": "Complete Intro to React v3",
    "teacher": "Brian Holt",
  },
  Object {
    "course": "State Management",
    "teacher": "Steve Kinney",
  },
  Object {
    "course": "Webpack",
    "teacher": "Sean Larkinn",
  },
]
Array [
  Object {
    "course": "JS Function Lite",
    "teacher": "Kyle Simpson",
  },
  Object {
    "course": "Intro to Vue",
    "teacher": "Sarah Drasner",
  },
  Object {
    "course": "Complete Intro to React v4",
    "teacher": "Brian Holt",
  },
  Object {
    "course": "State Management",
    "teacher": "Steve Kinney",
  },
  Object {
    "course": "Webpack",
    "teacher": "Sean Larkinn",
  },
]
undefined

*/

// Loops on arrays :-

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function(city) {
  console.log(city);
});

