//1- Escreva um algoritmo que leia 5 números e os armazene em um array. Em seguida, imprima os números na ordem inversa


function algorit1 (){
    const readline = require('readline-sync');  
    let listaCinco = [];                        
    let count = 0;                                               

    console.log("Digite 5 números aleatórios\n")           

    for (x=0; x<5; x++){                                            
        const usuario = readline.question(`Numero ${count+1}: `);  
        const numero = parseFloat(usuario);                       

        if (!isNaN(numero)){                                    
            listaCinco.unshift(numero);        //Utilizado método unshift para adicionar os números no inicio do array, fazendo a ordem ser inversa.        
            count++;                                          
        } else {
            console.log("Insira um número válido");
            x--;                                            
        }
    }
    console.log("\n------Lista------");
    console.log(listaCinco);
    return;
}
algorit1();