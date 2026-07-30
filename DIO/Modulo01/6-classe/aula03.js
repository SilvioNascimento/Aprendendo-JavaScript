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

// Função recebendo objetos
function compararPersonagem(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} (com ${p1.idade} anos) é mais velho(a) que ${p2.nome} (que tem ${p2.idade}) anos.`);
  } else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} (com ${p2.idade} anos) é mais velho(a) que ${p1.nome} (que tem ${p1.idade}) anos.`);
  } else if (p1.idade === p2.idade) {
    console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
  }
}


const personagem1 = new Personagem('Oliver', 16, 'Bárbaro', 'Soldado', 'Humano');
const personagem2 = new Personagem('Sebastião', 17, 'Lutador', 'Gladiador', 'Lefou/Humano');

compararPersonagem(personagem1, personagem2);