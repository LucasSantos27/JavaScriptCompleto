// Escopo - evitar que tenha erro entre variaveis externas e internas na função

'use strict' // Modo restrito - impede que erros bobos aconteçam

// Escopo de função
var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// Escopo de bloco
if(false) {
  const mes = 'Dezembro';
  console.log(mes);
}

// console.log(mes);

{
  var carro2 = 'Fusca 2'; // var vaza do escopo de bloco, enquanto const e let não
  const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano); // erro ano is not defined

// Na utilização de loops, em for é melhor utilizar o let, para não vazar o escopo
var i = 50;
// for(let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }

console.log(i * 10);

// var - vaza do escopo de bloco 
// let - não vaza do esopo de bloco
// const - o valor não muda de nenhuma forma
const semana = 'Sexta';
// semana = 'Quinta' - isso não funciona

console.log(semana);

// Em objetos, você não pode modificar o objeto em si, mas pode mudar os atributos, metodos, etc.
const data = {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;

// Não pode redeclarar a variável