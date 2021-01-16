// Assignment Code

// DOM ELEMENTS:
  // Generate Button selector
var generateBtn = document.querySelector("#generate");
  // Attach eventListner to Generate Button:
generateBtn.addEventListener("click", function() {
  //OnClick Run Generate Password Function:
    generatePassword();
  });


  // Function to Generate Password:
function generatePassword() {

  // Password Criteria (Length Prompt)
  // Set Length 
  var setlength = prompt("How long would you like your password to be?","Between 8 and 128 characters");
  // Length Parameters
  while (setlength <=7 || setlength >=129){
    alert("Length of password must be between 8 and 128 characters!");
    var setlength = prompt("How long would you like your password to be?","Between 8 and 128 characters");
  }
  console.log(setlength);

  // Password Criteria (Confirm Prompts)
  // Set lower, upper, numbers, symbols
  var confirmlowercase = confirm ("Would you like lowercase letters?");
  var confirmuppercase = confirm ("Would you like uppercase letters?");
  var confirmnumbers = confirm ("Would you like numbers?");
  var confirmsymbols = confirm ("Would you like random symbols?");

  // If ALL False, then alert -> confirm prompts again
  while (confirmlowercase === false && confirmuppercase === false && confirmnumbers === false && confirmsymbols === false) {
    alert("Must select at least one (lower, upper, numbers, symbols!)");
    var confirmlowercase = confirm ("Would you like lowercase letters?");
    var confirmuppercase = confirm ("Would you like uppercase letters?");
    var confirmnumbers = confirm ("Would you like numbers?");
    var confirmsymbols = confirm ("Would you like random symbols?");
  }
  
  // Log User Answers
  console.log(confirmlowercase);
  console.log(confirmuppercase);
  console.log(confirmnumbers);
  console.log(confirmsymbols);
  
  // Declare Variable of Empty Array for Password Criteria
  var characters = [];

  // Set Password Criteria

  // If lowercase is true
  if (confirmlowercase == true) {
    // Declare variable "lower" with string
    var lower = "abcdefghijklmnopqrstuvwxyz"
    // Then add "lower" to array above
    characters.push(lower);
  }
  // If uppercase is true
  if (confirmuppercase == true) {
    // Declare variable "upper" with string
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // Then add "upper" to array above
    characters.push(upper);
  }
  // If numbers is true
  if (confirmnumbers == true) {
    // Declare variable "numbers" with string
    var numbers = "0123456789"
    // Then add "numbers" to array above
    characters.push(numbers);
  }
  // If symbols is true
  if (confirmsymbols == true) {
    // Declare variable "symbols" with string
    var symbols = "!@#$%^&*()-_=+/?<>"
    // Then add "numbers" to array above
    characters.push(symbols);
  }
  
  // log characters variable
  console.log(characters);
  
// New Function for grabbing Random Characters
  function getCharacter(characterSet) {
    var randomIndex = Math.floor(Math.random() * characterSet.length)
    return characterSet [randomIndex]
  }

  // Variable of empyty string for password
  var password = ""

  // For Loop grabbing Random Characters from Variables
  for(var i = 0; i < setlength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length)
    var characterSet = characters [randomIndex]
    password += getCharacter(characterSet)
  }
  // log set of characters
  console.log(characterSet);

  // Declare variable add generated password
  var passwordEl = document.getElementById('password')
  passwordEl.textContent = password
  
  // log generated password
  console.log(password);
}
  

// ================================================================================================== //

// Before I got help from TA:
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

