// Por qual motivo o código abaixo retorna com erros? var não é o nome da variavel, let e const
// não podem ser vazados do escopo de bloco
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo? O dois não vai funcionar na segunda função pq ele foi declarado na primeira
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(10));

// O que fazer para total retornar 500? Transformar var numero em const e let respectivamente
const numero = 50;

// Escopo de bloco não da problema com varivel de fora
for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
