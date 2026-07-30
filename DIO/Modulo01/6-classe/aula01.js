//Criar uma classe (é importante para não repetir tantos objetos com a mesma estrutura várias vezes)
class Personagem {
  nome;
  idade;
  classe;
  origem;
  raca;

  // Método na classe não precisa da palavra-chave 'function'
  descrever() {
    console.log(`Dados do personagem:
  Nome: ${this.nome};
  Idade: ${this.idade} anos;
  Classe: ${this.classe};
  Origem: ${this.origem};
  Raça: ${this.raca}`);  
  }
};

//Realizar uma instância usando a classe Personagem sem o constructor (Construtor)
const sebastiao = new Personagem();
sebastiao.nome = 'Sebastião';
sebastiao.idade = 18;
sebastiao.classe = 'Lutador';
sebastiao.origem = 'Gladiador';
sebastiao.raca = 'Lefou/Humano';
sebastiao.descrever();