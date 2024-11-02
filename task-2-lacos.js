//2- Escreva um algoritmo que imprima os números impares de 1 a 100


function algorit2 (){
    const numero = 100;
    let cont = 2;
    let impar = -1;
    
    console.log("Os números impares entre 1 e",numero,"são: ");

    for (let x=-1; x<=(numero/2-2); x++){
        impar = impar+cont;
        console.log(impar,"\n");
    }
}
algorit2();