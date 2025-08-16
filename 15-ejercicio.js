// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese un texto");

if (texto) {
  texto = texto.toLowerCase().trim(); // ya que si escribia HOLA no tomaba las vocales.
  let contarVocales = 0;
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);
    if ("aeiou".includes(letra)) {
      contarVocales++;
    }
  }
  console.log(`La cantidad de vocales del texto es de ${contarVocales} `);
} else {
  alert("Ingrese un texto valido");
}
