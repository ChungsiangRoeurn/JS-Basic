// ===============================> Simple Calculator <===============================
// This is calculator that can add, subtract, multiply, or divide based on user input that can make us improve on switch, case, break, and default

let num1 = 10;
let num2 = 0;
let operator = "/"; // change to "-", "*", "/" to test

// Switch statement
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = num1 / num2;
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero";
    }
    break;
  default:
    result = "Invalid operator";
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
