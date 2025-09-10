// Write a function that takes an array of numbers and returns the sum of those numbers.

let numbersArray = [];

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    return "Input is not an array.";
  } else {
    return arr.reduce((sum, num) => sum + num, 0);
  }
}

console.log(sumArray(numbersArray));
