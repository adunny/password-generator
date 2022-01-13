// Assignment code here

// when generate button is clicked, window prompts appear to determine password criteria 
function generatePassword() {
  window.alert("Please choose password criteria.");

};


// window prompt for length of pass (8 min, 128 max)
    
// window prompt to use lowercase characters
  //if TRUE - use lowercase

// window prompt to use uppercase characters
  // else use uppercase
// window prompt to use numeric chars
  // if TRUE - use numeric
  // else, dont use numeric
// window prompt to use special chars
  // if TRUE - use special chars
  //  else, dont use special chars


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
