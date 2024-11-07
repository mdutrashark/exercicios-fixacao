//4- Escreva um algoritmo que leia 6 números e os armazene em um array. Em seguida, imprima a média dos números armazenados


function algorit4 (){
    const readline = require('readline-sync');  
    let listaSeis = [];                        
    let count = 0;
    let soma = 0; 
    let media;                                     

    console.log("Digite 6 números aleatórios\n");        

    for (x=0; x<6; x++){                                            
        const usuario = readline.question(`Numero ${count+1}: `);  
        const numero = parseFloat(usuario);                       

        if (!isNaN(numero)){                               
            listaSeis.push(numero);                       
            count++;                                          
        } else {
            console.log("Insira um número válido");
            x--;
        }
    } 
    for(let i=0; i<listaSeis.length; i++){    // Utilizando loop for para iterar todo o array através da propriedade .length
        soma += listaSeis[i];                // Realizando a soma de item por item do array
        media = soma/listaSeis.length;      //  Realizando a média utilizando a propriedade .lenght para definir o divisor automáticamente 
    }
    console.log("\nA média dos números armazenados é:",media);
    console.log("\nVeja o Array completo:\n",listaSeis);
    return;   
}  
algorit4();