const menu = document.querySelector('.menu');
// Retorna uma lista com as classes do elemento.
//Permite adicionar, remover e verificar se contém.
// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';

console.log(menu.className);

// console.log(menu.classList.);

const animais = document.querySelector('.animais');

// Retorna uma array-like com os atributos do elemento.
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

// Métodos que retornam ou definem de acordo com o atributo selecionado
const srcImg = img.getAttribute('src'); // retorna valor do src

img.setAttribute('alt', 'É uma raposa'); // muda o alt

const possuiAlt = img.hasAttribute('alt'); // true / false
console.log(possuiAlt);

// img.removeAttribute('alt'); // remove o alt

console.log(srcImg);

// Read Only vs Writeable
// Existem propriedades que não permitem a mudança de seus valores,
// essas são considerados Read Only, ou seja, apenas leitura.
const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only