// String
var nome = 'Lucas';

nome.length; // 5
nome.charAt(1); // 'u'
nome.replace('cas', 'an'); // 'Luan'
nome; // 'Lucas'

var nomeMinusculo = nome.toLowerCase();

// Number
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// Functions
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

var btn = document.querySelector('.btn');
