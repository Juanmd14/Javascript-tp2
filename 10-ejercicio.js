//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingrese el numero de filas'));
const columnas = parseInt(prompt('Ingrese el numero de columnas'));

let total = filas * columnas;

document.writeln("<table border>");

for (let indiceFila = 0 ; indiceFila < filas ; indiceFila++){
    document.writeln("<tr>")
    for (let indiceColumna = 0 ; indiceColumna < columnas ; indiceColumna++){
        document.writeln('<td>'+ total +'</td>');
        total--;
    }
    document.writeln("</tr>")
}

document.writeln("</table>")