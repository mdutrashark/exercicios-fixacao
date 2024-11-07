//3- Escreva um algoritmo que leia 10 números e calcule a soma deles


function algorit3 (){
    const readline = require('readline-sync');   //Importando módulo readline do Node.js
    let soma = 0;
    
    for (let x=0; x<10; x++){
        const usuario = readline.question("Digite o numero desejado: ")    //Método readline.qestion que faz a pergunta pro usuário e armazena o valor recebido na váriavel. String que atualiza automaticamente de acordo com a contagem
        const numero = parseFloat(usuario);                               //Função parseFloat que converte uma string para número

        if (!isNaN(numero)){                                            //Controle de fluxo If utilizando função isNaN negada como condicional para verificar se o tipo de dado recebido é de fato um número
            soma += numero;
        } else {
            console.log("Insira um número válido");                    //Decremento que não permite o usuário prosseguir até digitar um valor válido naquela posição especifica
            x--;
        }
    }
    console.log("A soma total dos números é: ", soma);   
}
algorit3();