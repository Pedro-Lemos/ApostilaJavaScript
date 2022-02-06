function falaCebolinha(frase){

    let fraseCebolinha = "";
    for(let letra of frase){
        if(letra === "r"){
            fraseCebolinha += "l";
        }else{
            fraseCebolinha += letra;
        }
    }
    return fraseCebolinha;
}

console.log(falaCebolinha("nao troco as letras de proposito"));
console.log(falaCebolinha("vamos tomar um sorvete?"));