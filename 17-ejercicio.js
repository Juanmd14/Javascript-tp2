// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese un texto");

if (texto) {  
  texto = texto.toLowerCase().trim();
  let contarVocales = -1; // inicio en -1 ya que seria una posicion "no valida"
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);
    if ("aeiou".includes(letra)) {
      contarVocales = i;
      break;
    }
  }

    // verifico si encontre vocal

  if (contarVocales !== -1) {
    console.log(`La primera vocal esta en la ubicacion ${contarVocales + 1}`); // ya que empiezo desde -1 y no de 0, ( sumo 1 para ajustar la posicion )
  } else {
    console.log("No hay vocales");
  }
} else {
  alert("Debe ingresar un texto valido.");  // else del primer if
}
