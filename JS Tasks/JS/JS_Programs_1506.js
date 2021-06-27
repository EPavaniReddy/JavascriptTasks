//What is difference between function declaration and function expression 

//The main difference between a function expression and a function declaration is the function name,
//which can be omitted in function expressions to create anonymous functions.
//A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs
//as soon as it is defined.

//Function expressions in JavaScript are not hoisted, unlike function declarations.

//Write a Program to check a number is palindrome or not
//Input : 151
//Output: Palindrome

let number = prompt("Enter a number: ");

let rem, temp, final = 0;

temp = number;
while(number>0)
    {
	rem = number%10;
	number = parseInt(number/10);
	final = final*10+rem;
    }
	if(final==temp)
		{
			alert("The input number is Palindrome");
		}
	else
		{
			alert("The input number is not palindrome");
		}


//Write a Program to print a pattern
//        *
//        * *
//        * * *
//        * * * *
//        * * * * *

let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);

//Create a function gstCalculation it will take two parameters i) amount and ii) GST % 
//→ GST default parameter which is equal to 18
//Find the total amount ⇒ amount + gst 
//And return the totalAmount and display it in console

let totalAmt = 0;

function calculateGST(price , gstperct = 18) {
    let gst = 0;
    gst = (price / 100) * gstperct;
    totalAmt = price + gst;
    return (totalAmt);
}

calculateGST(1000, 18);

console.log('The total amount with gst is ' + totalAmt);

//Mark and John are trying to compare there BMI (Body Mass Index) which is calculated by using formula
//            BMI = mass/(height * height)     	(mass in Kg and height in meters)
 
//1)      Store marks and johns mass and height in variables
//2)      Calculate there both BMI’s
//3)      Create a Boolean variable containing information about whether Mark has higher BMI than John
//4)      Print a String to console like Is Marks BMI is higher  than john ? true
//        Else print Marks BMI is higher than John ? false


    let markMass = prompt('Enter Marks mass:');
    let markHeight = prompt('Enter Marks height:');
    let johnMass = prompt('Enter John mass:');
    let johnHeight = prompt('Enter John height:');
    markBMI =  markMass / (markHeight * markHeight);
    johnBMI =  johnMass / (johnHeight * johnHeight);

    let higher = markBMI > johnBMI;

    if(higher){
        console.log('Is Marks BMI is higher  than john ? ' + higher);
    }
    else{
        console.log('Is Marks BMI is higher  than john ? ' + higher);
    }
    
//Write a function to display all the elements of an array where there value is less than 30
//let arr = [23,45,67,89,12,34,30,22];

let lessThanValues = [];

function lessThanThirty(someArr) {
    for(let i = 0; i<someArr.length; i++){
        if(someArr[i] < 30){
            lessThanValues.push(someArr[i]);
        }
    }
    return(lessThanValues);
}

lessThanThirty([23,45,67,89,12,34,30,22]);

console.log('The values less than 30 are ' + lessThanValues);

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
//Sample I/O
//Example string : 'Web Development Tutorial'
//Expected Output : 'Development'

let longestWord = 0;

function findLongestWord(str) {
    let strSplit = str.split(' ');
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }

  findLongestWord("Web Development Tutorial");
  console.log('Longest word in the given string is ' + longestWord);