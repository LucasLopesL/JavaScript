let produtos = ["Notebook", "Monitor", "Mouse"];
console.log(produtos[1]);
produtos[2] = "Teclado";

let clientes = ["Lucas", "Louise", "Dhana"];
clientes[3] = "Lopes";
delete clientes[3];
console.log(clientes);

let produto = {
  nome: "Dhana",
  preco: 0.001,
  quantidade: 10000000000,
};

console.log(produto.nome);
produto.preco = 0.0001;
console.log(produto);

let venda = {
  cliente: "Lopes",
  produto: "Namorada",
  valor: 0.00000001,
};

venda.data = "19/07/2005";
delete venda.data;
console.log(venda);

let estoque = [100, 200, 500, 760, 1000];
let novoEstoque = [...estoque];
novoEstoque[5] = 499;
console.log(estoque);
console.log(novoEstoque);
let funcionario = {
  nome: "Dhana",
  empresa: "Demônio",
  chefe: "Karen",
};

let novoFuncionario = { ...funcionario };
novoFuncionario.salvacao = "Lucas";
console.log(funcionario);
console.log(novoFuncionario);
