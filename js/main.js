document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".header__menu ul").classList.toggle("active");
  document.querySelector(".arrow-up").classList.toggle("active");
});

var specifiedElement = document.querySelector(".burger");
var specifiedElement2 = document.querySelector(".header__menu ul");

document.addEventListener("click", function (event) {
  var isClickInside = specifiedElement.contains(event.target);
  var isClickInside2 = specifiedElement2.contains(event.target);

  if (!isClickInside && !isClickInside2) {
    document.querySelector(".header__menu ul").classList.remove("active");
    document.querySelector(".arrow-up").classList.remove("active");
  }
});
