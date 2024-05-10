/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelector(".wp-block-image");
  images.forEach(function (image) {
    image.classList.add("new-class");
  });
});
