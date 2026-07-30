class Personagem {
  nome;
  idade;
  classe;
  origem;
  raca;
  anoDeNascimento;

  //Método especial para criar e inicializar um objeto dentro da classe.
  //Só pode haver um constructor em uma classe
  constructor(nome, idade, classe, origem, raca) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
    this.origem = origem;
    this.raca = raca;
    this.anoDeNascimento = 2026 - idade;
  }

  // Método na classe não precisa da palavra-chave 'function'
  descrever() {
    console.log(`Dados do personagem:
  Nome: ${this.nome};
  Idade: ${this.idade} anos;
  Classe: ${this.classe};
  Origem: ${this.origem};
  Raça: ${this.raca};
  Ano de Nascimento: ${this.anoDeNascimento}`);  
  }
};

const personagem1 = new Personagem(
  'Oliver',
  16,
  'Bárbaro',
  'Soldado',
  'Humano'
);

personagem1.descrever();