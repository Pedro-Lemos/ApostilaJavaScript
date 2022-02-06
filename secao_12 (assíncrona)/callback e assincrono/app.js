/*console.log("Um Linda Mulher");
setTimeout(console.log, 1500, "O contratempo");
console.log("Harry Potter");


console.log("Olá,");
setTimeout(console.log, 1500, "Pedro");
console.log("Lemos");
*/

function exibeNome(nome, callback){
    setTimeout(() => {
        console.log(nome);
        callback();
    }, 1500);
}

console.log("Olá,");
exibeNome("Manuel", function(){
    console.log("Silva");
})