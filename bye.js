(function (windows) {
var Speaker = {};
var Word = "Good Bye";
Speaker.speak = function (name) {
  console.log(Word + " " + name);
}

window.Speaker = Speaker;

})(window);