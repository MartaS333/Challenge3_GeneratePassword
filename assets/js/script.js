//Pop up prompts for password criteria
//User selects which criteria they want to include in the password
//Pasword must contain 8-128 characters, it must include uppercase and lower case letters, numbers, and special characters (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// Assignment code here
var passwordLength;
var lowerCase;
var upperCase;
var specialCharacter;
var numberChoice;
var choiceSelection;

//assigning values to variables

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9]
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to generate password
function generatePassword()
{
passwordLength = prompt("How long would you like your password? Choose between 8 and 128 characters.");
console.log("Password length" + passwordLength);

    if(!passwordLength)
    {
        alert("Must input number");
    }
    else if (passwordLength < 8 || passwordLength >128)
    {
        passwordLength = prompt("You must choose a length between 8 and 128 characters");
        console.log("Password length" + passwordLength);
    }
//lowerCase = prompt("Do you want to include lowercase letters? Yes or no.");
//console.log("Lowercase letters" + lowerCase);

 //   if(!lowerCase){
 //       alert("must type yes or no");
 //   }
 //   else if (lowerCase = "no")
 //   {
 //       lowerCase = prompt("You must choose yes");
 //       console.log("Lowercase letters" + lowerCase);
 //   }
    else { 
        lowerCase = confirm("Do you want to include lowercase letters? (Must choose OK)");
        console.log("Lower case " + lowerCase);
        upperCase = confirm("Do you want to include uppercase letters? (Must choose OK)");
        console.log("Upper case " + upperCase);
        numberchoice = confirm("Do you want to include numbers? (Must choose OK)");
        console.log("Number " + numberChoice);
        specialCharacter = confirm("Do you want to include special characters? (Must choose OK)");
        console.log("Special Character " + specialCharacter);
    };
  //yes = true, cancel = false 
  // If user hits cancel, all false
  if (!lowerCase && !upperCase && !numberChoice && !specialCharacter) {
    choiceSelection = alert("You must choose a criteria");
  // If all true
  } else if (lowerCase && upperCase && numberchoice && specialCharacter) {
    choiceSelection = lower.concat(upper, numbers, character);
    console.log(choiceSelection);
  }
  // 3 true, one false
  else if (lowerCase && upperCase && numberChoice) {
    choiceSelection = lower.concat(upper, numbers);
    console.log(choiceSelection);
  }
  else if (lowerCase && upperCase && specialCharacter) {
    choiceSelection = lower.concat(upper, character);
    console.log(choiceSelection);
  }
  else if (lowerCase && numberChoice && specialCharacter) {
    choiceSelection = lower.concat(numbers, character);
    console.log(choiceSelection);
  }
  else if (upperCase && numberChoice && specialCharacter) {
    choiceSelection = upper.concat(numbers, character);
    console.log(choiceSelection);
  }
  // 2 true, 2 false
  else if (lowerCase && upperCase) {
    choiceSelection = lower.concat(upper);
    console.log(choiceSelection);
  }
  else if (lowerCase && numberChoice) {
    choiceSelection = lower.concat(numbers);
    console.log(choiceSelection);
  }
  else if (lowerCase && specialCharacter) {
    choiceSelection = lower.concat(character);
    console.log(choiceSelection);
  }
  else if (upperCase && numberChoice) {
    choiceSelection = upper.concat(numbers);
    console.log(choiceSelection);
  }
  else if (upperCase && specialCharacter) {
    choiceSelection = upper.concat(character);
    console.log(choiceSelection);
  }
  else if (numberChoice && specialCharacter) {
    choiceSelection = numbers.concat(character);
    console.log(choiceSelection);
  }
  // 1 true, 3 false
  else if (lowerCase) {
    choiceSelection = lower;
    console.log(choiceSelection);
  }
  else if (upperCase) {
    choiceSelection = upper;
    console.log(choiceSelection);
  }
  else if (numberChoice) {
    choiceSelection = numbers;
    console.log(choiceSelection);
  }
  else if (specialCharacter) {
    choiceSelection = character;
    console.log(choiceSelection);
  };

var passwordBlank = [];

  //Random selection loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = choiceSelection[Math.floor(Math.random() * choiceSelection.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}