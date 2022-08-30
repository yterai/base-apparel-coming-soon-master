const form = document.querySelector('.form');
const email = document.getElementById("email");
const submitButton = document.querySelector('.submit-button');
const error = submitButton.nextElementSibling;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = email.value.length !== 0 && emailRegExp.test(email.value);
    if (!isValid) {
      email.className = "invalid";
      error.textContent = "Please provide a valid email";
      error.className = "error";
    } else {
      email.className = "valid";
      error.textContent = "";
    }
  });





