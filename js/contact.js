// rund code after the page has loaded
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#contactForm");
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  let subjectInput = document.querySelector("#subject");
  let messageInput = document.querySelector("#message");
  let submitButton = form.querySelector("button");

  function validateInput() {
    // Doing real-time validation of the fields
    if (nameInput.value.length < 5) {
      document.querySelector("#nameError").textContent =
        "Name must be more than 5 characters long.";
    } else {
      document.querySelector("#nameError").textContent = "";
    }

    if (!emailInput.value.match(/^[^@]+@\w+(\.\w+)+\w$/)) {
      document.querySelector("#emailError").textContent =
        "Must be a valid email address.";
    } else {
      document.querySelector("#emailError").textContent = "";
    }

    if (subjectInput.value.length < 15) {
      document.querySelector("#subjectError").textContent =
        "Subject must be more than 15 characters long.";
    } else {
      document.querySelector("#subjectError").textContent = "";
    }

    if (messageInput.value.length < 25) {
      document.querySelector("#messageError").textContent =
        "Message content must be more than 25 characters long.";
    } else {
      document.querySelector("#messageError").textContent = "";
    }
  }

  // Add event listeners for real-time validation
  nameInput.addEventListener("input", validateInput);
  emailInput.addEventListener("input", validateInput);
  subjectInput.addEventListener("input", validateInput);
  messageInput.addEventListener("input", validateInput);

  form.addEventListener("submit", function (event) {
    // Do not submit the form the traditional way
    event.preventDefault();
    alert("Your feedback has been received - thank you!");
  });
});
