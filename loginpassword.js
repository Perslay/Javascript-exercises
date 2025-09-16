// Function checking user login and password

const userLogin = "Perslay5PL";
const userPassword = "125Fa%!";

const enteredLogin = "Perslay5PL";
const enteredPassword = "125Fa%!";

function checkLoginPassword(login, password, tryLogin, tryPassword) {
  if (tryLogin === login && tryPassword === password) {
    return "Access granted";
  } else if (tryLogin !== login || tryPassword !== password) {
    return "Access denied";
  } else {
    return "Error";
  }
}

console.log(
  checkLoginPassword(userLogin, userPassword, enteredLogin, enteredPassword)
);
