//3- Escreva um algoritmo que leia 8 números e os armazene em um array. Em seguida imprima apenas os números pares armazenados


function algorit3 (){
    const readline = require('readline-sync');  
    let listaOito = [];                        
    let count = 0;                                        

    console.log("Digite 8 números aleatórios\n");        

    for (x=0; x<8; x++){                                            
        const usuario = readline.question(`Numero ${count+1}: `);  
        const numero = parseFloat(usuario);                       

        if (!isNaN(numero)){                               
            listaOito.push(numero);                       
            count++;                                          
        } else {
            console.log("Insira um número válido");
            x--;
        }
    } 
    console.log("\nOs números pares armazenados são:\n");

    const pares = listaOito.filter((listaOito => listaOito%2===0));   // Utilizando método filter para filtrar todos os números pares dentor do array passando um função callback com uma condição de verificação
    console.log(pares);

    console.log("\nVeja o Array completo:\n",listaOito);
    return;   
}  
algorit3();