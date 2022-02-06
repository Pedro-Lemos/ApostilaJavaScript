function interrogatorio(){
    let numSim = 0;
    let pergunta1 = (prompt("Telefenou para a vítima?"));
    let pergunta2 = (prompt("Esteve no local do crime?"));
    let pergunta3 = (prompt("Mora perto da vítima?"));
    let pergunta4 = (prompt("Devia para a vítima?"));
    let pergunta5 = (prompt("Já trabalhou com a vítima?"));
    if(pergunta1 === "sim"){
        numSim += 1;
    }
    if(pergunta2 === "sim"){
        numSim += 1;
    }
    if(pergunta3 === "sim"){
        numSim += 1;
    }
    if(pergunta4 === "sim"){
        numSim += 1;
    }
    if(pergunta5 === "sim"){
        numSim += 1;
    }
    return numSim;
}

function classifica(numSim){
    if(numSim === 5){
        console.log("Assasino");
    }else if(numSim === 3 || numSim === 4){
        console.log("Cumplice");
    }else if(numSim === 2){
        console.log("Suspeito");
    }else{
        console.log("Inocente")
    }
}

classifica(interrogatorio());