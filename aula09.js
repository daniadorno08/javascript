let titulo = document.querySelector9('h1')
titulo.textContent = 'Aula 09 Manioular CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'pride-fc.jpg')
imagem.setAttribute('width', '200px')

titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0625rem";
titulo.style.borderRadius = "5px";

let tela = document.querySelector('main')
let btnDark = document.querySelector('#bdark')
let btnLight = document.querySelector('#tblight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('')
