//8- Escreva um algoritmo que leia 12 números e os armazene em um array. Em seguida, calcule e imprima a quantidade de números negativos armazenados


function algorit8 (){
    const readline = require('readline-sync');  
    let listaDoze = [];                        
    let count = 0;                                        

    console.log("Digite 12 números aleatórios\n")           

    for (x=0; x<12; x++){                                            
        const usuario = readline.question(`Numero ${count+1}: `);  
        const numero = parseFloat(usuario);                       

        if (!isNaN(numero)){                               
            listaDoze.push(numero);                       
            count++;                                          
        } else {
            console.log("Insira um número válido");
            x--
        }
    } 
    const numNegativos = listaDoze.filter(num => num < 0);  // Utilizando método filter passando uma função callback que executa a condição para filtrar somente os números negativos

    console.log("\nA quantidade de números negativos no Array é", numNegativos.length);

    return;   
}  
algorit8();