// //Write a JavaScript program to find the given number is even or odd
const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

//Write a JavaScript program to find the given value from the user is a string or a number
const inputValue = prompt("Enter a value: ");

if (typeof inputValue === 'string'){
    console.log("Given input value is a string");
}
else{
    console.log("Given input value is a number");
}

//  Write a JavaScript program to find that 
//  When a user enter their age you display who they are 
//  If age < 3  display infant
//  If age greater than 3 and less than 12 display child
//  If age is greater than 12 and less than or equal to 19 teen age 
//  If age is greater than 19 and less than 40 display adult
//  Except all these cases display old age
 
const age = prompt("Enter your age: ");

if (age < 3){
    console.log("Infant");
}
else if(age>3 && age<12){
    console.log("Child");
}
else if(age>12 && age<= 19){
    console.log("Teenager");
}
else if(age>19 && age<= 40){
    console.log("Adult");
}
else{
    console.log("Old Age");
}