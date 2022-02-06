/*
Sistema de cadastro de cliente Banco
*/

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 65;
const numCliente = 095864;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = true;

//console.log("Boa tarde Sr. " + nome + " " + sobrenome + ". Sua idade é: " + idade);

/* Montante = valorEmprestimo + juros
   juros = valorEmpretismo * taxaDeJuros * numAnos
*/

//let juros = valorEmprestimo * taxaDeJuros * numAnos;
//let montante = valorEmprestimo + juros;

//console.log("Valor do montante: " + montante);

//let produto = 10;
//let totalCompra = produto++;
//console.log(totalCompra);
//console.log(produto);

/* ESTRUTURAS CONDICIONAIS
Bom pagador ou não?
*/

//if(ehBomPagador){
//   console.log("O cliente " + nome + " é um bom pagador.");
//}else{
//   console.log("O cliente " + nome + " não é um bom pagador.");
//}

//console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador." : " não é bom pagador."));


// ELSE IF - Taxa de Juros

/**
 * 18~25 anos -> 9%
 * 26~35 anos -> 8%
 * 36~50 anos -> 7%
 * 51 ou mais -> 6%
 */

if(idade >= 18 && idade <= 25){
   taxaDeJuros = 0.09;
}else if(idade >= 26 && idade <=35){
   taxaDeJuros = 0.08;
}else if(idade >= 36 && idade <= 50){
   taxaDeJuros = 0.07;
}else{
   taxaDeJuros = 0.06;
}

//console.log(taxaDeJuros);
