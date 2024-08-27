/*
Calcule o preço do imóvel:
- m2 = 3000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
*/


function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
    switch(quartos) {
        case 1:
            preco = metragem * m2;
            break;
        
        case 2:
            preco = metragem * (m2 * 1.2);
            break;

        case 3:
            preco = metragem * (m2 * 1.5);
            break;

        default:
            preco = NaN;
            break;
    }

    return preco;
}


let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);

if (!isNaN(preco)) {
    console.log(`A casa custa R$${preco}`)
} else {
    console.error(`O número de quartos não cadastrado. Número de quartos: ${quartos}`)
}

