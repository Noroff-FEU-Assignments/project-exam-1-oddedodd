document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#contactForm");
  var nameInput = document.querySelector("#name");
  var emailInput = document.querySelector("#email");
  var subjectInput = document.querySelector("#subject");
  var messageInput = document.querySelector("#message");
  var submitButton = form.querySelector("button");

  function validateInput() {
    // Doing real-time validation of the fields
    if (nameInput.value.length <= 5) {
      document.querySelector("#nameError").textContent =
        "Name should be more than 5 characters long.";
    } else {
      document.querySelector("#nameError").textContent = "";
    }

    if (!emailInput.value.match(/^[^@]+@\w+(\.\w+)+\w$/)) {
      document.querySelector("#emailError").textContent =
        "Must be a valid email address.";
    } else {
      document.querySelector("#emailError").textContent = "";
    }

    if (subjectInput.value.length <= 15) {
      document.querySelector("#subjectError").textContent =
        "Subject should be more than 15 characters long.";
    } else {
      document.querySelector("#subjectError").textContent = "";
    }

    if (messageInput.value.length <= 25) {
      document.querySelector("#messageError").textContent =
        "Message content should be more than 25 characters long.";
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
