class Carro {
  marca;
  cor;
  gastoMedioPorKM;

  constructor (marca, cor, gastoMedioPorKM) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKM = gastoMedioPorKM;
  }

  calcularGastoDePercurso(distanciaGasto, precoGasolina) {
    const gasolinaGasto = distanciaGasto / this.gastoMedioPorKM;
    const valorGasto = gasolinaGasto * precoGasolina;
    console.log(`O valor gasto para andar ${distanciaGasto}km foi de R$${valorGasto.toFixed(2)}`)
  }
};

const carro1 = new Carro('Ford', 'preto', 10);
carro1.calcularGastoDePercurso(400, 6.45);
