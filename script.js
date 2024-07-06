//Create a game where you start with any random game number. 
//Ask the user to keep guessing the game number 
//until the user enters correct value

let guessNum=25;

let userNum = prompt("Enetr your number:");

while (guessNum != userNum ){
    userNum=prompt("You entered wrong number.Try again !");
}
console.log("Congratulations,You are win.");