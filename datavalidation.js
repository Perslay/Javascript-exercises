// Functions for validating data inputs - does password have at least 8 characters, does email have @ symbol, etc.

const enteredEmail = "myEmail@gmail.com";
const enteredPassword = "myPasswórd1!";

function isValidEmail(email) {
  const emailArray = email.split("");
  if (emailArray.includes("@") && emailArray.includes(".")) {
    return true;
  } else {
    return false;
  }
}

function isValidPassword(password) {
  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}

function validateData(email, password) {
  if (isValidEmail(email) && isValidPassword(password)) {
    return "Registration successful!";
  } else if (!isValidEmail(email)) {
    return "Invalid email format.";
  } else if (!isValidPassword(password)) {
    return "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers and special characters.";
  } else {
    return "Unknown error.";
  }
}

console.log(validateData(enteredEmail, enteredPassword));
