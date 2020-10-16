// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables for function
// Split function automatically puts them into an array.
var possibleCharacters = [];
var specialCharacters = "!@#$%^&*()?><+-".split("");
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");

// console.log(specialCharacters);
// console.log(lowerCaseCharacters);
// console.log(upperCaseCharacters);
// console.log(numbers);

var hasSpecialCharacters = true;
var hasLowerCaseLetters = true;
var hasUpperCaseLetters = true;
var hasNumbers = true;


function generatePassword () {
var passwordLength = parseInt(prompt("How many characters would you like your password to be?  Must be a number between 8 and 128."));

if (passwordLength<=7 || passwordLength>=129 || isNaN(passwordLength)) {
  alert ("Please pick a valid number between 8 and 128");
  passwordLength;

} else {
  // rest of promts
}

console.log(passwordLength);


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
