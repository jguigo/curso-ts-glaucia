"use strict";
// => Exemplo 01-Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ["Guilherme Melo", "Estudante de Backend", 27];
console.log(pessoa);
// => Exemplo 02 Acessando o valor da Tupla
let pessoa1;
pessoa1 = ["Guilherme Melo", "Estudante de Backend", 27];
console.log(pessoa1[1]);
// => Exemplo 03 Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2;
pessoa2 = ["Guilherme Melo", "Estudante de Backend", 27];
console.log(pessoa2[1]);
// => Exemplo 04-Usando Tuplas com Spread Operator
let listaFrutas = ["morango", "abacaxi", "maçã", "uva"];
console.log(listaFrutas);
console.log(...listaFrutas);
// => Exemplo 05-Lista Heterogênea de Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// => Exemplo 06-Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    //os parâmetros de uma função, quando estão dessa forma são tuple de labels!!!
    return [...nomes, ...idades];
}
let resultado = listarPessoas(["Guilherme", "Larissa"], [27, 26]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Guilherme', 'Melo'));
console.log(criarPessoa('Guilherme', 'França', 'Melo'));
