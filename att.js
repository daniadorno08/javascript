/* CRIAR FUNCAO QUE EXIBA NA TELA UM NÚMERO INVESTIDO FORNECIDO PELO USUARIO */

function inverteNum(num) {
    var inverso = 0;
    while(num!=0)
     {
        inverso = inverso * 10;
        inverso = inverso + num % 10;
        num = Match.trunc(num/10); 
        
// Remover casa decimal

}
    return inverso;
}
document.write(inverteNum(8759));


/* NOME INVERTIDO */

function inverteNom() {
    var nom = prompt('Escreva o nome desejado');
    var nomInvertido = '';
    
    for (var i = nom.length - 1; i>=0; i--); {
        nomInvertido += nom[i]
    }
    document.write('Nome Invertido:       +   nomInvertido');

}

exibirNomInvertido ();