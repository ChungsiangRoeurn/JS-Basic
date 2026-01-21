// let numbers = [1, 2, 3, 4, 5];
// let copy = [...numbers];

// console.log(copy);

// ===============================> Merge arrays

// let a = [1, 2];
// let b = [3, 4];

// let merged = [...a, ...b];

// console.log(merged);

// ===============================> Add item to array (React style)

// let fruits = ["apple", "banana"];

// let newFruits = [...fruits, "orange"];

// console.log(newFruits);

// ===============================> Copy object

// let user = { name: "Jiangsung", age: 20 };

// let copyUser = { ...user };
// console.log(copyUser);

// ===============================> Update object

// let user = { name: "Jiangsung", age: 20 };

// let updateUser = { ...user, age: 21, name: "Chungsiang" };
// console.log(updateUser);

// ===============================> Rest Operator (collect)

// function sum(...numbers) {
//   let total = 0;
//   for (let n of numbers) {
//     total += n;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(2, 4, 5));

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let [first, second, ...rest] = nums;

console.log(first);
console.log(second);
console.log(rest);
