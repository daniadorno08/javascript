let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('.box')

function olamundo(){
    document.write('ola mundo sem retorno <br>')
}

function olamundo(){
    return 'Ola mundo com retorno <br>'
}

olamundo()
document.write(olamundo2())

let x = 2
let y = 1
let mensagem = 'Só jesus na casa! rs'

function somar(a, b) {
    document.write(a + b) + "<br>"


}

function somar2(c, d) {
    return c + d
}

somar(x, y)
somar(10,5)
