//3- Escreva um algoritmo que leia 10 números e calcule a soma deles


function algorit3 (){
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
    console.log("A soma total dos números é: ", soma);   
}
algorit3();