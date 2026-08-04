function calcularNotaMedia(listaNotas) {
  let soma = 0;
  for (let i = 0; i < listaNotas.length; i++) {
    soma = soma + listaNotas[i];
  }

  const notaMedia = soma/listaNotas.length;

  return notaMedia;
};


function classificarNotaMedia(notaMedia) {
  if (notaMedia >= 0 && notaMedia < 5) {
    console.log('Reprovado');
  } else if (notaMedia >= 5 && notaMedia < 7) {
    console.log('Recuperação');
  } else if (notaMedia >= 7 && notaMedia <= 10) {
    console.log('Aprovado');
  } else {
    console.log('Nota inválida.');
  }
};


module.exports = { calcularNotaMedia, classificarNotaMedia };