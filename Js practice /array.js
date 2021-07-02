let arr= [1,2,3,4]
console.log(arr)
console.log(typeof arr[1]);

// for loop

for(let i=0;i<arr.length;i++)
{
    console.log(i,arr[i]);
}

// for-of loop

for(let val of arr)
{
    console.log(val);
}
// for-in loop

for(let index in arr)
{
    console.log(index);
}

let notes = ['sa','re','ga','ma','pa','dha'];

console.log(notes.slice(0,2)); // This is non destructible as it causes no changes to additional array
console.log(notes);
console.log(notes.splice(0,2)); // This changes the original array
console.log(notes);

//Splice can replace items as well

console.log(notes.splice(0,2,'hello','world'))
console.log(notes)
// Concat is also non destructive 
console.log(notes.concat("shyam","Ram"));
console.log(notes);

