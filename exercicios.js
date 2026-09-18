//exercicio 1
/* 
let pessoa = {
  nome: "Giovanni",
  idade: 17,
  cidade: "São Paulo",
};

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Cidade: " + pessoa.cidade);
 */

//exercicio 2
/* 
let produto = {
  nome: "Iphone Duo",
  preco: 22000,
};

console.log("Produto: " + produto.nome);
console.log("Preço: " + produto.preco);

produto.preco = 30000;

 */
//exercicio 3
/* 
let carro = {
  marca: "Porsche",
  modelo: "911 Turbo",
  ano: "2024",
};
console.log("Marca do carro: " + carro.marca);
console.log("Modelo do carro: " + carro.modelo);
console.log("Ano do carro: " + carro.ano);

carro.cor = "Azul";

console.log("Cor: " + carro.cor);
 */

//exerciocio 4
/* 
let aluno = {
  nome: "Danilo",
  nota1: 9,
  nota2: 7,
};

let media = (aluno.nota1 + aluno.nota2) / 2;

console.log("Aluno: " + aluno.nome);
console.log("Media: " + media);
 */

//exerciocio 5
/* 
let computador = {
  marca: "Dell",
  processador: "Intel Core Ultra 9",
  memoria: "16gb",
};
console.log("Processador: " + computador.processador);

computador.memoria = "32gb";
computador.armazenamento = "2 T";

console.log(computador);
 */

// Nível Médio

//Exercicio 6
/* 

let aluno = {
  nome: "João",
  idade: 19,
  curso: "Desenvolvimento de Sistemas",
  nota: 7,
};
console.log(aluno.nome);
console.log(aluno.idade);

aluno.nota = 8;
aluno.cidade = "Rio de Janeiro";

delete aluno.idade;
console.log(aluno);
 */
// Exercicio 7
// exercicio 7
/*
let produto = {
  nome: "Mouse",
  preco: 100,
  desconto: 15,
};

let valorDesconto = produto.preco * produto.desconto / 100;
let precoFinal = produto.preco - valorDesconto;

console.log("Produto: " + produto.nome);
console.log("Preço original: R$ " + produto.preco);
console.log("Desconto: " + produto.desconto + "%");
console.log("Preço final: R$ " + precoFinal);
*/

// exercicio 8
/*
let alunos = [
  {
    nome: "Ana",
    idade: 18,
    nota: 8,
  },
  {
    nome: "João",
    idade: 19,
    nota: 7,
  },
  {
    nome: "Maria",
    idade: 17,
    nota: 9,
  },
  {
    nome: "Pedro",
    idade: 20,
    nota: 6,
  },
  {
    nome: "Lucas",
    idade: 18,
    nota: 8,
  },
];

for (let aluno of alunos) {
  console.log("Nome: " + aluno.nome + " - Nota: " + aluno.nota);
}
*/

// exercicio 9
/*
let produto = {
  nome: "Teclado",
  preco: 150,
  estoque: 10,
};

produto.estoque = produto.estoque - 2;
produto.preco = 130;
produto.categoria = "Periférico";

console.log(produto);
*/

// exercicio 10
/*
let aluno = {
  nome: "Mariana",
  idade: 20,
  curso: "Desenvolvimento de Sistemas",
};

let propriedade = "curso";

console.log(aluno[propriedade]);

propriedade = "nome";

console.log(aluno[propriedade]);
*/

// Nível Difícil

// exercicio 11
/*
let alunos = [
  {
    nome: "João",
    idade: 18,
    nota1: 8,
    nota2: 8,
  },
  {
    nome: "Ana",
    idade: 17,
    nota1: 9,
    nota2: 7,
  },
  {
    nome: "Pedro",
    idade: 19,
    nota1: 5,
    nota2: 4,
  },
  {
    nome: "Maria",
    idade: 18,
    nota1: 6,
    nota2: 7,
  },
  {
    nome: "Lucas",
    idade: 20,
    nota1: 4,
    nota2: 5,
  },
];

for (let aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2;

  console.log("Aluno: " + aluno.nome);
  console.log("Média: " + media);

  if (media >= 6) {
    console.log("Situação: Aprovado");
  } else {
    console.log("Situação: Reprovado");
  }

  console.log("----------------");
}
*/

