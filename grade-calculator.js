// ===============================> Simple Grade Calculator <===============================
// This is how i learn to improve " if, else if and else statement "" in JS

let score = 50;
// Conditional statements,
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score < 90) {
  grade = "b";
} else if (score >= 70 && score < 80) {
  grade = "C";
} else if (score >= 60 && score < 70) {
  grade = "D";
} else if (score >= 50 && score < 60) {
  grade = "E";
} else {
  grade = "F";
}

console.log(`Score: ${score}, Grade: ${grade}`);
