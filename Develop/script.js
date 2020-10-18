// Assignment code here
function generatePassword(params) {

var charListAlpha="abcdefghijklmnopqrstuvwxyz";
var charListNum="123456789";
var charListSpec="!@#_";

var password = '';

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
var lower = window.prompt('Do you want lowercase letters in your password? Y or N ');

var upper = window.prompt('Do you want uppercase letters in your password? Y or N ');

var numeric = window.prompt('Do you want numbers in your password? Y or N ');

var special = window.prompt('Do you want special characters in your password? Y or N ');

var lowerLen = Math.ceil(pLength/3);
var numLen = Math.ceil(pLength/3);
var capLen = lowerLen - 3;
var specLen = pLength - lowerLen - numLen -capLen;

if (lower == 'Y') {
  for (i = 0; i < lowerLen; i++) {
    password+= charListAlpha.charAt(Math.floor(Math.random()*charListAlpha.length));
    
  }
}
if (numeric == 'Y') {
  for (i = 0; i < numLen; i++) {
    password+= charListNum.charAt(Math.floor(Math.random()*charListNum.length));
    
  }
}
if (upper == 'Y') {
  for (i = 0; i < capLen; i++) {
    password+= charListAlpha.charAt(Math.floor(Math.random()*charListAlpha.length)).toUpperCase();
    
  }
}
if (special == 'Y') {
  for (i = 0; i < specLen; i++) {
    password+= charListSpec.charAt(Math.floor(Math.random()*charListSpec.length));
    
  }
}
password=password.split('').sort(function(){return 0.6-Math.random()}).join('');
return password;
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
