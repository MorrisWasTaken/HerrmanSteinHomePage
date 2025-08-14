// File: scripts/main.js
// --- a/file:///c%3A/Users/Morri/Documents/GitHub/HerrmanSteinHomePage/scripts/main.js
// +++ b/file:///c%3A/Users/Morri/Documents/GitHub/HerrmanSteinHomePage/scripts/main.js
// @@ -1,0 +1,42 @@

// Interactive image slideshow for The White Dying images
// This code allows users to click on an image to cycle through a set of images related to The White Dying game.
// The images are stored in an array, and clicking the image changes its source to the next image in the array.
// The images are expected to be in the "images/TWDIndevImages/" directory.
const myImage = document.querySelector("img");
const images = [
  "images/TWDIndevImages/OutsideNight.png",
  "images/TWDIndevImages/OutsideDay.png",
  "images/TWDIndevImages/InsideDark.png",
  "images/TWDIndevImages/InsideLight.png",
  "images/TWDIndevImages/Shuttle.png",
  "images/TWDIndevImages/Space.png",
  "images/TWDIndevImages/Terminal.png"
];
let imgCounter = 0;

if (myImage) {
  myImage.addEventListener("click", () => {
    imgCounter = (imgCounter + 1) % images.length;
    myImage.setAttribute("src", images[imgCounter]);
  });
}

// Set the initial heading text to a name set by the user

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your username.");
  if (!myName || myName === null) {
    alert("Username cannot be empty.");
    setUserName(); // Prompt again if no name is entered
  } else if (myName.length > 15) {
    alert("Username must be less than 15 characters.");
    setUserName(); // Prompt again if name is too long
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Hello, ${myName}. Here are some of my Projects:`;
}  

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome Back ${storedName}. Here are some of my Projects:`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
