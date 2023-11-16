
function calcProgArit(primeiroNum, razao) {
    const resultado = [];
    for (let i = 0; i < 5; i++) {
        resultado.push(primeiroNum + i * razao);
    }
    return resultado;
}
const primeiroNum = parseInt(prompt("coloque primeiro número:"));
const razao = parseInt(prompt("coloque a razão da progressão aritmética:"));
const valorProgresso = calcProgArit(primeiroNum, razao);

document.write("os 5 primeiros números da progressão aritmética são: ", valorProgresso);