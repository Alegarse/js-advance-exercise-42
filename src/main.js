import "./scss/style.scss";

function showMessages(phoneNumber, valid) {
  let message;

  message = valid
    ? phoneNumber.slice(-3).padStart(phoneNumber.length, "*")
    : "Invalid phone number";

  const elem = document.querySelector("p");
  elem.classList = valid ? "valid" : "error";
  elem.textContent = message;
}


