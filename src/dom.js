export function createPhoneInput() {
  const input = document.createElement("input");
  input.placeholder = "Introduce tu telefono";
  return input;
}
export function createButton() {
  const button = document.createElement("button");
  button.textContent = "validar";

  return button;
}
