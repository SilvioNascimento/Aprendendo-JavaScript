/**
 * Gera uma lista com a quantidade de números que deseja gerar no intervalo entre o mínimo e o máximo
 *
 * @param {number} quantidade - Quantidade de números que que será gerado
 * @param {number} minimo - O número mínimo que pode ser sorteado
 * @param {number} maximo - O número máximo que pode ser sorteado
 * @returns Retorna uma lista de quantidade informada com números aleatórios dentro do intervalo entre o mínimo e o máximo
 */
function gerarNumerosAleatorios(quantidade, minimo, maximo) {
  minimo = Math.min(minimo);
  maximo = Math.max(maximo);
  const listaNumeros = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    listaNumeros.push(
      numero
    );
  }

  return listaNumeros;
}


function maiorNumeroPar(listaNumeros) {
  let numeroParMaior = null;
  let numeroAtual =  null;
  for (let i = 0; i < listaNumeros.length; i++) {
    numeroAtual = listaNumeros[i];
    if (numeroAtual % 2 === 0 && (numeroParMaior === null || numeroAtual > numeroParMaior)) {
      numeroParMaior = numeroAtual;
    }
  }

  return numeroParMaior;
}


function menorNumeroImpar(listaNumeros) {
  let numeroImparMenor = null;
  let numeroAtual =  null;
  for (let i = 0; i < listaNumeros.length; i++) {
    numeroAtual = listaNumeros[i];
    if (numeroAtual % 2 !== 0 && (numeroImparMenor === null || numeroAtual < numeroImparMenor)) {
      numeroImparMenor = numeroAtual;
    }
  }

  return numeroImparMenor;
}


function funcaoPrincipal(n) {
  const listaNumeros = gerarNumerosAleatorios(n, 1, 50);

  const numMaiorPar = maiorNumeroPar(listaNumeros);
  const numMenorImpar = menorNumeroImpar(listaNumeros);

  console.log(`Maior número par: ${numMaiorPar}
Menor número ímpar: ${numMenorImpar}`);
}

module.exports = { funcaoPrincipal }