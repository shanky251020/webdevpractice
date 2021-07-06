
var quidditchwinner = "HarryPotter";

function changewinner(winner)
{
    Winner = 'Draco Malfoy'
}

console.log("The winner was" + quidditchwinner)  // The winner was Harry potter

changewinner(quidditchwinner);

console.log("Now the winnner is "+quidditchwinner)  // Now the winner is Harrypotter

// We can clearly see that it is pass by value

var winner = ["Harry", "simona", "Pansy"]

function changedwinner(winner)
{
    winner[0]="Helo"
    winner[1]="Bye"
    winner[2]="Joy"
}

console.log("The winner was" + winner) // The winner was Harry, Simona , Pansy

changedwinner(winner)

console.log("The winner is " + winner) // The winner is Helo , Bye , joy

/* we can see here that the value is changed and it look likes pass by reference 
but according to javascript documentation js always do pass by value so how it is doing it 
Now , 
    Here winner array is refering to some value lets just say x and x is reference to array where data is stored
    and we pass winner as value to x but x is reference to array so value is itself reference to array 
    the value itself is passed  as a reference 
   */