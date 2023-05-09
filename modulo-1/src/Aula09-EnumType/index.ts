enum Colors {
  RED = 10, //0
  BLUE, //1
  YELLOW, //2
  CYAN = 'CYAN',
}

/* console.log(Colors[10]);
console.log(Colors.BLUE);
console.log(Colors.CYAN); */

/* enum Colors {
  ORANGE = 'LARANJA',
  GREEN = 5,
  PURPLE,
} */

function changeColor(color: Colors): void {
  console.log(Colors[color]);
}

changeColor(Colors.CYAN);
