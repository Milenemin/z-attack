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

// ¶\hav fat i sliderne
const slider = document.querySelector("#uhygge-container");
const dangerValue = document.querySelector("uhygge-container");
// sæt eventlistener på som opdatere, når jeg laver ændringer
slider.addEventListener("input", updateValue);

// min span skal opdate sin value
function updateValue() {
  console.log("updatevalue");
}
radiobuttons;
document.querySelector("sumAntal").textContent = document.querySelector('input[name="zombie-count"]:checked').value;

const checkboxes = document.querySelector('input'name="behaviour");
console.log(checkboxes.value);
const myArray = []
checkboxes.forEach( lav)
