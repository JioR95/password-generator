// Get references to the #generate element
var generateButton = document.querySelector("#generate");

function randomInt(min, max){
    if (!max) {
        max = min 
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand)+ rand*max)
}
function getRandomitem(list){
return list[randomInt(list.length)]
}

function generatePassword()

while (true) {
    var userInput = window.prompt("How long do you want your password to be?")

    // user excited the prompt 
    if (userInput === null) {
        return
    }
    
    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("That's not a number")
    }else if (passwordLength < 8 || passwordLength > 120) {
        window.alert("Invalid password length. Length should be between 8 and 120 characters.")
    } else { 
        break 
    }
}

var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?");
var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
var userWantsSymbols = window.confirm("Would you like to include special characters in your password?");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "~"];
var userChoice = [];
 
