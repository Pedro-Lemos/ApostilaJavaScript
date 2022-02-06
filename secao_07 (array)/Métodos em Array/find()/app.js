/**const numeros = [10,20,30,40,50];

const novosNumeros = numeros.map((numero) => numero + 10);

console.log(novosNumeros);


const novosNumeros = numeros.filter((numero) => numero > 25);

console.log(novosNumeros);
*/

const numeros = [-7,-10,-3,0,4,5,100];

let numeroRetornado = numeros.find((numero) => numero > 0);
let indiceRetornado = numeros.findIndex((numero) => numero > 0);
console.log(numeroRetornado);
console.log(indiceRetornado);