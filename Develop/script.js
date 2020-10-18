// Assignment code here
specialChar = ["!", "#", "$", "%", "&","?", "@"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Alphabetical characters
char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
var pick;
var callUpper = function (x) {
  return x.toUpperCase();
}
charUpper = char.map(callUpper);

function generatePassword(params) {
  var password = [];

var pLength = window.prompt ('What length do you want for your password? Between 8 and 128 characters.');
// Turning the selection into a number ot validate it. 
pLength = parseInt(pLength);
while (pLength < 8 || pLength > 128) {
  pLength = window.prompt('That is not a valid option, please pick a character length between 8 and 128.')
};

/* Debugging purposes
console.log(pLength);
console.log(lowerLen)
console.log(numLen)
console.log(capLen)
console.log(specLen)
console.log(lowerLen+numLen+capLen+specLen)
*/
var lower = window.prompt('Do you want lowercase letters in your password? Y or N ').toUpperCase();

var upper = window.prompt('Do you want uppercase letters in your password? Y or N ').toUpperCase();

var numeric = window.prompt('Do you want numbers in your password? Y or N ').toUpperCase();

var special = window.prompt('Do you want special characters in your password? Y or N ').toUpperCase();

if (lower == 'N' && numeric == 'N' && upper == 'N' && special == 'N') {
  window.alert('Atleast 1 character type needs to be selected.')
}

//If all choices are selected
if (lower == 'Y' && numeric == 'Y' && upper == 'Y' && special == 'Y') {
    pick = char.concat(number, specialChar,charUpper)
}

// If only 3 are selected
else if (numeric == 'Y' && upper == 'Y' && special == 'Y') {
  pick = number.concat(specialChar, charUpper)
}

else if (lower == 'Y' && upper == 'Y' && special == 'Y') {
  pick = char.concat(specialChar, charUpper)
}
else if (lower == 'Y' && numeric == 'Y' && special == 'Y') {
  pick = char.concat(specialChar ,number)
}
else if (lower == 'Y' && numeric == 'Y' && upper == 'Y') {
  pick = char.concat(number,charUpper)
}

// 2 Choices selected
else if (upper == 'Y' && special == 'Y') {
  pick = specialChar.concat(charUpper)
}
else if (lower == 'Y' && numeric == 'Y') {
  pick = char.concat(number)
}

else if (numeric == 'Y' && special == 'Y') {
  pick = number.concat(specialChar)
}
else if (lower == 'Y' && upper == 'Y') {
 pick = char.concat(charUpper)
}
else if (lower == 'Y' && special == 'Y') {
  pick = char.concat(specialChar)
}
else if (numeric == 'Y' && upper == 'Y') {
  pick = number.concat(charUpper);
}
// only 1 selected

else if (lower == 'Y') {
  pick = char;
}
else if (numeric == 'Y') {
  pick = number;
}
else if (upper == 'Y') {
  pick = charUpper;
}
else if (special == 'Y') {
  pick = specialChar;
}
for (var j = 0; j < pLength; j++){
  var choices = pick[Math.floor(Math.random()* pick.length)];
  password.push(choices)
}
var newPassword = password.join("")
return newPassword;
}

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
