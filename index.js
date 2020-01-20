// period in front of the drum indicates that it's a class
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  var drumInnerText = document.querySelectorAll(".drum")[i].innerText;

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
  //playAudio(drumInnerText);
  //var buttonInnerHTML = this.innerHTML;
  //makeSound(buttonInnerHTML);
//document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// another way to writing this is using anonymous function
// document.querySelector("button").addEvenListener("click", function() {
//  alert("I got clicked"););
// another way to right this is using anonymous function
//

//detect keyboard press
// here we are using anonymous function function(event) which is same as
// having function keyBoardClicked(event)
// document.addEventListener("keydown", keyBoardClicked(event));
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function handleClick() {
  alert("I got clicked");
}

function makeSound(key) {
  var soundFileName = "";
  switch (key) {
    case "w":
      soundFileName = "sounds/tom-1.mp3";
      break;
    case "a":
      soundFileName = "sounds/tom-2.mp3";
      break;
    case "s":
      soundFileName = "sounds/tom-3.mp3";
      break;
    case "d":
      soundFileName = "sounds/tom-4.mp3";
      break;
    case "j":
      soundFileName = "sounds/snare.mp3";
      break;
    case "k":
      soundFileName = "sounds/kick-bass.mp3";
      break;
    case "l":
      soundFileName = "sounds/crash.mp3";
      break;
    default:
    soundFileName = "sounds/tom-1.mp3";
    break;

  }
  audioPlayDrumType(soundFileName);

}

function audioPlayDrumType(soundType) {
  console.log("sound we are going to play is " + soundType);
  var audio = new Audio(soundType);
  audio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    // now we need to remove the pressed so it appears that it's pressed and released
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}
