// Assignment code here
var letterLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var letterUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var num = ['0','1','2','3','4','5','6','7','8','9']

var special = ['!','@','#','$','%','^','&','*','+','.',',','~','-','_',';',':','?']

function generatePassword() {
  var passwordLen = parseInt(prompt('How long do you want your password?'))

  if (passwordLen <= 7 || passwordLen >= 129) {
    alert('Your password must be between 8 and 128 characters')
    return null;
  }

  var useLower = confirm('Would you like to use lowercase letters?')
  var useUpper = confirm('Would you like to use uppercase letters?')
  var useNum = confirm('Would you like to use numbers?')
  var useSpecial = confirm('Would you like to use special characters?')

  if (useLower === false && useUpper === false && useNum === false && useSpecial === false) {
    alert('Please select at least one character type.')
    return null
  }

  var possiblePassword = []
  var truePassword = []

  if (useUpper === true) {
    for (let i = 0; i < passwordLen; i++) {
      var randIndex = Math.floor(Math.random() * letterUpper.length)
      var randChar = letterUpper[randIndex]

      possiblePassword.push(randChar)
    }
  }

  if (useLower === true) {
    for (let i = 0; i < passwordLen; i++) {
      var randIndex = Math.floor(Math.random() * letterLower.length)
      var randChar = letterLower[randIndex]

      possiblePassword.push(randChar)
    }
  }

  if (useNum === true) {
    for (let i = 0; i < passwordLen; i++) {
      var randIndex = Math.floor(Math.random() * num.length)
      var randChar = num[randIndex]

      possiblePassword.push(randChar)
    }
  }

  if (useSpecial === true) {
    for (let i = 0; i < passwordLen; i++) {
      var randIndex = Math.floor(Math.random() * special.length)
      var randChar = special[randIndex]

      possiblePassword.push(randChar)
    }
  }

  for (let i = 0; i < passwordLen; i++) {
    var randIndex = Math.floor(Math.random() * possiblePassword.length)
    var randChar = possiblePassword[randIndex]

    truePassword.push(randChar)
  }

  console.log(possiblePassword)

  return truePassword.join('')
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
