const myImage = document.querySelector("img");
var imgCounter = 0;

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (imgCounter == 0) {
    myImage.setAttribute("src", "images/TWDIndevImages/OutsideDay.png");
    imgCounter = 1;
    } else if (imgCounter == 1) {
        myImage.setAttribute("src", "images/TWDIndevImages/InsideDark.png");
        imgCounter = 2;
    } else if (imgCounter == 2) {
        myImage.setAttribute("src", "images/TWDIndevImages/InsideLight.png");
        imgCounter = 3;
    } else if (imgCounter == 3) {
        myImage.setAttribute("src", "images/TWDIndevImages/Shuttle.png");
        imgCounter = 4;
    } else if (imgCounter == 4) {
    myImage.setAttribute("src", "images/TWDIndevImages/Space.png");
    imgCounter = 5;
    } else if (imgCounter == 5) {
        myImage.setAttribute("src", "images/TWDIndevImages/Terminal.png");
        imgCounter = 6;
  } else {
    myImage.setAttribute("src", "images/TWDIndevImages/OutsideNight.png");
    imgCounter = 0;
  }
});
