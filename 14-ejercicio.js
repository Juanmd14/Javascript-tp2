// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let texto = prompt("Ingrese un texto");

if (texto) {
    let textoConGuion = ""
  for (let i = 0; i < texto.length; i++) {
    textoConGuion += texto.charAt(i) + "-";
      if (i < texto.length - 1) { // ejemplo : si agrego h-e-l-a-d-o- la ultima "o-" tendria un guion, esto lo evita
      textoConGuion += "-";
    }
  }
  console.log(textoConGuion);
} else {
  console.log("Ingrese un texto valido");
}
