// Seleciona pelo ID
const animais = document.getElementById('animais');
console.log(animais);

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])

// Retorna o primeiro elemento que combinar com o seu seletor CSS
const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// Retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. 
// Além disso a NodeList retornada com querySelectorAll é estática.
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);


// HTMLCollection e NodeList são array-like, parecem uma array mas não são.
// O método de Array forEach() por exemplo, existe apenas em NodeList.
gridSectionNode.forEach(function(item, index){
  console.log(item);
});

// Transformando em Array funciona tanto com HTMLCollection quanto Nodelist.
// Lembrando que a array é estática
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item) {
  console.log(item);
})