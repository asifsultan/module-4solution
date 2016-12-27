(function(){
var names = ["Adam", "John", "Jen", "Jessy", "Eric", "House", "Edward", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length;  i++) {

  var lowercase = names[i].toLowerCase; 
  var firstLetter = lowercase.charAt(0);
  if (firstLetter === "j") {
     byeSpeaker.speak(names[i])
  } else {
     helloSpeaker.speak(names[i])
  }
}

})();

