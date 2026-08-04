const { gerarNumerosAleatorios, retornarMaiorNumero } = require('./funcoes');

const numerosSorteados = gerarNumerosAleatorios(5, 1, 100);
console.log(`Numeros sorteados: [${numerosSorteados}]`)

console.log(retornarMaiorNumero(numerosSorteados));
