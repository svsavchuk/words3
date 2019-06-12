$(document).ready(function () {
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("input#wordInput").val();
    var pigInput = translateSentence(input);
    $(".outputtext").text(pigInput);
  });
});

function firstIsVowel(word){
  return word + "ay";
}

function firstConsonants(word){
  word += ",";
    while(isConsonant(word.charAt(0)) && word.charAt(0) !== ","){
      word = word.slice(1) + word.charAt(0);
    }
    if (word.charAt(word.length -1).toLowerCase() === 'q'){
      if (word.charAt(0).toLowerCase() === 'u'){
        word = word.slice(1) + word.charAt(0);
      }
    }
  return removeSpecial(word) + "ay";
}

function firstLetterVowel(word){
  return isVowel(word.charAt(0));
}

function isVowel(character){
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(character.toLowerCase());
}

function translateOneWord(sentence){
  if (isVowel(sentence.charAt(0))){
    sentence = firstIsVowel(sentence);
  } else if (isConsonant(sentence.charAt(0))){
    sentence = firstConsonants(sentence);
  }
  return sentence;
}


function isConsonant(character){
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  return consonants.includes(character.toLowerCase());
}

function translateSentence(sentence){
  var splitSentence = sentence.split(" ");
  var translateResults = [];
  splitSentence.forEach(
    function (word){
      translateResults.push(translateOneWord(word));
    }
  )
  var finalString = translateResults.join(" ");
  return finalString;
}

//working if remove not function,



function allConsonants(word){
  for(var i = 0; i < word.length; i++){
    if (!isConsonant(word.charAt(i))){
      return false;
    }
  }
  return true;
}

function removeSpecial(word){
  var commaPos;
  for (var i = 0; i < word.length; i++){
    if (word.charAt(i) === ","){
      commaPos = i;
    }
  }
  if (commaPos !== undefined){
    word = word.slice(0, commaPos) + word.slice(commaPos + 1, word.length);
  }
  return word;
}
