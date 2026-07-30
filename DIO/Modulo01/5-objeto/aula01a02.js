//Construção de um objeto
const personagem = {
  nome: 'Christopher',
  idade: 18,
  classe: 'Lutador',
  origem: 'Gladiador',
  raca: 'Lefou/Humano'
};

//Exibir informação especifica de um objeto
console.log(personagem.nome);
console.log(personagem.idade);
console.log(personagem.classe);
console.log(personagem.origem);
console.log(personagem.raca);

//Exibir todas as informações de um objeto (o valor retornado é object, mostrando sua estrutura 
//como 'chave:valor')
console.log(personagem)

//Adicionar uma nova chave e seu valor no objeto
personagem.altura = 1.85;
console.log(personagem);

//Deletar uma chave e seu valor no objeto
delete personagem.raca;
console.log(personagem);
