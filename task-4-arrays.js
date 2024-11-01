//4- Escreva um algoritmo que leia 10 números e calcule a média deles


function algorit4 (){
    const readline = require('readline-sync');
    let soma = 0;

    for (let x=0; x<10; x++){
        const usuario = readline.question("Digite o numero desejado: ")
        const numero = parseFloat(usuario);

        if (!isNaN(numero)){
            soma += numero;
        } else {
            console.log("Insira um número válido");
            x--;
        }
    }
    const media = soma/10;
    console.log("A média dos números é: ", media);   
}
algorit4();