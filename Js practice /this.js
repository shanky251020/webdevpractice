// In most cases, the value of this is determined by how a function is called (runtime binding).

function checkThis()
{
    console.log(this)   // Here this is pointing to window
}

checkThis()   

let obj ={
    a :10,
    b :20,
    c :"ssdfgs",
    d : function()
    {
        console.log(this)
    }
}

obj.d() // This time this will point to obj 
let x =obj.d
x()    // This time this will point to window , hence it is proved that this is dependent on runtime 

// This keyword will point to something if it is called by it or otherwise closest scope.