const personagem = {
  nome: 'Christopher',
  idade: 18,
  classe: 'Lutador',
  origem: 'Gladiador',
  raca: 'Lefou/Humano',

  exibirInformacoes: function () {
    //this -> Refere ao objeto atual (personagem) e utiliza seus dados quando são chamados.
    console.log(`Dados do personagem:
  Nome: ${this.nome};
  Idade: ${this.idade} anos;
  Classe: ${this.classe};
  Origem: ${this.origem};
  Raça: ${this.raca}`);
  }
};

//Acessar valores dinamicamente
console.log(personagem['nome'])
console.log(personagem['idade'])
console.log(personagem['classe'])
console.log(personagem['origem'])
console.log(personagem['raca'])

// Definir novos valores de forma dinâmica
personagem['nome'] = 'Sebastião';
personagem['classe'] = 'Cavaleiro';
personagem.origem = 'Soldado';
personagem.exibirInformacoes(); 