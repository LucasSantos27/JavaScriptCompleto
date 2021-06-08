// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { // Faltam os parenteses fechando argumento
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => { // Precisa de parenteses mesmo sem argumentos
  console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);