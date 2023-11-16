let linhas1 = [];

for (let i = 1; i <= 5; i++) {
  linhas1.push("Linha " + i);
}

for (let i = 0; i < linhas1.length; i++) {
  document.write(`<li>${linhas1[i]}</li>`);
}

document.write('<br>');
document.write('<br>');

let linhas2 = [];

for (let i = 5; i >= 1; i--) {
  linhas2.push("Linha " + i);
}

for (let i = 0; i < linhas2.length; i++) {
  document.write(`<li>${linhas2[i]}</li>`);
}

