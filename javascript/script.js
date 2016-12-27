(function(){
  var names = ["Adam", "John", "Jenny", "Jessy", "Eric", "House", "Edward", "Paula", "Laura", "Jim"];

  for (var i=0; i<names.length;  i++) {

    
    var firstLetter = names[i].charAt(0);
    var lowercase = firstLetter.toLowerCase();
    if (lowercase === 'j') {
       byeSpeaker.speak(names[i])
    } else {
       helloSpeaker.speak(names[i])
    }
  }

})();

