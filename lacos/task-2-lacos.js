//2- Escreva um algoritmo que imprima os números impares de 1 a 100


function algorit2 (){
    const numero = 100;
    let cont = 2;
    let impar = -1;
    
    console.log("Os números impares entre 1 e",numero,"são: ");

    for (let x=1; x<=50; x++){     // Laço for que inicia em 1 e faz a repetição até 50, que é a quantidade exata de números impares entre 1 e 100.
        impar = impar+cont;        // Cálculando os números ímpares que inicam em -1 + 2
        console.log(impar,"\n");   
    }
}
algorit2();