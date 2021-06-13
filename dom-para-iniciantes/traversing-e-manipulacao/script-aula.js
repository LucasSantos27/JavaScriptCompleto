// Propriedades que retornam uma string contendo o html ou texto. 
// É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
const menu = document.querySelector('.menu');
menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags
// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizad

// Como navegar pelo DOM, utilizando suas propriedades e métodos.
const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.previousSibling);

// Element's represetam um elemento html, ou seja, uma tag. 
// Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
const lista = document.querySelector('.animais-lista');

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima
lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child


// É possível mover elementos no dom com métodos de Node.
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// Podemos criar novos elementos com o método createElement()
// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);

// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, 
// é necessário utilizar o método cloneNode()
const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);