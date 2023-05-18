/* eslint-disable */

// Tipos Básicos
let fullName: string = 'Lucas Corrêa';
let age: number = 0b1010;
let adult: boolean = true;
let symbol: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

// Arrays
let arrayNumbes: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ["a", "b", "c"];
let arrayStrings2: string[] = ["a", "b", "c"];

//Objetos
let people: { name: String, age: number, adult?: boolean } = {
    name: "Lucas",
    age: 23,
    adult: true
};

//Funções
function sum(x: number, y: number): number {
    return x + y;
};
const result = sum(2, 2);

const sum2: (x: number, y: number) => number = (x, y) => x + y;
const result2 = sum2(2, 2);