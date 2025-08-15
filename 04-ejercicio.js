// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let input;

do {
    input = prompt("Introduce un numero");

    if (input !== null) {
        input = input.trim(); // sacar espacios

        if (input === "" || isNaN(input)) {
            alert("ingresa un numero valido.");
        } else {
            suma += Number(input);
        }
    }

} while (input !== null);

alert("La suma total es: " + suma);