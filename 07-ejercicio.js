/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

let numero = Number(prompt('de cuanto seria la piramide?'))
let resultado = "";

if (isNaN(numero) || numero > 50 || numero < 1){ 
    alert("Numero invalido");
} else {
    for (let i = numero; i >= 1 ; i--) {
        resultado = "";
        for (let k = 0; k < i ; k++) {
            resultado += i;
        }
        console.log(resultado);
    } 
}