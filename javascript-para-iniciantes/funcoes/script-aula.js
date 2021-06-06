function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10)); // 100

function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7

console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(69, 1.73));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

function mostraConsole() {
  console.log('Oi')
}

addEventListener('click', mostraConsole);
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8); // undefined e no console retorna o valor do imc
console.log(imc2(1000, 1.80)); // retorna no console imc e undefined


function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor, preencha sua idade com'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('oi'));

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises);

var profissao = 'Desenvolvedor';

function dados() {
  var nome = 'Lucas';
  var idade = 20; // Essa idade não está funcionando
  function outrosDados() {
    var endereco = 'Itajubá';
    var idade = 21;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Lucas, 21, Itajubá, Desenvolvedor'

//Hoisting - Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc3(69, 1.73); // imc aparece no console

function imc3(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}