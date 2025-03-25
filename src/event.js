export function eventListenButton(eventHandler) {
  const buttonElement = document.querySelector("button")
  buttonElement.addEventListener("click", eventHandler);
}

