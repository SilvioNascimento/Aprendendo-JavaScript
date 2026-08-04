//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par
//encontrado

listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20];

listaNumeros.forEach(element => {
  if ((element % 2 === 0) && (element !== 0)) {
    console.log(element);
  }
});