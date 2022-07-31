"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('button');
let input2 = document.getElementById('button');
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase;
frase = 'O vaçlor é: ';
if (button) {
    button.addEventListener('click', () => {
        console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
    });
}
