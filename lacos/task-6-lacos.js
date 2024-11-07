//6- Escreva um algoritmo que leia um número "n" e imprima todos os números de 1 a "n"


function algorit6 (){
    const readline = require('readline-sync'); 

    const usuario = readline.question("Digite um numero aleatorio: \n");
    const n = parseFloat(usuario);
    console.log("Todos os números de 1 a",n, "são: \n");

    for (x=1; x<=n; x++){       // Laço for que faz a repetição de 1 a n 
        console.log(x, " ");   // Imprimindo os valores de x que serão todos os valores de 1 a n 
    }
    if(n<=0){                                     // Controle de fluxo If com condicional que verifica se o número é negativo
        console.log("Esse número não é válido")   
    }
    return;
}
algorit6();