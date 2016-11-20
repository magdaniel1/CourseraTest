(function (windows) {

var names = ["Jose", "Juan", "Pedro", "Luis", "Roger", "Maria", "Luisa", "Piera", "Lucia", "Jinete"];
for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
if (firstLetter == 'j') {
     window.Speaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
