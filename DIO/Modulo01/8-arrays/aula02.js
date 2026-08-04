const alunos = ['João', 'Marcos', 'Marina'];

//Para adicionar um elemento no final da lista
alunos.push('Silvio');
console.log(alunos[3]);

//Adicionar diretamente na última posição (contém alto risco de adicionar um elemento vazio se utilizar este meio)
alunos[4] = 'Jaciel Filho';
console.log(alunos);

alunos[6] = 'Jaciel Filho';
console.log(alunos);

//Alterar um elemento já existente
alunos[6] = 'Vinícius';
console.log(alunos);

//Eliminar o último elemento no array
console.log("Elemento a ser removido: " + alunos.pop());
console.log(alunos);

//Eliminar o primeiro elemento no array
console.log("Elemento a ser removido: " + alunos.shift());
console.log(alunos);

//Eliminar elemento pelo índice
delete alunos[3];
console.log(alunos);