// Write a function that takes an array of numbers and returns the sum of those numbers

const numbersArray = [2, 5, 11];
const isNumArray = (arr) => arr.every((item) => typeof item === "number");

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    return "Input is not an array.";
  } else if (!isNumArray(arr)) {
    return "Array contains non-numeric elements.";
  } else {
    return arr.reduce((sum, num) => sum + num, 0);
  }
}

console.log(sumArray(numbersArray));
