$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  var englishVowels = ["a","e","i","o","u"]
  var totalWovels = 0;

  var userInput = ($("input#wordinput").val()).split("");
  var lowercaseUserInput = userInput.toLowerCase();
  //
  // lowercaseUserInput.forEach(function(character) {


  });

// split into individual characters
//evaluate if each character is a vowels
// if so, add +1 to var totalVowels


    // alert(userInput)
    // alert("Hi")
    $("#result").append("<br>"+userInput+"</br>");
  });
// });
