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

