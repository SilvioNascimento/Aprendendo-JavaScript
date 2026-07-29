const peso = 92;
const alturaM = 1.75;

let imc = peso / (Math.pow(alturaM, 2));
console.log('IMC: ' + imc.toFixed(1));

if (imc < 18.5) {
  console.log('Abaixo do peso');

} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso normal');

} else if (imc >= 25 && imc < 30) {
  console.log('Acima do peso');

} else if (imc >= 30 && imc < 40) {
  console.log('Obesidade');

} else if (imc >= 40) {
  console.log('Obesidade grave');
}