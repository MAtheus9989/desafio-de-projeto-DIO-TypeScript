let button = document.getElementById('button');
let input1 = document.getElementById('button') as HTMLInputElement
let input2 = document.getElementById('button') as HTMLInputElement

function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
}

let devePrintar = true;
let frase: string;
frase = 'O vaçlor é: '

if (button) {
    button.addEventListener('click', () => {
        console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
    })
}