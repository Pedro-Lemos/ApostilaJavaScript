const listaFilmes = document.querySelector("#listaFilmes");

const filmes = [
    {nome: "Uma linda mulher", genero: "Romance"},
    {nome: "US", genero: "Terror"},
    {nome: "Ate que a sorte nos separe", genero: "Comédia"},
];

const criaElementosUi = function(){
    let aux = "";
    filmes.forEach((filme) => {
        aux += `<li> Nome: ${filme.nome} Gênero: ${filme.genero}`
    });
    listaFilmes.innerHTML = aux;
}

function exibeFilmes(){
    setTimeout(criaElementosUi, 2000);
}

function adicionaFilme(filme){
    const promise = (resolve, reject) => {
        setTimeout(() => {
            if(filme.nome === ""){
                reject(new Error("Nome inválido!"));
            }else{
                filmes.push(filme);
                resolve(filme);
            }
        }, 3000);
    }
    return new Promise(promise);
}

async function funcaoAsync() {
    try{
        const oContraTempo = await adicionaFilme({nome: "O contratempo", genero: "Suspense"})
        console.log(oContraTempo);
        await adicionaFilme({nome: "Velozes e Furiosos 1", genero: "Ação"});
        await adicionaFilme({nome: "", genero: "Ação"});
        await adicionaFilme({nome: "Velozes e Furiosos 3", genero: "Ação"});
        await adicionaFilme({nome: "Velozes e Furiosos 4", genero: "Ação"});
        exibeFilmes();
    }catch(erro){
        console.error(erro);
    }
}

funcaoAsync();
