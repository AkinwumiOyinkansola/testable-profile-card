document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");
  const successMessage = document.getElementById("contact-success");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorSubject = document.getElementById("error-subject");
  const errorMessage = document.getElementById("error-message");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    [errorName, errorEmail, errorSubject, errorMessage].forEach(
      (el) => (el.style.display = "none")
    );
    successMessage.style.display = "none";

    let isValid = true;

    if (nameInput.value.trim() === "") {
      errorName.textContent = "Full name is required.";
      errorName.style.display = "block";
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      errorEmail.textContent = "Email is required.";
      errorEmail.style.display = "block";
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      errorEmail.textContent = "Please enter a valid email (name@example.com).";
      errorEmail.style.display = "block";
      isValid = false;
    }

    if (subjectInput.value.trim() === "") {
      errorSubject.textContent = "Subject is required.";
      errorSubject.style.display = "block";
      isValid = false;
    }

    if (messageInput.value.trim().length < 10) {
      errorMessage.textContent =
        "Message must be at least 10 characters long.";
      errorMessage.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Your message has been sent successfully!";
      successMessage.style.display = "block";

      form.reset();
    }
  });
});
