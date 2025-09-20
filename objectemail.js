// check if user object has correct email

const user = {
  email: "mniamki@gmail.com",
  username: "Mniamki",
  password: "uwu123",
};

enteredEmail = "mniamki@gmail.com";

function validateEmail(enteredEmail, savedEmail) {
  if (enteredEmail === savedEmail) {
    return "Email is correct";
  } else {
    return "Email is incorrect";
  }
}

console.log(validateEmail(enteredEmail, user.email));
