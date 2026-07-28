// let -> pode alterar o valor da variável durante a execução do código. Mais moderno e seguro
// (apenas está disponivel no bloco de código que foi declarado)
let value_01 = 23;

// const -> uma vez o valor da variável for definido, não pode ser alterado durante a execução
const PI = 3.14;

// var -> faz o mesmo que o let, sendo mais antigo e ocasiona sobrescrever dados sem querer
var value_02 = 4;

console.log(value_01 + ' ' + PI + ' ' + value_02);

value_01 = 20;

console.log(value_01 + ' ' + PI + ' ' + value_02);