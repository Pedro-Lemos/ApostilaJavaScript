function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, 
    valorEmprestimoCliente, numAnosCliente = 2, 
    ehBomPagadorCliente = false, avalistasCliente){
        cliente = {
            nome: nomeCliente,
            sobrenome: sobrenomeCliente,
            idade:idadeCliente,
            emprestimo : {
                valorEmprestimo: valorEmprestimoCliente,
                numAnos: numAnosCliente,
                ehBomPagador: ehBomPagadorCliente,
                taxaDeJuros: defineTaxa(idadeCliente),
                avalistas: avalistasCliente
            },
            adicionaAvalista: function(avalista){
                this.emprestimo.avalistas.push(avalista);
            },
            removeAvalista: function(){
                this.emprestimo.avalistas.pop();
            },
            editaAvalista: function(nomeAvalista, indice){
                this.emprestimo.avalistas[indice] = nomeAvalista;
            },
            ordenaAvalista: function(){
                this.emprestimo.avalistas.sort();
            },
            exibeAvalista: function(){
                this.emprestimo.avalistas.forEach((avalista, indice) => {
                    console.log(`O ${indice + 1}° avalista é ${avalista}`);
                });
            }
        }
        
        return cliente;
}

function defineTaxa(idadeCliente){
    if(idadeCliente >= 18 && idadeCliente <= 25){
        return 0.09;
     }else if(idadeCliente >= 26 && idadeCliente <= 35){
        return 0.08;
     }else if(idadeCliente >= 36 && idadeCliente <= 50){
        return 0.07;
     }else{
        return 0.06;
     }
}

const cliente1 = cadastraCliente("Edval", "Silveira", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"]);

cliente1.adicionaAvalista("José");
cliente1.adicionaAvalista("Marcos");
cliente1.removeAvalista();
cliente1.editaAvalista("Manuel Silva", 0);
cliente1.ordenaAvalista();
cliente1.exibeAvalista();
