document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scrolling-wrapper");

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.scrollBehavior = "auto"; // Disable smooth scrolling on drag
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // the *2 is the speed of the drag, adjust as necessary
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});
