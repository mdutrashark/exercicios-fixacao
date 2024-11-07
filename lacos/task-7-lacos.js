//7- Escreva um algoritmo que leia um número "n" e calcule o fatorial desse número


function algorit7 (){
    const readline = require('readline-sync'); 
    let ft = 1; 

    const usuario = readline.question("Digite um numero aleatorio: \n");
    const n = parseFloat(usuario);

    for (x=1; x<=n; x++){
        ft = ft*x         
    }
    console.log("\nO fatorial do número",n, "é:",ft);

    return;
}
algorit7();