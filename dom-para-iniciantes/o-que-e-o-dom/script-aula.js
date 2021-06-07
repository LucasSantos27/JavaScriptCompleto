// window.alert('Isso mesmo'); não precisar tem o window.

//Criando uma constante com o link do site
const href = window.location.href;

console.log(href);

// Verifica se a função é igual ao link da constante
if(href === 'http://127.0.0.1:5500/o-que-e-o-doms/') { 
  console.log('É igual');
}

// Node
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

function teste() {
  console.log('Clicou em ', titulo.innerText);
}

titulo.addEventListener('click', teste);