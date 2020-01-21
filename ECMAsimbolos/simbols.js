let symbol1 = Symbol();
let symbol2 = Symbol('symbol2');
//LOS SIMBOLOS SON SIEMPRE DIFERENTES

//Estos son simbolos as property keys
const MY_KEY = Symbol();
  let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

const COLOR_ORANGE = Symbol('Orange');
const COLOR_GREEN = Symbol('Green');

function getComplement(color){
  switch (color) {
    case COLOR_ORANGE:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_YELLOW;
    default:
    throw new Exception('Unknown color:' +color);
      break;
  }
}
