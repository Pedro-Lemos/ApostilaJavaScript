let nome = "Manuel";

function sauda(){
    let saudacao = "Olá, Sr. " + nome;
    return saudacao;
}

console.log(sauda());
console.log(saudacao);

//A variavel "saudacao" não poder ser no console.log
//se não irá dar o erro (no escopo global)