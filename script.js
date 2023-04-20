// // Assignment code here
var uppercase = 'ABCDEFGHIHKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*';
var numerical = '1234567890';
var characters = uppercase + lowercase + special + numerical;

console.log(uppercase, lowercase, special, numerical);


function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return(result);

}

function selectCriteria() {
  let length = prompt("What do you want the length of your password to be?");

  if (length != null) {
    console.log(length);
    let types = prompt("What character types are allowed?");

  if (types != null) {
    let charactersArray = types.split(" ");
    console.log(charactersArray);
    console.log(charactersArray.length);
    var characters = (charactersArray.join(' + '));
    console.log(characters);
    }
  }
  console.log(generateString(length));
}

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  var criteria = selectCriteria()

  return criteria
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  document.querySelector("#password").innerHtml = passwordText;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);