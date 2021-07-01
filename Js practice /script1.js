//Object oriented programming in javascript.

// allows to create objects without defining the class 

// This type of object creation is called JSON --- Javascript object Notation
var bird={
    x:100,
    y:200,
    color:"blue",
    eggs:[1,2,3,4],

    fly:function(){
        console.log("Bird is flying",this.x,this.y); // To access the value of x and y we have to use keyword called this .
    }
};
console.log(bird.x);
console.log(bird.y);
console.log(bird.color);
console.log(bird.eggs);
console.log(bird.fly());


//Iterating over the array in object
//for loop
for(let i=0;i<bird.eggs.length;i++)
{
    console.log(bird.eggs[i]);
}

// for each loop

bird.eggs.forEach(function(val,idx) // This tells the index of every element of value and values too
{
    console.log(val,idx);
});