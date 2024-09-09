let estoque = "20";
let produtoEmEstoque = 20;
if (parseInt(estoque) >= produtoEmEstoque) {
  console.log(`Quantidade de produtos em conformidade`);
} else {
  console.log(`Necessário repor o estoque!`);
}

let produtoDisponvel = false;
let produtoNoEstoque = 10;
let quantidadeMinima = 15;

if (produtoNoEstoque >= quantidadeMinima) {
  produtoDisponvel = true;
} else {
  produtoDisponvel = false;
}
if (produtoDisponvel === true) {
  console.log(`Produto Disponível`);
} else {
  console.log(`Produto Indisponível`);
}
