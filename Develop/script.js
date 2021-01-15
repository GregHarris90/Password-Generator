// TODO SECTION:
// todo: create prompts for password criteria
// todo: prompt for length of password ( at least 8 characters, no more than 128 characters)
// todo: prompt for character types to include such as: lowercase, uppercase, numeric, and/or special types
// todo: make sure input for prompts is validated and (at least one of each type) is selected
// todo: make sure selection of criteria is included in password
// todo: once generated, password is displayed in alert or written on page


// Assignment Code


// DOM ELEMENTS:
// Generate Button selector
var generateBtn = document.querySelector("#generate");

// Textarea for Password selector
var passwordText = document.querySelector("#password");



var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*()-_=+/?<>"

var characterSet = [lower,upper,numbers,symbols]

var password = ""

var passwordLength = 8

for(var i=0; i<8; i++){
  var randomIndex = Math.floor(Math.random() * password.length)
  password += characterSet[randomIndex]
}

var passwordEl = document.getElementById('password')
passwordEl.textContent = password

console.log(password);


// Function to Generate Password:
function generatePassword() {

// 1) Write if/else to confirm!
// 2) Write For loops!
// 3) Write Index Array!

  var setlength = prompt("How long would you like your password to be?","Between 8 and 128 characters");
  // if (setlength) {setlength = 
  // }
  var confirmlowercase = confirm ("Would you like lowercase letters?");
  // if (confirmlowercase) {confirmlowercase = true
  // }
  var confirmuppercase = confirm ("Would you like uppercase letters?");
  var confirmnumbers = confirm ("Would you like numbers?");
  var confirmsymbols = confirm ("Would you like random symbols?");

console.log(setlength);
console.log(confirmlowercase);
console.log(confirmuppercase);
console.log(confirmnumbers);
console.log(confirmsymbols);



// Write password to the #password input (PROVIDED)
// function writePassword() {
//   var password = generatePassword();
//
//   passwordText.value = password;

// }


}

// // Add event listener to generate button (PROVIDED)
// generateBtn.addEventListener("click", writePassword());

// Attach eventListner to Generate Button:
generateBtn.addEventListener("click", function() {

  //Run Generate Password Function:
    generatePassword();
  
  });









// ORIGINAL CODE: TA shared I was over complicating it!

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

