try{
    let nome = "Manuel";
    console.log(nome.toUpperCase());
}catch(erro){
    console.log(erro);
    console.log(erro.name);
    console.log(erro.message);
}finally{
    console.log("Fim da instrução try/catch/finally");
}