function exibeNome(nome){
    const promise = (resolve, reject) => {
        setTimeout(() => {
            if(nome === "Manuel"){
                resolve(nome);
            }else{
                reject(new Error("Nome inválido!"));
            }
        }, 1500);  
    }
    return new Promise(promise);
}

function exibeSobrenome(){
    console.log("Silva");
}

async function funcaoAsync (){
    try{
        const meuNome = await exibeNome("Edval");
        console.log(meuNome);
        await exibeSobrenome();
        await console.log("Tudo bem?");
        await console.log("Quantos anos você tem?");
    }catch(erro){
        console.error(erro);
    }
}

console.log("Olá,");
funcaoAsync();