// ===============================> Function Concept <===============================
// This is calculator that can add, subtract, multiply, or divide based on user input that can make us improve on switch, case, break, and default

// // ==> Regular function
// function squareAndCube(num) {
//   let square = num * num;
//   let cube = num * num * num;
//   return { square, cube };
// }

// let result = squareAndCube(3);
// console.log("Square1:", result.square); // 9
// console.log("Cube1:", result.cube); // 27

// // ==> Arrow function version
// const squareAndCubeArrow = (num) => ({
//   square: num * num,
//   cube: num * num * num,
// });

// let result2 = squareAndCubeArrow(4);

// console.log("Square2:", result2.square); // 16
// console.log("Cube2:", result2.cube); // 64

// function isPalindome(str) {
//   let reversed = str.split("").reverse().join("");
//   return (str === reversed);
// }
// // split("") = cut word from normal to array object
// // reverse() = reverse word in array like " apple " -> " elppa ""
// // join("") = make array object to normal word

// console.log("Helleh");

// ======> Arrow function =========

// const isPalindome = (str) => str === str.split("").reverse().join("");
// console.log(isPalindome("racecar"));
// console.log(isPalindome("javascript"));

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));

// const factorialArrow = (n) => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };
// console.log(factorialArrow(5));
// console.log(factorialArrow(3));

// ================>
// Concepts: Arrays, indexing, looping arrays.

// Find largest and smallest in an array.

// Sum of all array elements.

// Reverse an array without using built-in functions

// let numbers = [10, 5, 20, 8, 15];

// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }

//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }

// console.log("Largest:", largest);
// console.log("Smallest:", smallest);

// let numbers = [10, 5, 20, 8, 15];

// let sum = 2;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("Sum:", sum);

// let numbers = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversed.push(numbers[i]);
// }

// console.log("Reversed:", reversed);

// let numbers = [1, 2, 3, 4, 5];

// Square each number
// let squares = numbers.map(function (num) {
//   return num * num;
// });

// console.log("Squares:", squares);

// ===> Arrow function
// const squares = numbers.map((num) => num - num);
// console.log("Squares:", squares);

// let numbers = [1, 2, 3, 4, 5, 6];

// let evens = numbers.filter(function (num) {
//   return num % 2 === 0;
// });

// console.log("Even numbers:", evens);

// const getEvenNumers = numbers.filter((num) => num % 2 === 0);
// console.log(getEvenNumers);

let numbers = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0); // 0 is the initial value

console.log("Sum:", sum); // 15
