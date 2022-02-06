const stringTest = "Hello World!!!";
const regex = /World/;
//console.log(regex.test(stringTest));

const regexH = /H/;
const regexl = /l/;
const regexll = /ll/;

//console.log(regexH.test(stringTest));
//console.log(regexl.test(stringTest));
//console.log(regexll.test(stringTest));

const regexW = /w/i;
//console.log(regexW.test(stringTest));

const stringTest1 = "Exemplo: Hello World!!!";
const regexComeco = /^Hello/;
const regexFinal = /!!!$/;

//console.log(regexComeco.test(stringTest));
//console.log(regexComeco.test(stringTest1));

console.log(regexFinal.test(stringTest));
console.log(regexFinal.test(stringTest1));