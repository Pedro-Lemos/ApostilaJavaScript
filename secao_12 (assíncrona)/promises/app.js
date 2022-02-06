function exibeNome(nome){
    const promise = (resolve, reject) => {
        setTimeout(() => {
            resolve(nome);
        }, 1500);  
    }
    return new Promise(promise);
}

function exibeSobrenome(){
    console.log("Silva");
}

console.log("Olá,");
exibeNome("Manuel")
    .then((resposta) => {
        console.log(resposta);
    })
    .then(exibeSobrenome)
    .then(() => {
        console.log("Tudo bem?");
    })
    .then(() => {
        console.log("Qual anos você tem?");
    }) 


