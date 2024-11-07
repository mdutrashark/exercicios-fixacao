//5- Escreva um algoritmo que leia um número e imprima a tabuada desse número de 1 a 10


function algorit5 (){
    const readline = require('readline-sync'); 
    let x;
    let = 0;
    let count = 0;

    const usuario = readline.question("Digite um numero aleatorio: \n");
    const numero = parseFloat(usuario);

    console.log(`A tabuada do ${numero} é: `);

    for(x=1; x<11; x++){
        
        if(!isNaN(numero)) {
            let tabuada = numero*x;
            console.log(`${numero} X ${count+1}`,tabuada);
            count++
        }
    } 
    if(!isNaN(numero)){
        
    } else{
        console.log("Você não digitou um número, tente novamente")
    }
    return;
    
}
algorit5();
