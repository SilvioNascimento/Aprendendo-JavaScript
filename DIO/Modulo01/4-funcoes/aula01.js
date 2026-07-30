// Definir função sem parâmetro
function teste() {
  console.log('Olá! Essa é uma mensagem de teste!');
}


// Definir função com um parâmetro
/**
 * Exibe uma mensagem de saudação com o nome informado
 * @param {string} name - O nome precisa ser texto
*/
function sayMyName(name) {
  console.log('Hi!! My name is ' + name);
}


//Retorna a área de um quadrado
/**
 * Retorna o valor da medida da área de um quadrado com o valor informado
 * @param {number} valor - O valor informado deve ser do tipo number 
 * @returns Retorna o valor da área do quadrado
 */
function quadrado(valor) {
  return valor * valor; 
}


// Inclementar juros
/**
 * Retorna um valor com juros já incrementado
 * @param {number} valor - O valor que será utilizado para calcular os juros. Deve ser do tipo number
 * @param {number} taxaDeJuros - o percentual de juros. Deve ser do tipo number e estar entre 0 a 100
 * @returns retorna o valor do tipo number com juros já incrementado. Se a taxa de juros recebido não for
 *          entre 0 ou 100, retornará undefined
 */
function incrementarJuros(valor, taxaDeJuros) {
  if (taxaDeJuros < 0 || taxaDeJuros > 100) {
    console.log('A taxa de juros deve ser entre 0 e 100. Valor recebido: ' + taxaDeJuros)
    return;
  }

  const valorDeJuros = (taxaDeJuros/100) * valor;
  return valor + valorDeJuros;
}


teste();
sayMyName('Silvio');

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

const jurosInclementado = incrementarJuros(100, 10);
console.log(jurosInclementado)