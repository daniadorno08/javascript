/* Questão 05*/
let titulo = document.querySelector('h1')
titulo.textContent = 'Questão 05'
let box = document.querySelectorAll('.box')

/* a) Funções sem parâmetros e sem retorno (procedure) */
function olaMundo() {
    document.write('Olá Mundo sem retorno <br>')
}

/* Funções sem parâmetros e com retorno (function)*/
function olaMundo2() {
    return'Olá Mundo com retorno<br>'
}

//Chamar a função = executar a função
olaMundo()
document.write(olaMundo2())

let x = 6
let y = 4
let mensagem = 'Setembro amarelo né?! rs'

/* Funcoes com parametros e sem retorno  (procedure) */
function subtrair(a, b) {
    document.write((a - b) + "<br>")
}

/*Funções com parametros e com retorno (function) */
function somar2(c, d) {
    return c + d
}
// Chamar a função = Executar a função
subtrair(x,y)
subtrair(10, 5)

document.write(somar2(x,y)) // Faz o mesmo de baixo
document.write(`<p>${somar2(x,y)}`) //Faz o mesmo de cima
document.write(`<p>${somar2(5,2)}`)

/* funcao anonima = nao tem nome, 
pode ou nao ter parametros,
pode ou nao ter retorno.
*/
titulo.addEventListener('click', function () {
    console.log('Clicou no título')
})

/* Arrow Functions ES6 2015 em diante */

const olaMundoArrow = () => document.write("<p> Olá mundo!!!</p>")
// N precisa usar a palavra function
// N precisa usar a palavra return
// N usa o nome da função
// N precisa usar {} se for só uma instrução
const olaMundo2Arrow = () =>'<p>Olá mundo com arrow function</p>'

olaMundoArrow()
document.write(olaMundo2Arrow())