function ocultaSenha(senha){
    let senhaAux = "";
    for(let i = 0; i < senha.length; i++){
        senhaAux += "*";
    }
    return senhaAux;
}

const usuario = {
    nome: "José",
    email: "jose@email.com",
    senha: "jose123"
}

usuario.senha = ocultaSenha(usuario.senha);
console.log(usuario);