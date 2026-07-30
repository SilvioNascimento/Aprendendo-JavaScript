function calcularIMC(peso, altura) {
  return peso / (Math.pow(altura, 2));
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';

  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';

  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';

  } else if (imc >= 30 && imc < 40) {
    return 'Obesidade';

  } else if (imc >= 40) {
    return 'Obesidade grave';
  }
}


function main() {
  const peso = 92;
  const alturaM = 1.75;

  let imc = calcularIMC(peso, alturaM);
  console.log('IMC: ' + imc.toFixed(1));

  console.log(classificarIMC(imc));
}


main();