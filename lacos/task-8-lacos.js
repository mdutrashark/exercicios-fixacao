//8- Escreva um algoritmo que leia um número "n" e imprima todos os números pares de 1 a n


function algorit8 (){
    const readline = require('readline-sync'); 

    const usuario = readline.question("Digite um numero aleatorio: \n");
    const n = parseFloat(usuario);
    console.log("Todos os números pares de 1 a",n, "são: ");

    for (x=1; x<=n; x++){
        if(x%2 == 0){                // If que verifica a condição do resto da divisão por 2 ser igual a 0 e imprime x se verdadeiro
            console.log(x, " ");
        }
    }
    return;
}
algorit8();