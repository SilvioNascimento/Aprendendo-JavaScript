// Exercício: Incremento do Cálculo de Valor de Uma Viagem

const preco_gasolina = 6.69;
const preco_etanol = 4.13;
const gasto_medio_gasolina = 24;
const distancia_km = 480;
let tipo_combustivel = "gasolina";

let litros_gastos = distancia_km / gasto_medio_gasolina;
let custo_viagem;

if (tipo_combustivel === "gasolina") {
  custo_viagem = litros_gastos * preco_gasolina;
} else if (tipo_combustivel === "etanol") {
  custo_viagem = litros_gastos * preco_etanol;
}

// Number.toFixed(fractionDigits?: number | undefined): string -> Um método que retorna o valor, em
// forma de string, com a qtd de casas decimais informado 
console.log(custo_viagem.toFixed(2));
