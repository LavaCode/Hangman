function displayWordSoFar(word, guesses) {
  let toDisplay = "";
  const wordToArray = Array.from(word);

  for (let i = 0; i < wordToArray.length; i++) {
    const letterInWord = wordToArray[i];
    const isGuessed = guesses.includes(letterInWord)

    if (isGuessed) {
      toDisplay += wordToArray[i] + " ";
    } else {
      toDisplay += "_ ";
    }
  }
  return toDisplay;
}


function isGameWon(word, guesses) {
  const wordToArray = Array.from(word);

  for (let i = 0; i < wordToArray.length; i++) {
    const letterInWord = guesses.includes(wordToArray[i])

    if (!letterInWord) {
      return false;
    }
  }
  return true;
}

function isGameLost(word, guesses) {
  let mistakeCount = 0;

  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakeCount++;
      if(mistakeCount === 1){
      console.log("Je hebt nu " + mistakeCount + " fout");
      }
      else if(mistakeCount > 1){
        console.log("Je hebt nu " + mistakeCount + " fouten");
      }
    }
  }

  switch(mistakeCount) {
    case 1:
      console.log(`
    |
    |
    |
    | 
    |
    =============
    `)
      break;

    case 2:
      console.log(`
      _____________
      | /      |
      |/
      |
      | 
      |
      =============
      `)
      break;

    case 3:
      console.log(`
      _____________
      | /      |
      |/      _o_
      |
      |  
      |
      =============
      `)
      break;

    case 4:
      console.log(`
        _____________
        | /      |
        |/      _o_
        |        O
        |  
        |
        =============
        `)
      break;

    case 5:
      console.log(`
      _____________
      | /      |
      |/      _o_
      |        O
      |       / \
      |
      ==============
      `)
      break;

    default:
      break;
  }

  
  const maximumMistakes = 5;
  if (mistakeCount >= maximumMistakes) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
