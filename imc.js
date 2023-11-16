if(imc < 18.5){
    document.write( nome +  "<h1> você está abaixo do peso</h1>")
}else if(imc >18.5 && imc< 25){
    document.write( nome +  " <h1>seu peso está normal</h1>")
}else if(imc > 25 && imc < 30){
    document.write( nome +  " <h1>Voce está acima do peso</h1> ");
}else if (imc>30) {
    document.write( nome +  " <h1>voce está com Obesidade morbida</h1> ");
}