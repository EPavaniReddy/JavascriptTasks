//Write a program to check whether ‘pineapple’ is present in an array
//let arr = [‘apple’,’banana’,’mango’,’pineapple’] 
//If pineapple is present it should return true or It should return false

let arr = ['apple','banana','mango','pineapple'];

if(arr.indexOf("pineapple") !== -1){  
    alert("Yes, the value exists!");  
}   
else{  
    alert("No, the value is not present in the array");  
}

//Write a Program to print 1-100 Fibonacci numbers
//Input : 100
//Output : 1,3,5,8,13,……..89

const number = 100;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}

//

//Write a Program to check two given numbers and return true if one of the number is 50 or if
//their sum is 50.

const a = 30;
const b = 20;

if((a == 50 || b == 50) || (a + b == 50)){
    console.log('True');
}

//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);

//Program to search particular element in a string
//è If the element is present in the string it should return True else it should return False
//Input :  achieversit
//Particular element ‘v’
//Output : True
let str = 'achieversit';

if(str.indexOf("v") !== -1){  
    console.log("False");  
}   
else{  
    console.log("True");  
}

//Write a program to  find the two number in which there  sum should be  equal to 10  of an array
//Sample I/O
//Input let array = [2,3,5,7,9,0];
//Output = 3,7;

let totalEqualToTen = function(someArr,target){
    for(let i=0;i<someArr.length;i++){
        for(let j=0;j<someArr.length;j++){
            if(someArr[i] + someArr[j] == target){
                console.log('Some of these numbers in the array is ten' + someArr[i] + '' + someArr[j]);
            }
        }
    }
}

totalEqualToTen([2,3,5, 7,9,0], 10);