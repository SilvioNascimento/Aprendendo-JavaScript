const nota1 = 10;
const nota2 = 7;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3
console.log('Média: ' + media.toFixed(1));

if (media >= 0 && media < 5) {
  console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
  console.log('Recuperação');
} else if (media > 7 && media <= 10) {
  console.log('Passou de Semestre');
}