// // Assignment code here
var uppercase = 'ABCDEFGHIHKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*';
var numerical = '1234567890';
var characters = '';

function generateString(length, characters) {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result)
  return result
}

function selectLength() {
  var length = prompt("What do you want the length of your password to be?");
  // convert length to a number
  length = Number(length)
  // check that the number is between 8 and 128
  // and is a valid number
    if (length < 8 || length > 128) {
      alert("Number must be between 8 and 128.")
      selectLength()
    }
    return length
  }

function selectCharacterTypes() {
  // ask the questions using confirm
  if (window.confirm("Include uppercase characters?") == true) {
    characters += uppercase;
  }
  if (window.confirm("Include lowercase characters?") == true) {
    characters += lowercase;
  }
  if (window.confirm("Include special characters?") == true) {
    characters += special;
  }
  if (window.confirm("Include numerical characters?") == true) {
    characters += numerical;
  }
  // check that at least one type was selected
  if (characters.length === 0) {
    alert("Please select at least one type.")
    selectCharacterTypes()
  }
  
  // combine all of the possible characters 

  // return the combination of characters
  return characters
}

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length = selectLength()
  var characters = selectCharacterTypes()
  var password = generateString(length, characters)

  return password
}

// Write password to the #password input
function writePassword() {
  // console.log("executing writePassword")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  document.querySelector("#password").innerHtml = passwordText;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);