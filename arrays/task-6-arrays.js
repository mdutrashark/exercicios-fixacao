//6- Escreva um algoritmo que leia 10 números e os armazene em um array. Em seguida, encontre e imprima o menor número armazenado


function algorit6 (){
    const readline = require('readline-sync');  
    let listaDez = [];                        
    let count = 0;                                               

    console.log("Digite 10 números aleatórios\n")           

    for (x=0; x<10; x++){                                            
        const usuario = readline.question(`Numero ${count+1}: `);  
        const numero = parseFloat(usuario);                       

        if (!isNaN(numero)){                                    
            listaDez.push(numero);                            
            count++;                                          
        } else {
            console.log("Insira um número válido");
            x--;                                            
        }
    }
    const menorNumero = Math.min(...listaDez);            //Método Math.min que percorre a lista e encontra o maior número e o armazena dentro da váriavel 
    console.log(`\nO menor número é o ${menorNumero}`);
    return;                                               
}
algorit6();                                            