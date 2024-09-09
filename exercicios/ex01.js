let produto = 200;
let desconto = 40;
let imposto = 12;
const precoDesconto = produto - desconto + imposto;
console.log(`O preço final do produto é ${precoDesconto}`);

let custoProduto = 100;
let lucroAdicional = 30;
const precoVenda = custoProduto + lucroAdicional;
console.log(`O preco de venda do produto é ${precoVenda}`);

let orcamento = 250;
let desconto2 = 50;
let precoProduto = 300;
const precoFinal = precoProduto - desconto2;
if (precoFinal <= orcamento) {
  console.log("Está dentro do orçamento");
} else {
  console.log("Não está dentro do orçamento");
}
