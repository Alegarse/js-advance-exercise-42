import './scss/style.scss'


/**
 * Crear funcion para la validación del contenido del input. Return true/false
 * @param {String} input Input a validar como String
 * @returns {Bolean} Nos devuelve Numero valido o no
 */
function validateInput(input) {
    // Si el input está vacío, devolver un mensaje de error
    if (input === '') return `El campo no puede estar vacío`;
    //Quitamos los espacios en blanco
    input = cleanString(input)
    //Comprobamos que su longuitud sea 9
    if (input.length !== 9) return `El campo debe tener 9 caracteres`;
    // parseInt() convierte un string en un número. Si el string no es un número, devuelve NaN
    const stringForNumber = parseInt(input)
    // isNaN() devuelve true si el valor es NaN, de lo contrario, devuelve false
    return isNaN(stringForNumber) ? `${stringForNumber}: Es un numero valido` : `${stringForNumber}:  No es un numero valido`  
} 

/**
 * Funcion para limpiar los espacios en blanco de una cadena
 * @param {*} input 
 * @returns La cadena sin espacios
 */
function cleanString(input) {
    // Inicializamos una nueva cadena vacía para almacenar el resultado
    let cleanedString = "";

    // Recorremos cada carácter de la cadena original
    for (let i = 0; i < input.length; i++) {
        // Agregamos el carácter a la nueva cadena si no es un espacio
        if (input[i] !== " ") {
            cleanedString += input[i];
        }
    }
    // Devolvemos la cadena sin espacios
    return cleanedString;
}
