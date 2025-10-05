// Check if a number is even or odd, handle non-number inputs

let a = "1";

if (typeof a !== "number") {
  console.log("This is not a number");
} else if (a % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
