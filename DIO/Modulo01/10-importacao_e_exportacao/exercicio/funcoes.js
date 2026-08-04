/**
 * Recebe uma lista de números e retorna o maior número.
 *
 * @param {number} listaNumeros - Recebe uma lista de números.
 * @returns Retorna o maior número da lista.
 */
function retornarMaiorNumero(listaNumeros) {
  let maiorNumero;
  for (let i = 0; i < listaNumeros.length; i++) {
    if (i === 0) {
      maiorNumero = listaNumeros[i];
    } else if (listaNumeros[i] > maiorNumero) {
      maiorNumero = listaNumeros[i];
    }
  }

  return maiorNumero;
}

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

  for (let i = 0; i < quantidade; i++) {
    listaNumeros.push(
      Math.floor(Math.random() * (maximo - minimo + 1)) + minimo,
    );
  }

  return listaNumeros;
}

module.exports = { gerarNumerosAleatorios, retornarMaiorNumero };
