let obj1 = {
   a: 10,
   b: 20,
   c: 30
}

let obj2 = Object.create(obj1)
obj2.p = 'pqr'
obj2.q = 'abc'
obj2.r = 'def'

let obj3 = Object.create(obj2)

/* there is a concept called object inheritance which 
occurs when we make object from object.create 
so obj2 will have a field called proto which points to obj1 */

/* obj2.a will try to find a 
   --- if not found 
   --- it will try to find in obj2.__proto__
   --- if not found it will try to find in obj2.__proto__
   --- and so on until it becomes NULL .


// o/p when typed this
/*
1) obj1;
{a: 10, b: 20, c: 30}

2) obj2;
{}

3) obj2.a;
10

4)obj1 == obj2
false

5) obj1 == obj2.__proto__
true

6) obj3;
{}

7)obj3.__proto__
{p: "pqr", q: "abc", r: "def"}

8)obj3.__proto__.__proto__
{a: 10, b: 20, c: 30}
*/