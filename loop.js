// ===============================> Loop Concept <===============================

// Learn Concepts: for, while, do...while.

// ============= Exercise ONE =============

// ===> Using for loop
// for (i = 1; i <= 50; i++) {
//   console.log(i);
// }

// ===> Using while loop
// let i = 1;
// while (i <= 50) {
//   console.log(i);
//   i++;
// }

// ===> Using do...while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 50);

// ===================> All three loops print numbers 1 to 50.

// ============= Exercise 2: Print all multiples of 3 and 5 between 1–100 =============

// ===> it takes only the number can modulus by 3 like 3 itselft, 5 itselft, 6, 9, 10, 12 until 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

// Using while loop
// let i = 1;
// while (i <= 100) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// Using do...while loop
// let i = 1;
// do {
// if (i % 3 === 0 || i % 5 === 0) {
// console.log(i);
// }
// i++;
// } while (i <= 100);

// ====> Sum all numbers in an array

// let numbers = [5, 10, 15, 20];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]; // sum = sum + numbers[i]

//   // i = 0 -> sum = 0 + 5 = 5
//   // i = 1 -> sum = 5 + 10 = 15
//   // i = 2 -> sum = 15 + 15 = 30
//   // i = 3 -> sum = 30 + 20 = 50
// }
// console.log("Sum:", sum);

// sum += numbers[i]; // sum = sum + numbers[i]
// numbers[i] = លេខតាម index i

// i = 0 → numbers[0] = 5

// i = 1 → numbers[1] = 10

// i = 2 → numbers[2] = 15

// i = 3 → numbers[3] = 20

// sum += numbers[i] មានន័យដូចជា: sum = sum + numbers[i]

// iteration 0: sum = 0 + 5 = 5

// iteration 1: sum = 5 + 10 = 15

// iteration 2: sum = 15 + 15 = 30

// iteration 3: sum = 30 + 20 = 50
