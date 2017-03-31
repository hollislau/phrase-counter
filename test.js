var phraseCounter = require(__dirname + '/phrase-counter');

var str = 'I am a duplicate! I am a duplicate? I am a duplicate. I am not a duplicate! But yes, I am also a duplicate. I am also a duplicate. I am also a duplicate dammit! Lastly, I am also a duplicate?';

console.log(phraseCounter(str));
