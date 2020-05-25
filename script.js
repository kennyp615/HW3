// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//When user clicks #generate, prompt for desired password length
//Get desired password length
function generatePassword() {
  var passwordLength= prompt("Please select the number of characters for your password and it must be between 8-128");
  var passwordLengthBad = true;
  while(passwordLengthBad) {
      if (passwordLength>=8 && passwordLength<=128) {
          passwordLengthBad = false;
      }
      //If entered input is not valid, display prompt again
      else {
          alert("Invalid selection, Please select a number between 8-128 characters.");
          passwordLength= prompt("Enter a number between 8-128");
      }
  }
  //Prompt options for password character types
  var lowercaseWanted= confirm("Would you like your password to have lowercase letters?");
  var uppercaseWanted= confirm("Would you like your password to have uppercase letters?");
  var numbersWanted= confirm("Would you like your password to have numbers?");
  var specialsWanted= confirm("Would you like your password to have special characters?");
  var charactersBad = true;
  while(charactersBad) {
      if (lowercaseWanted || uppercaseWanted || numbersWanted || specialsWanted) {
          charactersBad = false;
      }
      //Prompt user to select at least one character type
      else {
          alert("Select at least one of the character options.");
          lowercaseWanted= confirm("Would you like your password to have lowercase letters?");
          uppercaseWanted= confirm("Would you like your password to have uppercase letters?");
          numbersWanted= confirm("Would you like your password to have numbers?");
          specialsWanted= confirm("Would you like your password to have special characters?");
      }
  }
  //Here are my Password option variables
  var lowercaseLetters='abcdefghijklmnopqrstuvwxyz';
  var uppercaseLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers='1234567890';
  var specials='!@#$%^&*()_+}{:>?<';
  var possibleCharacters='';
  var randomPassword='';
  if (lowercaseWanted) {
    possibleCharacters += lowercaseLetters;
  }
  if (uppercaseWanted) {
    possibleCharacters += uppercaseLetters;
  }
  if (numbersWanted) {
    possibleCharacters += numbers;
  }
  if (specialsWanted) {
    possibleCharacters += specials;
  }
  //create a Loop to build password 
  for (var i = 1; i <= passwordLength; i++) {
    var char = Math.floor(Math.random() * possibleCharacters.length + 1);
    randomPassword += possibleCharacters.charAt(char);
  }
  return randomPassword;
}