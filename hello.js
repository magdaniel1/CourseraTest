(function (windows) {

var helloSpeaker = {};

var Word = "Hello";

helloSpeaker.speak = function (name) {
  console.log(Word + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);