//7- Escreva um algoritmo que leia 9 números e os armazene em um array. Em seguida, imprima apenas os números que estão nas posições ímpares do array


function algorit7 (){
    const readline = require('readline-sync');  
    let listaNove = [];                        
    let count = 0;                                        

    console.log("Digite 9 números aleatórios\n")           

    for (x=0; x<9; x++){                                            
        const usuario = readline.question(`Numero ${count+1}: `);  
        const numero = parseFloat(usuario);                       

        if (!isNaN(numero)){                               
            listaNove.push(numero);                       
            count++;                                          
        } else {
            console.log("Insira um número válido");
            x--
        }
    } 
    console.log("\nOs números armazenados nas posições Ímpares são:\n")

    for(y=1; y<=8; y++){                  // Laço for que realiza a repetição de 1 a 8 que irá executar a condição que vai definir as posições impares do array
        if(y%2 !== 0){                   // Condição if que irá verificar e permitir sejam impressas somente os números armazeenados nas posições impares do array
            console.log(listaNove[y],); // Impressão das posições imparés do array passando o indice y que irá percorrer todas as posições 
        } 
    }
    console.log("\nVeja o Array completo:\n",listaNove,);
    return;   
}  
algorit7();