function calcProgArit(primeiroNum, razao) {
    const resultado = [];
    for (let i = 0; i < 5; i++) {
        resultado.push(primeiroNum + i * razao);
    }
    return resultado;
}

function imprimirPares(valores) {
    const pares = valores.filter(valor => valor % 2 === 0);
    return pares;
}

const primeiroNum = parseInt(prompt("coloque o primeiro número:"));
const razao = parseInt(prompt("coloque a razão da progressão aritmética:"));
const valoresProgressao = calcProgArit(primeiroNum, razao);
const pares = imprimirPares(valoresProgressao);

document.write("os valores pares dos 5 primeiros números da progressão aritmética são: ", pares);