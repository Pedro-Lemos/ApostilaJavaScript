const numeros = [10,20,30,40,50];

/**const novosNumeros = numeros.map((numero) => numero + 10);

console.log(novosNumeros);
*/

const novosNumeros = numeros.filter((numero) => numero > 25);

console.log(novosNumeros);