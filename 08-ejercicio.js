/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = Number(prompt('de cuanto seria la piramide?'));
let resultado = "j";


if (isNaN(numero) || numero > 50 || numero < 1) {
    alert("Numero invalido");
} else {
    for (let i = 1; i <= numero; i++) {  // entra en la fila hasta el numero que ingresas
        resultado = "";
        for (let j = 1; j <= i; j++) { 
            resultado += j; // j se suma a la variable resultado = si i vale 5, j seria 1 2 3 4 5.
        }
     console.log(resultado)
    }
}
