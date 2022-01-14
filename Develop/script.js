// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyz"
var lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChar = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var charset = ""


// when generate button is clicked, window prompts appear to determine password criteria 

var generatePassword = function() {

  var chooseLength = prompt("Please input password length. (Min. 8 characters, Max. 128 characters)")
  
  if (chooseLength < 8 || chooseLength > 128) {
    alert("Length must be a minimum of 8 characters and maximum of 128 characters.");
    return generatePassword();
  }
  if (isNaN(chooseLength)) {
    alert("Please enter a valid character length.")
    return generatePassword();
  }
  //check input
  else {
    var upperC = confirm("Would you like to use UPPERCASE letters?")
  if (upperC == true) {
    charset = charset + lettersUp
  }
  var lowerC = confirm("Would you like to use LOWERCASE letters?")
  if (lowerC == true) {
    charset = charset + letters
  }
  var numeric = confirm("Would you like to use NUMBERS?")
  if (numeric == true) {
    charset = charset + numbers
  }
  var special = confirm("Would you like to use SPECIAL CHARACTERS?")
  if (special == true) {
    charset = charset + specialChar
  }
  if (!upperC && !lowerC && !numeric && !special) {
    alert("You must select at least ONE option!");
    return generatePassword();
    
  }

  }

  passwordValue = []
  for (var i = 0; i < chooseLength; ++i) {
    a = charset.length;
    var passwordA = charset.charAt(Math.floor(Math.random() * a));
    passwordValue.push(passwordA);

  }
 
  console.log(charset)
  console.log(passwordValue)
  return passwordValue.join('');
  
  

};





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
