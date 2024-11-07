//5- Escreva um algoritmo que leia 7 números e os armazene em um array. Em seguida, encontre e imprima o maior número armazenado


function algorit5 (){
    const readline = require('readline-sync');  //Importando módulo readline do Node.js
    let listaSete = [];                        //Definindo uma Lista vazia para armazenamento dos números
    let count = 0;                            //Váriavel que auxilia na contagem dos números digitados                     

    console.log("Digite 7 números aleatórios\n")           

    for (x=0; x<7; x++){                                            //Laço que vai repetir o código 7 vezes
        const usuario = readline.question(`Numero ${count+1}: `);  //Método readline.qestion que faz a pergunta pro usuário e armazena o valor recebido na váriavel. String que atualiza automaticamente de acordo com a contagem 
        const numero = parseFloat(usuario);                       //Função parseFloat que converte uma string para número

        if (!isNaN(numero)){                                    //Controle de fluxo If utilizando função isNaN negada como condicional para verificar se o tipo de dado recebido é de fato um número
            listaSete.push(numero);                            //Método que adiciona os elementos ao final do array. 
            count++;                                          //Incremento que realiza a atualização do contador
        } else {
            console.log("Insira um número válido");
            x--;                                            //Decremento que não permite o usuário prosseguir até digitar um valor válido naquela posição especifica
        }
    }
    const maiorNumero = Math.max(...listaSete);            //Método Math.max que percorre a lista e encontra o maior número e o armazena dentro da váriavel 
    console.log(`\nO maior número é o ${maiorNumero}`);
    return;                                               //Retorno que faz a interrupção da função 
}
algorit5();                                              //Chamada que inicia a função
