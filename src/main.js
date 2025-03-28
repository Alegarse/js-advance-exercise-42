import "./scss/style.scss";
import { createPhoneInput, createButton, createParagraph } from "./dom";
import { eventListenButton } from "./event";

function main() {
  const containerElement = document.querySelector('#app')

  containerElement.appendChild(createPhoneInput())
  containerElement.appendChild(createButton())
  containerElement.appendChild(createParagraph())

  eventListenButton(() => {
    try {
      let numberInput = document.querySelector('input').value
      const isValid = validateInput(numberInput)
      showMessages(numberInput, isValid)
    } catch(error) {
      console.error(error.message)
      const paragrap = document.querySelector('p')
      paragrap.classList = 'error'
      paragrap.textContent = 'Se ha producido un error [00983]'
    }
  })

}

main()

function showMessages(phoneNumber, valid) {
  const message = valid
    ? phoneNumber.slice(-3).padStart(phoneNumber.length, "*")
    : "Invalid phone number";

  const elem = document.querySelector("p");
  elem.classList = valid ? "valid" : "error";
  elem.textContent = message;
}

/**
 * Crear funcion para la validación del contenido del input. Return true/false
 * @param {String} input Input a validar como String
 * @returns {Bolean} Nos devuelve Numero valido o no
 */
function validateInput(input) {
  // Si el input está vacío, devolver un mensaje de error
  if (input === '') return false;
  //Quitamos los espacios en blanco
  input = input.replaceAll(' ', '')
  //Comprobamos que su longuitud sea 9
  if (input.length !== 9) return false;
  // parseInt() convierte un string en un número. Si el string no es un número, devuelve NaN
  const phoneNumber = parseInt(input)
  // isNaN() devuelve true si el valor es NaN, de lo contrario, devuelve false
  return Number.isNaN(phoneNumber) ? false : true
}