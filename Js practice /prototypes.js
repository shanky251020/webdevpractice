let str = "Asdasd"                              // 3 levels from null(when typed str.__proto__.__proto__.__proto)
let num = 233                                   // 3 levels from null
let bool = true                                 // 3 levels from null
let arr = [246,436,6,346]                       // 3 levels from null
let obj = {a: 10, b: 'asdasd'}                  // 2 levels from null
let fun = function () { console.log ('yay!') }  // 3 levels from null

// if x and y are not primitive 
// x == y : true <- what does this mean ? 
// this means they are reference to the same object in memory 

// caps on String, Array , Number , Array , Boolean , Function, Object creates above types of data-types

console.log(typeof String)   // o/p :  function,  String is a function which can create string .
console.log(typeof Array)    // o/p :  function,  Array is a function which can create Array .
console.log(typeof Number)   // o/p :  function,  Number is a function which can create Number .
console.log(typeof Array)    // o/p :  function,  Array is a function which can create Array .
console.log(typeof Boolean)  // o/p :  function,  Boolean is a function which can create Boolean.
console.log(typeof Function) // o/p :  function,  Function is a function which can create Function .
console.log(typeof Object)   // o/p :  function,  Object is a function which can create Object .

console.log('======= proto chain =======')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

// Everything indirectly inherits from the same thing
// that obj is inherited from 
// i.e. in Javascript, everything is essentially an Object

console.log('======= prototypes ======= ')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)

// String.prototype inherits from Object.prototype
//Boolean.protype is a  model or blueprint from which every boolean is created