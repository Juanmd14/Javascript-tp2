
// 13 - Realiza un script que pida un texto y lo muestre en mayúsculas.

let texto = prompt('Ingrese un texto');

if (texto) { 
    console.log(texto.toUpperCase());
} else {
    console.log('Ingresa un texto correcto');
}