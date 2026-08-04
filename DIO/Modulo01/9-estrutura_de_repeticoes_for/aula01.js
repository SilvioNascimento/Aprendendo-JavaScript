const notas = [];

notas.push(8);
notas.push(10);
notas.push(7);

//Contar quantos elementos existem no array
console.log('Quantidade de notas cadastradas: ' + notas.length);
let notasSomadas = 0;

//Estrutura de repetição for -> executa uma ação pela quantidade de vezes já definida.
for (let index = 0; index < notas.length; index++) {
  notasSomadas = notasSomadas + notas[index];
}

console.log(notasSomadas);