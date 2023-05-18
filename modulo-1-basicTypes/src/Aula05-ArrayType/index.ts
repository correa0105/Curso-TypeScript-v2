function multipliArgs(...args: Array<number>) {
  return args.reduce((ac, value) => ac * value, 1);
}

function concactString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

export const result = multipliArgs(1, 2, 3);
export const result2 = concactString('Lucas', 'Corrêa');
export const result3 = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(result2);
console.log(result3);
