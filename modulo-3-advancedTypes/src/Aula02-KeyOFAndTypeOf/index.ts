type ColorsObj = typeof colorsObjPT;
type ColorsKey = keyof ColorsObj;

const colorsObjPT = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
};

function translateColor(color: ColorsKey, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('red', colorsObjPT));
