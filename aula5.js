/* Arquivo JS aula 05 Objetos*/

//CRIAR OBJETO
let pessoa = {

    nome: 'Dani',
    idade: 17,
    peso: 98.0,
    altura: 1.71,
    Doador_Org: false,
}

let produtos = {

    descricao: ['Custo beneficio'],
    preco: [9.99]
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [1999, 2005, 2010]
}

let imc = (pessoa.peso / (pessoa.altura * pessoa.altura))
console.log("Seu imc é de: " + imc.toFixed(3))