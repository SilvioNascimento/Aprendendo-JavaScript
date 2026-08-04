function impostoDaFaixaSalarial(salarioBruto) {
  let aliquotas = 0;

  if (salarioBruto >= 0 && salarioBruto <= 1100) {
    aliquotas = 0.05;
  } else if (salarioBruto > 1100 && salarioBruto <= 2500) {
    aliquotas = 0.1;
  } else {
    aliquotas = 0.15;
  }

  return salarioBruto * aliquotas;
};


function salarioTransferido(salarioBruto, beneficio) {
  const imposto = impostoDaFaixaSalarial(salarioBruto);
  return (salarioBruto - imposto) + beneficio;
};


module.exports = { salarioTransferido };