"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 10] = "RED";
    Colors[Colors["BLUE"] = 11] = "BLUE";
    Colors[Colors["YELLOW"] = 12] = "YELLOW";
    Colors["CYAN"] = "CYAN";
})(Colors || (Colors = {}));
/* console.log(Colors[10]);
console.log(Colors.BLUE);
console.log(Colors.CYAN); */
/* enum Colors {
  ORANGE = 'LARANJA',
  GREEN = 5,
  PURPLE,
} */
function changeColor(color) {
    console.log(Colors[color]);
}
changeColor(Colors.CYAN);
