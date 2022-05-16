"use strict";
// => Exemplo 01 - Uso de Colchetes:
let frutas = ['morango', 'abacaxi', 'maçã', 'uva'];
console.log(frutas[2]);
// => Exemplo 02 - Array Objetct (Objeto Array):
let frutas1 = ['morango', 'abacaxi', 'maçã', 'uva'];
console.log(frutas[3]);
// => Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas = ['Português', 'Ingles', 'Francês', 'Espanhol'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
// => Exemplo 04 - Indentificar o tamanho do array - método 'length'
let idiomas1 = ['morango', 'abacaxi', 'maçã', 'uva'];
console.log(idiomas1.length);
// => Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
console.log(listaNumeros);
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// => Exemplo 06 - Exemplo de Array com laço de Iteração
let linguagensArray = new Array('Javascript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagensArray);
