class Pessoa {
  nome;
  peso;
  altura;

  constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  };

  calcularIMC() {
    return this.peso / (Math.pow(this.altura, 2));
  };

  classificarIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      console.log('Baixo peso.');
    } else if (imc >= 18.5 && imc < 25) {
      console.log('Peso ideal.');
    } else if (imc >= 25 && imc < 30) {
      console.log('Sobrepeso.');
    } else if (imc >= 30 && imc < 35) {
      console.log('Obesidade Grau I.');
    } else if (imc >= 35 && imc < 40) {
      console.log('Obesidade Grau II.');
    } else if (imc >= 40) {
      console.log('Obesidade Grau III.');
    }
  };
};


const pessoa = new Pessoa('José', 70, 1.75);
console.log(pessoa)
console.log(`IMC de ${pessoa['nome']}: ${pessoa.calcularIMC()}`);
pessoa.classificarIMC();

const pessoa1 = new Pessoa('Silvio', 93, 1.75);
console.log(`IMC de ${pessoa1['nome']}: ${pessoa1.calcularIMC()}`);
pessoa1.classificarIMC();
