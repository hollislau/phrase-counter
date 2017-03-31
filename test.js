var phraseCounter = require(__dirname + '/phrase-counter');

var str = 'I am a duplicate! I am a duplicate? I am a duplicate. I am not a duplicate! But yes, I am also a duplicate. I am also a duplicate. I am also a duplicate dammit! Lastly, I am also a duplicate? This is the first duplicate. This is the second duplicate.    This is the third duplicate.   This is the fourth duplicate.This is the fifth duplicate. This is the sixth duplicate. This is the seventh duplicate. This is the eighth duplicate. This is the ninth duplicate. This is the tenth duplicate. Is the first duplicate.         Is the second duplicate.Is the third duplicate.   Is the fourth duplicate. Is the fifth duplicate. Is the sixth duplicate. Is the seventh duplicate. Is the eighth duplicate. Is the ninth duplicate!   Is the tenth duplicate?    This is the absolute last duplicate. This is the absolute last duplicate.';

console.log(phraseCounter(str));
