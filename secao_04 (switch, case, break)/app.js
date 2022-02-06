/*
Empresa de desenvolvimento de software

Programador Junior -> 4 mil
Programador Pleno -> 5 mil
Programador Senior -> 6 mil
Testador -> 5 mil
Arquiteto -> 8 mil
Analista -> 7 mil
Gerente -> 10 mil
*/

let cargo = "Arquiteto";

switch(cargo){
    case "Programador Junior":
        console.log("O Programador Junior recebe R$4000.");
        break;
    case "Programador Pleno":
        console.log("O Programador Pleno recebe R$5000.");
        break;
    case "Programador Senior":
        console.log("O Programador Senior recebe R$6000.");
        break;
    case "Testador":
        console.log("O Testador recebe R$5000.");
        break;
    case "Arquiteto":
        console.log("O Arquiteto recebe R$8000."); 
        break;
    case "Analista":
        console.log("O Analista recebe R$7000.");
        break;
    case "Gerente":
        console.log("O gerente recebe R$10000.");
        break;
    default:
        console.log("Cargo não cadastrado no sistema.");
}
