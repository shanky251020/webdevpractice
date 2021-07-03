function outer(arg1)
{
    let var1 = 10;
    function inner(arg2) // whenever a function is created all the scopes were available at the birth of (inner)function , it captures and remain there(x) till it is in the memory .It remains in the memory because we have returned a inner and assignd to x.
    {
        let var2 =20;
        console.log(arg1,var1,arg2,var2)
    }
    return inner
}

let x = outer('param1')
//typeof x is function.
// x== inner


x('param2')