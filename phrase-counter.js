module.exports = exports = function (str) {
  const sentenceArr = str.split(/[.!?]/).filter((sentence) => {
    return sentence.length;
  });
  const wordsArr = sentenceArr.map((sentence) => {
    return sentence.trim().split(' ');
  });
  const phraseMap = new Map();
  var phraseLength;
  var phrase;
  var uniqueFiltered;
  var subsetFiltered;
  var topTenSorted;

  const _generatePhrases = (wordsArr) => {
    if (phraseLength < 3) {
      return;
    }

    for (let i = 0; i <= wordsArr.length - phraseLength; i++) {
      phrase = wordsArr.slice(i, phraseLength + i).join(' ');

      if (phraseMap.get(phrase)) {
        phraseMap.set(phrase, phraseMap.get(phrase) + 1);
      } else {
        phraseMap.set(phrase, 1);
      }
    }

    phraseLength--;
    _generatePhrases(wordsArr);
  };

  for (let i = 0; i < wordsArr.length; i++) {
    phraseLength = wordsArr[i].length < 10 ? wordsArr[i].length : 10;
    _generatePhrases(wordsArr[i]);
  }

  uniqueFiltered = [...phraseMap].filter((phraseCount) => {
    return phraseCount[1] > 1;
  });
  subsetFiltered = uniqueFiltered.filter((phraseCount) => {
    for (let i = 0; i < uniqueFiltered.length; i++) {
      if (uniqueFiltered[i][0].includes(phraseCount[0]) && uniqueFiltered[i][0] !== phraseCount[0]) {
        return false;
      }
    }

    return true;
  });
  topTenSorted = subsetFiltered.sort((a, b) => {
    return b[1] - a[1];
  }).splice(0, 10);

  return topTenSorted;
}
