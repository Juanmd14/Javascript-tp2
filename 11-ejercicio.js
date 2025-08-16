
/* 11 - Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */

let nombre1 = prompt("Ingresa el primer nombre");
let edad1 = Number(prompt("Ingresa la edad de " + nombre1));
let nombre2 = prompt("Ingresa el segundo nombre");
let edad2 = Number(prompt("Ingresa la edad de " + nombre2));
let nombre3 = prompt("Ingresa el tercer nombre");
let edad3 = Number(prompt("Ingresa la edad de " + nombre3));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) { 
    alert('Ingresa un numero valido');
} else {
    let mayorEdad = Math.max(edad1, edad2, edad3)
    let mayorNombre;

    if (mayorEdad === edad1) {
        mayorNombre = nombre1;
    }
    else if (mayorEdad === edad2) {
        mayorNombre = nombre2;
    } else {

      mayorNombre = nombre3;

    }

    console.log( `El mayor es ${mayorNombre} y su edad es ${mayorEdad}`);
}