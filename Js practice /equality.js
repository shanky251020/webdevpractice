// Refer equality and sameness in mdn

console.log(1 == '1') // true
console.log(1 === '1') // false (type checking too)

// peculiar cases 

console.log(0 == '') // true, because Number('') == 0

console.log('false' == false) // false  both typecast to number Number(false) =0 and Number('false')=NAN

console.log('' == false) // true, both typecast to 0 

// this doesn't hold good for abstract equality 
// a = b,  b = c  ... implies that .. a = c

console.log([1,2] == [1,2]) // false because they point to different locations

