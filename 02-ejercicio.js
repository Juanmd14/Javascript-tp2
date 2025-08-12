// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido

let input = prompt("Introduce una nota de 0 a 10");

if (input === null || input.trim() === "") {
  console.log("Introduce un numero valido");
} else if (isNaN(input)) {
  console.log("Introduce un numero valido");
} else {
  let nota = Number(input);   //creo la variable nota y le paso el input convertido a numero

  if (nota < 0 || nota > 10) {
    console.log("Numero erroneo");
  } else if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
  } else if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
  } else if (nota >= 5 && nota <= 6) {
    alert("Suficiente");
  } else if (nota === 7) {
    alert("Bien");
  } else if (nota >= 8 && nota <= 9) {
    alert("Notable");
  } else {
    alert("Sobresaliente");
  }
}
