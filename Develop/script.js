// Assignment Code
var generateBtn = document.querySelector("#generate");

// todo: create prompts for password criteria

function mycriteria() {
  var length = prompt("How long would you like your password to be?","Between 8 and 128 characters");
  var lowercase = prompt ("Would you like lowercase letters?")
  var uppercase = prompt ("Would you like uppercase letters?")
  var numbers = prompt ("Would you like numbers?")
  var symbols = prompt ("Would you like random symbols?")


}
// todo: prompt for length of password ( at least 8 characters, no more than 128 characters)
// todo: prompt for character types to include such as: lowercase, uppercase, numeric, and/or special types
// todo: make sure input for prompts is validated and (at least one of each type) is selected
// todo: make sure selection of criteria is included in password
// todo: once generated, password is displayed in alert or written on page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
