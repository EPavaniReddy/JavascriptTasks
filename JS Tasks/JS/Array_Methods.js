//.tostring() - Converts array to a string with comma separated values.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//.pop() - removes the last element from an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

//.push() - adds a new element to an array (at the end)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

//.shift() - removes the first element of an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();  
console.log(fruits);

//.unshift() - adds element to an array at start(first)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);

//.splice() - used to add new items to an array
//(2) defines the position where new elements should be added (spliced in)
//(0) defines how many elements should be removed.
//("Lemon" , "Kiwi") define the new elements to be added.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);