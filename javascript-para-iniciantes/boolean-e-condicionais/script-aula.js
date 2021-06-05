var possuiGradruacao = true;
var possuiDoutorado = false;

//Retorna "É verdadeiro", já que possuiGraduacao é true
if(possuiGradruacao) {
  console.log('É verdadeiro');
} else if(possuiDoutorado) {
  console.log('Possui Doutorado');
} else {
  console.log('Não possui nada');
}

// Truthy
if(true);
if(1);
if(' ');
if('andre');
if(-5);
if({});

// Falsy
if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

//Retorna "Nome não existe", já que nome é NaN
var nome = '10kg' / 10;
if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

//Retorna o inverso do possuiDoutorado, então !possuiDoutorado é true
if(!possuiDoutorado) {
  console.log(possuiDoutorado);
  console.log('Não possui Doutorado');
}

//Operadores de comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true

//Verifica se x é diferente de 11
var x = 10;
console.log(x !== 11)

//Operador Lógico AND
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

//Verifica utilizando operador lógico AND, retornando 0, logo False
if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//Verifica utilizando operador lógico AND, retornando diferente de 0, logo True
var condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

//Operador Lógico OR
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

//Verifica utilizando operador lógico OR, retornando o primeiro True, logo 10
var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);

//Switch - Verificar uma variavel de diversas formas diferentes
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}