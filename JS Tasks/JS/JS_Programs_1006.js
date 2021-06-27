//Write a JavaScript Program to check the even numbers from 1-100
for(let i = 1; i<=100; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//Write a program to check the given number is armstrong number or not

const number = prompt("Enter a number: ");

let sum = 0;
let temp = number;
while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10);
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

//Write a Program to check the given number is prime number or not 
const number = prompt("Enter a number: ");

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}



   
