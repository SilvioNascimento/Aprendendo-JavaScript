const number1 = 3;
let numeroPar = (number1 % 2) === 0;


if (numeroPar) {
  console.log(number1 + ' é um valor par')
} else if (!numeroPar) {
  console.log(number1 + ' é um valor ímpar')
}