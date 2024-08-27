let ingredientes = [
    'ovo',
    'açúcar',
    'manteiga',
    'leite',
    'farinha de trigo',
    'fermento em pó'
];


// Retorna a quantidade de elementos da array 'ingredientes'
console.log(`Quantidade de ingredientes: ${ingredientes.length}`)


// Adicionar um elemento no final de uma array (sabendo da quantidade de elementos presentes no array)
ingredientes[6] = 'chocolate';

console.log(`Quantidade de ingredientes: ${ingredientes.length}`)
console.log(`Ingredientes: ${ingredientes}`)
console.log(ingredientes)

// Adicionar um elemento no final de uma array + 1 ou mais
/* ingredientes[8] = 'jujuba';

console.log(`Quantidade de ingredientes: ${ingredientes.length}`)
console.log(`Ingredientes: ${ingredientes}`)
console.log(ingredientes) */


// Adicionando um elemento no final de um array (não sabendo da quantidade de elementos presentes no array)
let frutas = [
    'maçã',
    'pêra',
    'morango'
];
frutas.push('uva');

console.log(`Quantidade de frutas: ${frutas.length}`);
console.log(frutas);

// Adicionando um elemento no início de um array (não sabendo da quantidade de elementos presentes no array)
frutas.unshift('banana', 'kiwi');

console.log(`Quantidade de frutas: ${frutas.length}`);
console.log(frutas);


// Encontrando o índice de um elemento
let nums = [1, 2, 3, 4, 4, 4, 5];
console.log(nums.indexOf(4));
console.log(nums.indexOf(6));

nums.splice(3, 2);
console.log(nums);

let parteNums = nums.slice(0, 3);
console.log(parteNums)


let nums1 = [1, 3, 5, 7];
let nums2 = [4, 0, 9, 6];
let numsFinal = nums1.concat(nums2);
console.log(numsFinal);

let vogais = ['u', 'a', 'o', 'i', 'e'];
vogais.sort();
console.log(vogais);
vogais.reverse();
console.log(vogais)