// exercicio 12
/*
let produtos = [
  {
    nome: "Mouse",
    preco: 100,
    estoque: 5,
    categoria: "Periférico",
  },
  {
    nome: "Teclado",
    preco: 150,
    estoque: 3,
    categoria: "Periférico",
  },
  {
    nome: "Monitor",
    preco: 900,
    estoque: 0,
    categoria: "Tela",
  },
  {
    nome: "Headset",
    preco: 200,
    estoque: 4,
    categoria: "Áudio",
  },
  {
    nome: "Webcam",
    preco: 300,
    estoque: 2,
    categoria: "Câmera",
  },
];

for (let produto of produtos) {
  if (produto.estoque > 0) {
    let valorTotal = produto.preco * produto.estoque;

    console.log("Produto: " + produto.nome);
    console.log("Preço: R$ " + produto.preco);
    console.log("Estoque: " + produto.estoque);
    console.log("Valor total: R$ " + valorTotal);
    console.log("----------------");
  }
}
*/

// exercicio 13
/*
let carrinho = [
  {
    produto: "Mouse",
    preco: 100,
    quantidade: 2,
  },
  {
    produto: "Teclado",
    preco: 150,
    quantidade: 1,
  },
];

let total = 0;

for (let item of carrinho) {
  let valor = item.preco * item.quantidade;

  console.log(item.produto + ": R$ " + valor);

  total = total + valor;
}

console.log("Total: R$ " + total);
*/

// exercicio 14
/*
let funcionarios = [
  {
    nome: "Carlos",
    cargo: "Programador",
    salario: 4500,
  },
  {
    nome: "Ana",
    cargo: "Designer",
    salario: 2800,
  },
  {
    nome: "João",
    cargo: "Analista",
    salario: 3500,
  },
  {
    nome: "Maria",
    cargo: "Gerente",
    salario: 6000,
  },
  {
    nome: "Pedro",
    cargo: "Suporte",
    salario: 2500,
  },
];

let soma = 0;

for (let funcionario of funcionarios) {
  if (funcionario.salario > 3000) {
    console.log("Nome: " + funcionario.nome);
    console.log("Cargo: " + funcionario.cargo);
    console.log("Salário: R$ " + funcionario.salario);
  }

  soma = soma + funcionario.salario;
}

let media = soma / funcionarios.length;

console.log("Média salarial: R$ " + media);
*/

// exercicio 15
/*
let alunos = [
  {
    nome: "João",
    idade: 18,
    curso: "Desenvolvimento de Sistemas",
    nota1: 8,
    nota2: 9,
  },
  {
    nome: "Ana",
    idade: 17,
    curso: "Desenvolvimento de Sistemas",
    nota1: 7,
    nota2: 8,
  },
  {
    nome: "Pedro",
    idade: 19,
    curso: "Eletrônica",
    nota1: 5,
    nota2: 4,
  },
  {
    nome: "Maria",
    idade: 18,
    curso: "Redes",
    nota1: 9,
    nota2: 10,
  },
  {
    nome: "Lucas",
    idade: 20,
    curso: "Desenvolvimento de Sistemas",
    nota1: 6,
    nota2: 5,
  },
];

let somaMedias = 0;
let maiorMedia = 0;
let menorMedia = 10;
let alunoMaiorMedia;
let alunoMenorMedia;

console.log("===== TODOS OS ALUNOS =====");

for (let aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2;

  if (media >= 6) {
    aluno.situacao = "Aprovado";
  } else {
    aluno.situacao = "Reprovado";
  }

  console.log("Nome: " + aluno.nome);
  console.log("Idade: " + aluno.idade);
  console.log("Curso: " + aluno.curso);
  console.log("Média: " + media);
  console.log("Situação: " + aluno.situacao);
  console.log("----------------");

  somaMedias = somaMedias + media;

  if (media > maiorMedia) {
    maiorMedia = media;
    alunoMaiorMedia = aluno;
  }

  if (media < menorMedia) {
    menorMedia = media;
    alunoMenorMedia = aluno;
  }
}

console.log("===== ALUNOS APROVADOS =====");

for (let aluno of alunos) {
  if (aluno.situacao === "Aprovado") {
    console.log(aluno.nome);
  }
}

console.log("===== MAIOR MÉDIA =====");
console.log("Aluno: " + alunoMaiorMedia.nome);
console.log("Média: " + maiorMedia);

console.log("===== MENOR MÉDIA =====");
console.log("Aluno: " + alunoMenorMedia.nome);
console.log("Média: " + menorMedia);

let mediaGeral = somaMedias / alunos.length;

console.log("===== MÉDIA GERAL =====");
console.log("Média da turma: " + mediaGeral);

console.log("===== OBJETOS FINAIS =====");

for (let aluno of alunos) {
  console.log(aluno);
}
*/
