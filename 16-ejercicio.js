// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Ingrese un texto");

if (texto) {
  texto = texto.split("").reverse().join("");  // split = convierte en un array de caracteres , reverse = invierte el ordenn,  join = vuelve a unir el array en un string.
  console.log(texto);
} else {
  alert("Ingrese un texto valido");
}
