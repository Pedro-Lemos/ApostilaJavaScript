
let produtos = "3210232-B\n322032321-B\n321212121-C\9885-D\n65560565-E\n9879908983213132-F";
console.log(produtos);
const regex = /[0-9]+[-][B]/;
//const resultado = produtos.match(regex);  = .match
const resultado = regex.exec(produtos);
console.log(resultado);