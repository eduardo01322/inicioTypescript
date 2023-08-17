let numero: number = 200;
let segundonumero: number = 200;

console.log(numero + segundonumero);

let idade: number = 20;
let texto: string= "minha idade é:";

console.log(texto + idade);

let idade2: number = 20;
let texto2: string= "minha idade é:" + idade2;

console.log(texto2);

let verdadeiro: boolean=true;

console.log(verdadeiro);

let arr: number[] = [1, 2, 3, 4, 10, 50, 60,];

console.log(arr);
console.log("Tamanho do array: " + arr.length);
console.log("Acessando a posição do array: " + arr[1]);
console.log(arr.indexOf(3));

let arraytexto: Array<string>;

arraytexto = ['ab', 'bc', 'cd', 'de'];

console.log(arraytexto);
console.log(arraytexto.length);
console.log(arraytexto.indexOf('ab'));

function exibirTexto(){
    console.log('exibindo meu texto');
}

exibirTexto();

function exibirOutroTexto(){
    return 'Exibindo outro texto';
}

console.log(exibirOutroTexto());

console.log(exibirOutroTexto());

function retornaNumero(): number {
    return 15;
}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string";
}

console.log(retornaTexto());

function soma(a: number, b: number): number {
    return a + b;
}

console.log("O valor da soma é: " + soma(50, 100));

/*exercicios*/

function multiplicação(A: number, B: number): number {
    return A * B;
}

console.log("O valor da multiplicação é: " + multiplicação(5, 10));

function formula(a: number, b: number, c: number): number {
    return (a + b) * c;
}

console.log("O valor da formula é: " + formula(5, 5, 2));

function vezes(A: number, B: number): string {
    return "O valor da multiplicação é: " + (5 * 5);
}

console.log(vezes());
