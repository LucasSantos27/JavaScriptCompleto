const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight; //height total, mesmo dentro de scroll
const animaisTop = listaAnimais.offsetTop; // Distância entre o topo do elemento e o topo da página
console.log(animaisTop);

// listaAnimais.clientHeight; // height + padding
// listaAnimais.offsetHeight; // height + padding + border

const primeiroh2 = document.querySelector('h2');

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();
h2rect.height; // height do elemento
h2rect.width; // width do elemento
const top = h2rect.top; // distância entre o topo do elemento e o scroll

console.log(top);

if(h2rect.top < 0) {
  console.log('Passou do elemento')
}

console.log(
  window.innerWidth, // width do janela
  window.innerHeight, // height do janela
  window.outerWidth, // soma dev tools também
  window.outerHeight, // soma a barra de endereço
  window.pageYOffset, // distância total do scroll horizontal
  window.pageXOffset, // distância total do scroll vertical
);

// Utilize um media query como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}