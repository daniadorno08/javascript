/* Aula 04 !Arquivo JS aula Array */
let produtos = ['Arroz', 'Feijão','Leite']
var codigos = Array(10,20,30)
var test = Array(10)
test[0] = "oi"
test[9] = "tudo bem?"
test[10] = "opa!"
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'

// ADICIONAR no final push = empurre
produtos.push('Açucar', 'Trigo')
codigos.push(40,50,60,70)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do final. pop = estorar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()
meses.push('Jul')

//ADICIONAR no início unhshift
produtos.unshift('Uva', 'Maça')

//REMOVER do início shift
//produtos.shift()

//REMOVER de uma posição específica splice
//splice = emendar 
//posição inicial, quantos remover
codigos.splice(1,3)

//COPIAR array slice = fatiar porção
//posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

// // VER TAMANHO DO ARRAY length comprimento
meses.length
meses1.length
meses2.length 

// spread operator ... copiar
let test = [...produtos, 'ovo', 'pera']

// ver indice de um valor do array
// let pos = nome_array.idexOF('Valor)
let pos = produtos.indexOf('Uva')
