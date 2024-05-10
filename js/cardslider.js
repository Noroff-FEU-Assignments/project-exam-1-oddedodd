const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Show the initial slide
showSlide(currentIndex);
