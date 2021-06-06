var pessoa = {
  nome: 'Lucas',
  idade: 21,
  profissao: 'Desenvolvedor',
  possuiFaculdade: true,
}

console.log(pessoa.nome) // Retorna atributo, nesse caso o nome
console.log(pessoa); // Retorna objeto

// Métodos - Funções dentro do objeto
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Função Math já existente no JS
// console.log(Math); Objeto da função
console.log(Math.random()); // Método da função que retorna um numero de 0 a 1 aleatorio

// Até mesmo o console é um objeto

// console.log(console); Objeto da função
console.table(quadrado); // Retorna em forma de tabela uma array, objeto, etc.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

// Setando uma nova cor para o background no menu
menu.backgroundColor = '#000';

// Criando um novo metodo no objeto menu
menu.esconder = function() {
  console.log('Escondi')
}

var bg = menu.backgroundColor; //#000

// Verifica se o objeto tem uma propiedade especifica

menu.hasOwnProperty('width');