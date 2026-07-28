// Exercício: Cálculo de Valor de uma Viagem

const preco_combustivel = 6.69;
const gasto_medio_gasolina = 24;
const distancia_km = 480;

let litros_gastos = distancia_km / gasto_medio_gasolina;
let custo_viagem = litros_gastos * preco_combustivel;

// Number.toFixed(fractionDigits?: number | undefined): string -> Um método que retorna o valor, em
// forma de string, com a qtd de casas decimais informado 
console.log(custo_viagem.toFixed(2));
