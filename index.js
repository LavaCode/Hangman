const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

// voer hieronder het te raden woord in
const giveWordToGuess = "Hallo";
const technicalWord = giveWordToGuess.toLowerCase();

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: " + displayWordSoFar(word, guesses));

  const letter = question("Raad een letter: ");

  if(!isNaN(letter)) {
    console.log("Fout, voer geen getal in. Alleen een letter is toegestaan.");
    return;
  } else if(letter.length > 1){
    console.log("Fout, geef maximaal 1 karakter in!");
    return;
  }
  // voeg de geraden letter toe aan de array met guesses
  const input = letter.toLowerCase();
  guesses.push(input);

  if(isGameWon(word, guesses)){
    console.log("\nAwesome! je hebt gewonnen, het woord was: " + word);
    return;
  }
  else if(isGameLost(word, guesses)){
    console.log("\nHelaas je hebt verloren!");
    return;
  }
  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
Welkom bij.....

__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝np░╚══════╝
`);

game(technicalWord, []);
 