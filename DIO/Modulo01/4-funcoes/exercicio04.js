function exibirOpcoesDePagamento() {
  return `Código de condição de pagamento:
    1 - À vista Débito: recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX: recebe 15% de desconto;
    3 - Em duas vezes: preço normal de etiqueta sem juros;
    4 - Acima de duas vezes: preço normal de etiqueta mais juros de 10%\n`
}


function aplicarDesconto(valor, desconto) {
  return valor - ((desconto/100) * valor);
}


function aplicarJuros(valor, taxaDeJuros) {
  return valor + ((taxaDeJuros/100) * valor);
}


function condicaoDePagamento(precoEtiqueta, formaDePagamento) {
  console.log(exibirOpcoesDePagamento());

  console.log('Opção escolhida: ' + formaDePagamento);
  console.log('Preço do produto na etiqueta: R$' + precoProduto.toFixed(2));
  if (formaDePagamento === 1) {
    console.log('Preço Final: R$ ' + aplicarDesconto(precoEtiqueta, 10).toFixed(2))
  } else if (formaDePagamento === 2) {
    console.log('Preço Final: R$ ' + aplicarDesconto(precoEtiqueta, 15).toFixed(2))
  } else if (formaDePagamento === 3) {
    console.log('Preço Final: R$ ' + precoEtiqueta.toFixed(2))
  } else if (formaDePagamento === 4) {
    console.log('Preço Final: R$ ' + aplicarJuros(precoEtiqueta, 10).toFixed(2))
  }
}


const precoProduto = 100;
const formaDePagamento = 4;

condicaoDePagamento(precoProduto, formaDePagamento);
