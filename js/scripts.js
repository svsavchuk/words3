$(document).ready(function () {
  $("form").submit(function(event){
    event.preventDefault();


    $("outputtext").show();
    // alert("Hi");
    // alert(isVowel("f"));
    // alert(isVowel("a"));
    // debugger;
    var num = splitWordIntoCharacters($("input#wordInput").val());
    $(".outputtext").text(num);
  });
});

function isVowel(character){
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(character.toLowerCase());
}

function splitWordIntoCharacters(word){
  var splitWord = word.split("");
  var totalVowels = 0;
  splitWord.forEach(function(character) {
    if (isVowel(character) === true) {
      totalVowels++;
    }
  });
  return totalVowels;
};
