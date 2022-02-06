let temperatura;
let somaTemperatura = 0;
let numTemperatura = 0;

while(true){
    temperatura = parseInt(prompt("Informe uma temperatura"));
    if(temperatura === 0){
        break;
    }
    somaTemperatura += temperatura;
    numTemperatura += 1;
}

console.log(somaTemperatura/numTemperatura);