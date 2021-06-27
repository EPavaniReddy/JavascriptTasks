//post-increment operators a++
//pre-increment operators ++a

var a = 10;
a++; //value of a is 10 in this line, only when it moves to next line the value gets incremented.
console.log('Incremented Value is ' + a);

var a = 30;
console.log('Incremented Value is ' + ++a);// vaue of a is 31 in this line itself, since pre increment is done.

//post-decrement operators b--
//pre-decrement operators --b

var b = 10;
b--; //value of a is 10 in this line, only when it moves to next line the value gets incremented.
console.log('Decremented Value is ' + b);

var b = 30;
console.log('Decremented Value is ' + --b);// vaue of a is 31 in this line itself, since pre increment is done.