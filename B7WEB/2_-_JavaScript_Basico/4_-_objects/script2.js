let pessoa = {
    nome: 'Silvio',
    sobrenome: 'Nascimento',
    nomeCompleto: function() {
        return `${pessoa.nome} ${pessoa.sobrenome}`;
    }
}

let pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Nascimento',
    nomeCompleto: pessoa.nomeCompleto()
}

console.log(pessoa.nomeCompleto());
console.log(pessoa2.nomeCompleto());