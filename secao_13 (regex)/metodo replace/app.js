const valor ="R$ 1850,99";
const regexValor = /(R\$) ([0-9]{4})[,]([0-9]{2})/;
const regexValorNome = /(?<moeda>R\$) (?<inteiro>[0-9]{4})[,](?<centavos>[0-9]{2})/;
const data = regexValorNome.exec(valor);
console.log(data.groups.moeda);
console.log(data.groups.inteiro);
console.log(data.groups.centavos);

//console.log(valor.replace(regexValor, '$ $2.$3'));