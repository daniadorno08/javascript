let carros = ['Fusca', 'brasilia','gurgel'] 


for(let i = 1; i<= 5; i++){
document.write (i + " ")
} 
document.write ('<br>')

for(let i = 5; i<= 1; i--){
    document.write (i + " ")
    }  

    document.write ('<br>')
    document.write ('<br>')

    for 
    (let i=0; i < carros.length; i++){
        document.write(`<li>${carros[i]}</li>`)
    } 

    document.write('<br>') 

    let frutas = ['Pera','uva','maça','banana','melancia'] 
    frutas.forEach(function(fruta,i){
        document.write(`${i} ${fruta} <br>`)
    }) 

    document.write('<br>') 

    carros.forEach(function(carro) {
        document.write(`${carro} <br>`)
  
    })

    let contador = 0

    while(contador < frutas.length) {
        console.log(frutas(contador))
        contador++ //contador +1
    }

    console.log(contador)

    let iterador = 0
    do{
        console.log(carros(iterador))
        iterador++
    } while(iterador < carros.length)

    console.log(iterador)