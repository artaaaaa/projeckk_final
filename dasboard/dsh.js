var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");

yesButton.addEventListener("click", function() {
  if (yesButton.classList.contains("active")) {
    yesButton.classList.remove("active");
  } else {
    yesButton.classList.add("active");
    noButton.classList.remove("active");
  }
});

noButton.addEventListener("click", function() {
  if (noButton.classList.contains("active")) {
    noButton.classList.remove("active");
  } else {
    noButton.classList.add("active");
    yesButton.classList.remove("active");
  }
});