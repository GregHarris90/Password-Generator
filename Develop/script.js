// TODO SECTION:
// Create prompts for password criteria
// Prompt for length of password ( at least 8 characters, no more than 128 characters)
// Prompt for character types to include such as: lowercase, uppercase, numeric, and/or special types
// Make sure input for prompts is validated and (at least one of each type) is selected
// Make sure selection of criteria is included in password
// Once generated, password is displayed in alert or written on page

// ================================================================================================== //

// Assignment Code

// DOM ELEMENTS:
  // Generate Button selector
var generateBtn = document.querySelector("#generate");

// Attach eventListner to Generate Button:
generateBtn.addEventListener("click", function() {

  //OnClick Run Generate Password Function:
    generatePassword();
  
  });

var setlength = "";
var confirmlowercase;
var confirmuppercase;
var confirmnumbers;
var confirmsymbols;

// Function to Generate Password:
function generatePassword() {

  // Password Criteria (prompts/confirms)

  // Set Length 
  var setlength = prompt("How long would you like your password to be?","Between 8 and 128 characters");
  
  // Length Parameters
  while (setlength <=7 || setlength >=129){
    alert("Length of password must be between 8 and 128 characters!");
    var setlength = prompt("How long would you like your password to be?","Between 8 and 128 characters");
  }

  // Password Criteria

  // Confirm Lowercase
  var confirmlowercase = confirm ("Would you like lowercase letters?");
  // Confrim Uppercase
  var confirmuppercase = confirm ("Would you like uppercase letters?");
  // Confirm Numbers
  var confirmnumbers = confirm ("Would you like numbers?");
  // Confirm Symbols
  var confirmsymbols = confirm ("Would you like random symbols?");

  while (confirmlowercase === false && confirmuppercase === false && confirmnumbers === false && confirmsymbols === false) {
    alert("Must select at least one (lower, upper, numbers, symbols!)")
    // Confirm Lowercase
    var confirmlowercase = confirm ("Would you like lowercase letters?");
    // Confrim Uppercase
    var confirmuppercase = confirm ("Would you like uppercase letters?");
    // Confirm Numbers
    var confirmnumbers = confirm ("Would you like numbers?");
    // Confirm Symbols
    var confirmsymbols = confirm ("Would you like random symbols?");
  }
  
  console.log(setlength);
  console.log(confirmlowercase);
  console.log(confirmuppercase);
  console.log(confirmnumbers);
  console.log(confirmsymbols);

  // New Function for grabbing Random Characters
  function getCharacter(characterSet) {
    var randomIndex = Math.floor(Math.random() * characterSet.length)
    return characterSet [randomIndex]
  }
  
  // Password Variables
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*()-_=+/?<>"
  
  // Variable of Characters (Array of Password Criteria)
  var characters = [lower,upper,numbers,symbols]
  
  // Password Length

  // Variable of empy=ty string for password
  var password = ""

  // For Loop grabbing Random Characters from Variables
  for(var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length)
    var characterSet = characters [randomIndex]
    password += getCharacter(characterSet)
  }
  
  var passwordEl = document.getElementById('password')
  passwordEl.textContent = password
  
  console.log(password);
  
}
  
  




// ================================================================================================== //

//OLDER CODE BELOW:

// // (PROVIDED) Add event listener to generate button 
// generateBtn.addEventListener("click", writePassword());


// // (PROVIDED) Write password to the #password input 
// function writePassword() {
//   var password = generatePassword();
//
//   passwordText.value = password;

// }

  // Textarea for Password selector
// var passwordText = document.querySelector("#password");

// ORIGINAL CODE for Password Generator: 
// TA shared I was over complicating it!

// // Variable for Values of Random Password:

// var ranPassword = [ranLower, ranUpper, ranNumber, ranSymbol]

// console.log(ranPassword);
// // Random Functions to get lowercase, uppercase, numbers, symbols:

//   function ranLower(){
//     var lowercase = "abcdefghijklmnopqrstuvwxyz";
//     return lowercase[Math.floor(Math.random() * lowercase.length)];
//   }

//   function ranUpper(){
//     var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     return uppercase[Math.floor(Math.random() * uppercase.length)];
//   }

//   function ranNumber(){
//     var numbers = "0123456789";
//     return numbers[Math.floor(Math.random() * numbers.length)];
//   }

//   function ranSymbol(){
//     var symbols = "!@#$%^&*()-_=+/?<>";
//     return symbols[Math.floor(Math.random() * symbols.length)];

//   }

//   console.log(ranLower());
//   console.log(ranUpper());
//   console.log(ranNumber());
//   console.log(ranSymbol());

