// Adiciona uma função ao elemento, esta chamada de callback, 
// que será ativada assim que certo evento ocorrer neste elemento.
const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})

//É boa prática separar a função de callback do addEventListener, ou seja, 
// declarar uma função ao invés de passar diretamente uma função anônima
const animaisLista = document.querySelector('.animais-lista');

// O primeiro parâmetro do callback é referente ao evento que ocorreu.
function callbackLista(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

// animaisLista.addEventListener('click', callbackLista);

//Previne o comportamento padrão do evento no browser. 
//No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault(); //Previne
  console.log(this.getAttribute('href')); // This faz referência ao elemento em que addEventListener foi adicionado.
  console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);


// Tipos de eventos
const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent); CLICAR
// h1.addEventListener('mouseenter', handleEvent); PASSAR O MOUSE POR CIMA
// h1.addEventListener('mousemove', handleEvent); CADA MOVIMENTO QUE PASSA PELO ELEMENTO
// window.addEventListener('scroll', handleEvent); SCROLL NA PÁGINA
// window.addEventListener('resize', handleEvent); MUDAR O TAMANHO DA PÁGINA
// window.addEventListener('keydown', callback); 
// https://developer.mozilla.org/en-US/docs/Web/Events

// Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
function handleKeyboard(event) {
  if(event.key === 'a') {
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown', handleKeyboard); // APERTAR ALGUMA TECLA 


const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'));
}

// O método addEventListener é adicionado à um único elemento, 
// então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});