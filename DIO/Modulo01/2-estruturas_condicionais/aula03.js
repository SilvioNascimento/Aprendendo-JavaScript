const number1 = 0;
let numeroPar = (number1 % 2) === 0;

if (number1 === 0) {
  console.log('O número é inválido')
} else if (numeroPar) {
  console.log(number1 + ' é um valor par')
} else if (!numeroPar) {
  console.log(number1 + ' é um valor ímpar')
}