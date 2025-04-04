document.querySelector("#circle1").addEventListener("mouseover", highlight);
document.querySelector("#circle1").addEventListener("mouseout", unhighlight);

function highlight() {
  console.log("mouseover");
  document.querySelector("#circle1").style.opacity = 1;
}

function unhighlight() {
  console.log("mouseout");
  document.querySelector("#circle1").style.opacity = 0;
  circle1.style.fill = "#80c68b";
}
document.querySelector("#circle2").addEventListener("mouseover", highlight);
document.querySelector("#circle2").addEventListener("mouseout", unhighlight);

function highlight() {
  console.log("mouseover");
  document.querySelector("#circle2").style.opacity = 1;
}

function unhighlight() {
  console.log("mouseout");
  document.querySelector("#circle2").style.opacity = 0;
  circle1.style.fill = "#80c68b";

  document.querySelector("#circle3").addEventListener("mouseover", highlight);
  document.querySelector("#circle3").addEventListener("mouseout", unhighlight);

  function highlight() {
    console.log("mouseover");
    document.querySelector("#circle3").style.opacity = 1;
  }

  function unhighlight() {
    console.log("mouseout");
    document.querySelector("#circle3").style.opacity = 0;
    circle1.style.fill = "#80c68b";
  }
}
// function highlight() {
//   console.log("mouseover");
//   circle1.style.fill = "#ffffff";
// }

// function unhighlight() {
//   console.log("mouseout");
//   circle1.style.fill = "#80c68b";
// }
