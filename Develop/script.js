// Assignment Code
var generateBtn = document.querySelector("#generate");


// TODO SECTION:
// todo: create prompts for password criteria
// todo: prompt for length of password ( at least 8 characters, no more than 128 characters)
// todo: prompt for character types to include such as: lowercase, uppercase, numeric, and/or special types
// todo: make sure input for prompts is validated and (at least one of each type) is selected
// todo: make sure selection of criteria is included in password
// todo: once generated, password is displayed in alert or written on page


//Prompt/Confirms (length, lowercase, uppercase, numbers, symbols):

// Set Value for Prompts/Confirms

// Set Password Length:



// Generate Password Function:





function generatePassword(length, haslower, hasupper, hasnumber, hassymbols) {

  var setlength = prompt("How long would you like your password to be?","Between 8 and 128 characters");

  var confirmlowercase = confirm ("Would you like lowercase letters?");

  var confirmuppercase = confirm ("Would you like uppercase letters?");

  var confirmnumbers = confirm ("Would you like numbers?");

  var confirmsymbols = confirm ("Would you like random symbols?");


}

//EventListner for Generate Button:

generateBtn.addEventListener('click', ()=> {
  var length = +setlength.value;
  var haslower = confirmlowercase.value;
  var hasupper = confirmuppercase.value;
  var hasnumbers = confirmnumberscase.value;
  var hassymbols = confirmsymbolscase.value;

});


// Values of Random Password

const ranPassword = {
  lower: ranLower,
  upper: ranUpper,
  number: ranNumber,
  symbol: ranSymbol,
};

// Random Functions to get lowercase, uppercase, numbers, symbols:

  function ranLower(){
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)];
  }

  function ranUpper(){
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)];
  }

  function ranNumber(){
    var numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function ranSymbol(){
    var symbols = "!@#$%^&*()-_=+/?<>";
    return symbols[Math.floor(Math.random() * symbols.length)];

  }

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());