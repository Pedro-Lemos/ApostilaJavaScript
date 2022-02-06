// Seção 08 Objeto String - EMAIL E SENHA

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

function adicionaInfLogin(cliente, email, senha){
    
    if(email.indexOf("@") !== -1 && senha.length > 5){
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente;
    }else{
        return "Credenciais invalidas";
    }
    
}

const cliente1 = cadastraCliente("Edval", "Silveira", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"]);

console.log(adicionaInfLogin(cliente1, "edval@email.com", "ed12345"));
console.log(adicionaInfLogin(cliente1, "edval.com", "edval1234"));
console.log(adicionaInfLogin(cliente1, "edval@email.com", "mnd"));