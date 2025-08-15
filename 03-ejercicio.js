// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión 

let textoFinal = "";

while (confirm("Presionar el boton") == true) {
    let texto = prompt('Escriba una cadena de oracion')
    textoFinal += texto + "-";
}
document.write(textoFinal)