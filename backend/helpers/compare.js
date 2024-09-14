const GetPartialSimilarites = (currentGuess, correctChampion) => {
  const guessPos = currentGuess.split(",").sort();
  const correctPos = correctChampion.split(",").sort();

  if (guessPos.length === correctPos.length) {
    let matches = 0;

    for (let i = 0; i < guessPos.length; i++) {
      for (let j = 0; j < correctPos.length; j++) {
        if (guessPos[i] === correctPos[j]) {
          matches++;
        }
      }
    }

    if (matches === guessPos.length) {
      return { match: true, attribute: guessPos[0] };
    }
  }

  // check for partial matches
  for (let i = 0; i < guessPos.length; i++) {
    for (let j = 0; j < correctPos.length; j++) {
      if (guessPos[i] === correctPos[j]) {
        return { match: true, attribute: guessPos[i] };
      }
    }
  }

  // no matches at all
  return { match: false, attribute: guessPos[0] };
};

const GetSimilarAttribute = (currentGuess, correctChampion) => {
  const currGuess = currentGuess.split(",").sort();
  const corrGuess = correctChampion.split(",").sort();
};

module.exports = {
  GetPartialSimilarites,
};
