// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmpasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmpasswordInput.onkeyup = () => {
  confirmpasswordInput.classList.remove("is-valid");
  confirmpasswordInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isConfirmPassOk = false;

  // validate first name
  if (firstNameInput.value < 0) {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value.length < 0) {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // validate confirm password
  if (confirmpasswordInput.value !== passwordInput.value || confirmpasswordInput.value.length <= 0) {
    confirmpasswordInput.classList.add("is-invalid");
  } else {
    confirmpasswordInput.classList.add("is-valid");
    isConfirmPassOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isConfirmPassOk) alert("Registered successfully");
};

// add callback function for Reset button.
clearBtn.onclick = () => {
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
  confirmpasswordInput.classList.remove("is-invalid");
  confirmpasswordInput.classList.remove("is-valid");

  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmpasswordInput.value = "";
};