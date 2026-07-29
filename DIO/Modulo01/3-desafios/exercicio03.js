const precoProduto = 100;
const formaDePagamento = 'Débito';
let precoFinal;

if (formaDePagamento === 'Débito') {
  precoFinal = precoProduto - (precoProduto * 0.1);
} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
  precoFinal = precoProduto - (precoProduto * 0.15);
} else if (formaDePagamento === 'Em duas vezes') {
  precoFinal = precoProduto;
} else if (formaDePagamento === 'Acima de duas vezes') {
  precoFinal = precoProduto + (precoProduto * 0.1);
}

console.log('Preço do produto: R$' + precoProduto.toFixed(2) + 
'\nPreço final: R$' + precoFinal.toFixed(2))
