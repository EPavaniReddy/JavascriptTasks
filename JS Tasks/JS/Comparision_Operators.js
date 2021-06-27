// Comparision Operators <, >, <=, >=, ==, ===, !=

//Less than <

var a = 20;
var b = 30;

var result;

result = a<b;

console.log('Result of less than is ' + result);

//greater than >

result = a>b;

console.log('Result of greater than is ' + result);

//less than or equal to <=

var number1 = 123;
var number2 = 345;

var output;

output = number1 <= number2;

console.log('Result of less than or equal to is ' + output);

//greater than or equal to >=

var num1 = 1234;
var num2 = 5678;

var otpt;

otpt = num1 >= num2;

console.log('Result of greater than or equal to is ' + otpt);

// == & ===
// == will check the value and ignore the datatype and === checks the value and datatype also

var value1 = 1234;
var value2 = '1234';

var compoutput;

compoutput = value1 == value2;
console.log('Result of double equal to is ' + compoutput);

var value1 = 1234;
var value2 = '1234';

var compoutput;

compoutput = value1 === value2;
console.log('Result of triple equal to is ' + compoutput);

// != not equal to

var val = 1234;

var res = val!=100;
console.log('Result of not equal to is ' + res);

// Logical Operators
// or || and &&

console.log('Result for true or true ' + true || true);
console.log('Result for true or false ' + true || false);
console.log('Result for false or true ' + false || true);
console.log('Result for false or false ' + false || false);

console.log('Result for true and true ' + true && true);
console.log('Result for true and false ' + true && false);
console.log('Result for false and true ' + false && true);
console.log('Result for false and false ' + false && false);