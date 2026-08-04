/*
Faça um programa que recebe a média de um aluno.

Caso a média seja < 5 imprima 'Reprovado'
Caso a média seja >= 5 e < 7 imprima 'Recuperação'
Caso a média seja >= 7 imprima 'Aprovado'


  Exemplo:
    Entrada:
      9
    Saída:
      Aprovado
*/


const { calcularNotaMedia, classificarNotaMedia } = require('./funcoes-media');

const notas = [10, 10, 3, 8];
const notaMedia = calcularNotaMedia(notas);
console.log(`Nota média: ${notaMedia.toFixed(2)}`);

classificarNotaMedia(notaMedia);