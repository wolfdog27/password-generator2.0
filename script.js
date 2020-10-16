// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables for function
// Split function automatically puts them into an array.
var specialCharacters = "!@#$%^&*()?><+-".split("");
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");

var possibleCharacters = [];

// console.log(specialCharacters);
// console.log(lowerCaseCharacters);
// console.log(upperCaseCharacters);
// console.log(numbers);

var hasSpecialCharacters;
var hasLowerCaseLetters;
var hasUpperCaseLetters;
var hasNumbers;

// main function
function generatePassword() {

  // Prompt user for desired characters and convert string into a number
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?  Must be a number between 8 and 128."));
  // loop over input and make sure the input is a number between 8-128 and it not a letter or symbol
  while (passwordLength <= 7 || passwordLength >= 129 || isNaN(passwordLength)) {
    alert("Please pick a valid number between 8 and 128");
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?  Must be a number between 8 and 128."));
  }

  var hasSpecialCharacters = confirm("Would you like to use Special Characters in your password?");
  if (hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    console.log(possibleCharacters);
  }
  


  // let hasSpecialCharacters = confirm("Would you like your password to include Special Characters?");
  // if (hasSpecialCharacters) {
  //   possibleCharacters.concat(lowerCaseCharacters);
  // }
  // console.log(possibleCharacters);





}






// Generate password:
// prompt user for Password length
// Need to store password length in variable
// need to iterate that many times to store password
// confirm whether user wants: special characters, numbers, Upper Case, Lowercase
// hasSpecialChar true/false variable * upper, lower, num 

// if character boolean is true, add array to possibleChar array - concact or spread opporator

// we have array, then we add more stuff to array depending on answers

// once we have choices in array, then build password
// loop over length of array, grab random character from array, 

// var passwordStr=""
// return passwordStr and become password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
