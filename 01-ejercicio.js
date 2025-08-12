// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
//  si la edad ingresada no es un número válido indicarlo en un mensaje

let edad = prompt('Ingrese su edad')



if (isNaN(edad) || edad.trim() === "") {
   console.log("La edad ingresada no es un nmero valido.");
} else {
    edad = Number(edad);
    if (edad > 18) {
      console.log(`Tenes ${edad} años, ya podes conducir`)
      } else {
        console.log (`Tenes ${edad} años, no podes conducir`)
    }
}