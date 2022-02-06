//GetElementById
/*
const paleta1 = document.getElementById("paleta1");
const paleta2 = document.getElementById("paleta2");
const paleta3 = document.getElementById("paleta3");

console.log(paleta1);
console.log(paleta2);
console.log(paleta3);
*/

//getElementsByClassName
//const classePaleta = document.getElementsByClassName("paleta");
//console.log(classePaleta);
//console.log(classePaleta[1]);


//AULA 06

/* Parent Node
const paleta1 = document.querySelector("#paleta1");
console.log(paleta1.parentNode);
*/


//Children

//const paletas_div = document.querySelector(".paletas_div");
//console.log(paletas_div.children);


//FirstElementChild / LastElementChild

//const paletas_div = document.querySelector(".paletas_div");
//console.log(paletas_div.firstElementChild);
//console.log(paletas_div.lastElementChild);


//previousElementSibling / nextElementSibling]

//const paleta2 = document.querySelector("#paleta2");
//console.log(paleta2.previousElementSibling);
//console.log(paleta2.nextElementSibling);


//AULA 07

//createElement, InsertBefore e AppendChild

/*const titulo = document.createElement("h1");
titulo.textContent = "Lembretes";
titulo.classList.add("titulo");
//titulo.classList.remove("titulo");

const body = document.querySelector("body");
const paletas_div = document.querySelector(".paletas_div");
body.insertBefore(titulo, paletas_div);

const paleta4 = document.createElement("div");
paletas_div.appendChild(paleta4);
console.log(paletas_div);

paleta4.classList.add("paleta");
*/

//AULA 09

//RemoveChild
/*
const paletas_div = document.querySelector(".paletas_div");
const paleta2 = document.querySelector("#paleta2");

paletas_div.removeChild(paleta2);
*/

const paletas_div = document.querySelector(".paletas_div");
while(paletas_div.firstElementChild){
    paletas_div.removeChild(paletas_div.firstElementChild);
}