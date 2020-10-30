// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables for function
// Split function automatically puts them into an array.
var specialCharacters = "!@#$%^&*()?><+-".split("");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");

var possibleCharacters = [];


// main function
function generatePassword() {


  // Prompt user for desired password length and convert string into a number
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?  Must be a number between 8 and 128."));
  // loop over input and make sure the input is a number between 8-128 and it not a letter or symbol
  while (passwordLength <= 7 || passwordLength >= 129 || isNaN(passwordLength)) {
    alert("Please pick a valid number between 8 and 128");
    passwordLength = parseInt(prompt("How many characters would you like your password to be?  Must be a number between 8 and 128."));
  }

  // confirm special characters
  var hasSpecialCharacters = confirm("Would you like to use Special Characters in your password?");
  if (hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    console.log(possibleCharacters);
  }

  // confirm lower case letters
  var hasLowerCaseLetters = confirm("Would you like to use Lower Case Letters in your password?");
  if (hasLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    console.log(possibleCharacters);
  }

  // confirm upper case letters
  var hasUpperCaseLetters = confirm("Would you like to use Upper Case Letters in your password?");
  if (hasUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    console.log(possibleCharacters);
  }

  // confirm lower case letters
  var hasNumbers = confirm("Would you like to use numbers in your password?");
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    console.log(possibleCharacters);
  }

  while (!hasSpecialCharacters && !hasLowerCaseLetters && !hasUpperCaseLetters && !hasNumbers) {
    alert("You use at least one of the following: Special Characters, Lower Case Letters, Upper Case Letters, or Numbers")
    // confirm special characters
    var hasSpecialCharacters = confirm("Would you like to use Special Characters in your password?");
    if (hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      console.log(possibleCharacters);
    }

    // confirm lower case letters
    var hasLowerCaseLetters = confirm("Would you like to use Lower Case Letters in your password?");
    if (hasLowerCaseLetters) {
      possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
      console.log(possibleCharacters);
    }

    // confirm upper case letters
    var hasUpperCaseLetters = confirm("Would you like to use Upper Case Letters in your password?");
    if (hasUpperCaseLetters) {
      possibleCharacters = possibleCharacters.concat(upperCaseLetters);
      console.log(possibleCharacters);
    }

    // confirm lower case letters
    var hasNumbers = confirm("Would you like to use numbers in your password?");
    if (hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
      console.log(possibleCharacters);
    }
  }

  // take in input and make password
  var makePassword = [];
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * possibleCharacters.length)
    makePassword.push(possibleCharacters[index])
  }
  return makePassword.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
