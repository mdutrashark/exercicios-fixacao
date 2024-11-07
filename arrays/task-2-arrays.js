//2- Escreva um algoritmo que leia 10 números e os armazene em um array. Em seguida, calcule e imprima a soma dos números armazenados



function algorit2 (){
    const readline = require('readline-sync');  
    let listaDez = [];                        
    let count = 0;       
    let soma = 0;                                       

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
    for(let i=0; i<listaDez.length; i++){     //Utilizando loop for para iterar todo o array através da propriedade .length e realizar a soma a cada item iterado. 
        soma += listaDez[i];                    
    }
    console.log("A soma dos números armazenados é:",soma);
}
algorit2();