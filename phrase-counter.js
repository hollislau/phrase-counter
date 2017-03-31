module.exports = exports = function (str) {
  const sentenceArr = str.split(/[.!?]/).filter((sentence) => {
    return sentence.length;
  });

  const wordArr = sentenceArr.map((sentence) => {
    return sentence.trim().split(/[ ,;:()*]/).filter((word) => {
      return word.length;
    });
  });

  const phraseMap = new Map();
  var phraseLength;
  var phrase;
  var uniqueFiltered;
  var subsetFiltered;
  var topTenSorted;

  const _generatePhrases = (wordArr) => {
    if (phraseLength < 3) {
      return;
    }

    for (let i = 0; i <= wordArr.length - phraseLength; i++) {
      phrase = wordArr.slice(i, phraseLength + i).join(' ').toLowerCase();

      if (phraseMap.get(phrase)) {
        phraseMap.set(phrase, phraseMap.get(phrase) + 1);
      } else {
        phraseMap.set(phrase, 1);
      }
    }

    phraseLength--;
    _generatePhrases(wordArr);
  };

  for (let i = 0; i < wordArr.length; i++) {
    phraseLength = wordArr[i].length < 10 ? wordArr[i].length : 10;
    _generatePhrases(wordArr[i]);
  }

  uniqueFiltered = [...phraseMap].filter((phraseCount) => {
    return phraseCount[1] > 1;
  }).sort((a, b) => {
    return b[0].length - a[0].length;
  });

  subsetFiltered = uniqueFiltered.filter((phraseCount) => {
    var i = 0;

    while (uniqueFiltered[i][0].length > phraseCount[0].length) {
      if (uniqueFiltered[i][0].includes(phraseCount[0])) {
        return false;
      }

      i++;
    }

    return true;
  });

  topTenSorted = subsetFiltered.sort((a, b) => {
    return b[1] - a[1];
  }).splice(0, 10);

  return topTenSorted;
}
