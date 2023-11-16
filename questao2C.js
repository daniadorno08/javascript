let numerosPares = [];

for (let i = 2; i <= 50; i += 2) {
  numerosPares.push(i);
}

let resultado = numerosPares.join(", ");
document.body.innerHTML = resultado;