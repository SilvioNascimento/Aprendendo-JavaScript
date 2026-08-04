/*
Object Destructuring: A sintaxe de atribuição por desestruturação pode descompactar objetos em variáveis.

A desestruturação não é destrutiva.
A desestruturação não altera o objeto original.
*/
const { gets, print } = require('./funcoes-auxiliares');

print(gets());
