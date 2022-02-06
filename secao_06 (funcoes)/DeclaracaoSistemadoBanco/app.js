let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, 
    valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente,){
        nome = nomeCliente;
        sobrenome = sobrenomeCliente;
        idade = idadeCliente;
        valorEmprestimo = valorEmprestimoCliente;
        numAnos = numAnosCliente;
        ehBomPagador = ehBomPagadorCliente;
        taxaDeJuros = defineTaxa(idadeCliente);
}

function defineTaxa(idadeCliente){
    if(idade >= 18 && idade <= 25){
        return 0.09;
     }else if(idade >= 26 && idade <=35){
        return 0.08;
     }else if(idade >= 36 && idade <= 50){
        return 0.07;
     }else{
        return 0.06;
     }
}

cadastraCliente("Manuel", "Silva", 24, 150000, 2, true);
console.log(nome);
console.log(sobrenome);
console.log(taxaDeJuros);

cadastraCliente("Edval", "Silveira", 56, 150000, 9, false);
console.log(nome);
console.log(sobrenome);
console.log(taxaDeJuros);