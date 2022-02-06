//Seção 7 - Cadastro de Clientes

let nome;
let sobrenome; 
let idade; 
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas;

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, 
    valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliete){
        nome = nomeCliente;
        sobrenome = sobrenomeCliente;
        idade = idadeCliente;
        valorEmprestimo = valorEmprestimoCliente;
        numAnos = numAnosCliente;
        ehBomPagador = ehBomPagadorCliente;
        taxaDeJuros = defineTaxa(idadeCliente);
        avalistas = avalistasCliete;
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

cadastraCliente("Edval", "Silveira", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"]);

function adicionaAvalista(avalista){
    avalistas.push(avalista);
}

function removeAvalista(){
    avalistas.pop();
}

function editaAvalista(nomeAvalista, indice){
    avalistas[indice] = nomeAvalista;
}

function ordenaAvalista(){
    return avalistas.sort();
}

adicionaAvalista("Andrew");
adicionaAvalista("José");
adicionaAvalista("Marcos");
console.log(avalistas);
removeAvalista();
removeAvalista();
console.log(avalistas);
editaAvalista("Manuel Silva", 0);
console.log(avalistas[0]);
console.log(ordenaAvalista());