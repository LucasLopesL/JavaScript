function cadastroCliente(nome, cpf) {
  console.log(
    `Parabéns ${nome}, CPF: ${cpf}. Seu cadastro foi realizado com sucesso!`
  );
}

cadastroCliente("Lucas", "123.432.789-09");

// Exercício 01

function calcularNota(n1, n2, n3, n4) {
  const mediaInicial = (n1 + n2 + n3) / 3;
  const mediaFinal = (mediaInicial + n4) / 2;
  console.log(`A média após o a prova final foi de ${mediaFinal}`);
}

calcularNota(6, 8, 8, 5);

// Exercício 02

function calcularTemperatura(x) {
  const tempF = x * (9 / 5) + 32;
  console.log(
    `A temepratura em ºF é de ${tempF} (sendo ${x}ºC a conversão realizada.)`
  );
}

calcularTemperatura(32);

// Exercício 03

function calcularImposto(p) {
  const imposto = p * 0.0875;
  const pFinal = p + imposto;
  console.log(
    `O valor a ser pago é de R$${pFinal} (sendo ${imposto} o valor de impsoto a ser pago em cima do valor inicial de R$${p})`
  );
}

calcularImposto(198);
