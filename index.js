"use strict";
//tipagem !explicita//
let variavel = "text";
//tipagem string (letras palavras) explicita//
let variavel2 = "texto";
//tipagem de variavel com numero 
let variavel3 = 0;
//tipagem de variaveis lógicas
let variavel4 = true;
let variabel5 = false;
//tipagem de vareavel objeto
let variavel6 = {};
//tipagem de variavel array
let variavel7 = [0, 1];
let variavel8 = [0, 1, 8, 8];
let variavel9 = ["texto1", "texto2"];
// função que não tem retorno chamada de void
function numberRandom() {
    variavel3 = Math.random();
    console.log(variavel3);
}
function numberRandomReturn() {
    return Math.random();
}
console.log(numberRandomReturn());
numberRandom();
