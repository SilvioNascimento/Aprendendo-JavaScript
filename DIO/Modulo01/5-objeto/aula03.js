//Criar métodos para o objeto
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

//Chamando o método do objeto
personagem.exibirInformacoes();

console.log()

//Atribuir novos valores nas chaves existentes do objeto (acessar dados diretamente)
personagem.nome = 'Aur Arego';
personagem.classe = 'Samurai';
personagem.raca = 'Humano';
personagem.exibirInformacoes();

console.log();

//Modificar o método existente (acessar dados diretamente)
personagem.exibirInformacoes = function() {
  console.log(`Meu nome é ${this.nome}, e sou um(a) ${this.classe}`)
};
personagem.exibirInformacoes();