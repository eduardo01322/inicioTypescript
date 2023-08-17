"use strict";
let numero = 200;
let segundonumero = 200;
console.log(numero + segundonumero);
let idade = 20;
let texto = "minha idade é:";
console.log(texto + idade);
let idade2 = 20;
let texto2 = "minha idade é:" + idade2;
console.log(texto2);
let verdadeiro = true;
console.log(verdadeiro);
let arr = [1, 2, 3, 4, 10, 50, 60,];
console.log(arr);
console.log("Tamanho do array: " + arr.length);
console.log("Acessando a posição do array: " + arr[1]);
console.log(arr.indexOf(3));
let arraytexto;
arraytexto = ['ab', 'bc', 'cd', 'de'];
console.log(arraytexto);
console.log(arraytexto.length);
console.log(arraytexto.indexOf('ab'));
function exibirTexto() {
    console.log('exibindo meu texto');
}
exibirTexto();
function exibirOutroTexto() {
    return 'Exibindo outro texto';
}
console.log(exibirOutroTexto());
console.log(exibirOutroTexto());
function retornaNumero() {
    return 15;
}
console.log(retornaNumero());
function retornaTexto() {
    return "retornando string";
}
console.log(retornaTexto());
function soma(a, b) {
    return a + b;
}
console.log("O valor da soma é: " + soma(50, 100));
/*exercicios*/
function multiplicação(A, B) {
    return A * B;
}
console.log("O valor da multiplicação é: " + multiplicação(5, 10));
function formula(a, b, c) {
    return (a + b) * c;
}
console.log("O valor da formula é: " + formula(5, 5, 2));
function vezes(A, B) {
    return "O valor da multiplicação é: " + (5 * 5);
}
console.log(vezes());
