let personagem = {
    nome: "Roberto",
    vida: 200,
    mana: 105,
    classe: "Artista Marcial",
    habilidades: ["Invunerável",
        "Forte convicção",
        "Ataque crítico"
    ],
    itemEquipado: "Soqueiras",
    itensArmazenados: ["Espada de uma mão",
        "Poção de Vida",
        "Poção de Mana"
    ],
    algo: []
};

//Exibir o object
console.log(personagem)

//Exibir o nome do personagem
console.log(personagem.nome)

//Alterar o nome do personagem
personagem.nome = 'Powered'
console.log(personagem)

//Deletar uma propriedade chamada 'algo'
delete personagem.algo;
console.log(personagem)
