let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');

for(let i in cores) {
    console.log(`Cor nº${Number(i) + 1}: ${cores[i]}`);
}

console.log("\nCores:")
for(let cor of cores) {
    console.log(`\t* ${cor}`)
}