const imgs = document.querySelectorAll('img');

// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. 
// Esse função pode receber três parâmetros: valorAtual, index e array;
imgs.forEach(function(item, index, array){
//   // console.log(item, index, array)
});

// forEach é um método de Array, alguns objetos array-like possuem este método.
// Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
  // console.log(item, index, array);
});

const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach((item) => {
//   console.log(i++)
// });

let i = 0;
imgs.forEach(function() { 
  console.log(i++)
});

// Sintaxe curta em relação a function expression.
// Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

imgs.forEach(() => console.log(i++));