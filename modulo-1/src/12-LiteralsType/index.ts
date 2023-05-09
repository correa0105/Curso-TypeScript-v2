export let valueX = 10; //eslint-disable-line
valueX = 0b1010;

export const valueY = 100;

export let valueZ: 100 = 100; //eslint-disable-line
valueZ = 120; //Não é possivel pois ela é do tipo literal 100

const people = {
  name: 'Lucas' as const,
  lastname: 'Corrêa',
};

people.name = 'Vitor'; //Não é possivel pois foi determinado como const

function changeColor(
  color: 'Blue' | 'Red' | 'White',
): string {
  return color;
}

console.log(changeColor('Red'));
