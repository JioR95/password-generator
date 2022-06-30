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
