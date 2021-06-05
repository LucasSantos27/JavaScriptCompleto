//Operadores aritimeticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//Operadores aritimeticos com String
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

//Ordem importa - Matemática basica
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var soma1 = (10 + 10) + 20 + 30 * 4 / (2 + 10);
console.log(soma1);


//Incremento e Decremento
var x = 5;
console.log(x++);
console.log(x);
var y = 5;
console.log(y--);
console.log(y);


//Operadores Aritiméticos Unários
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN
var idade = +'28'; //Transforma uma String em number
var somaIdade = -5; //Transforma em negativo a variavel

console.log(typeof idade);