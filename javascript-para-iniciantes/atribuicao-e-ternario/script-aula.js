// Operadores de atribuição
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operação Ternário
var idade = 21;
var naoPossuiDiabetes = false;
var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)

// If abreviado - Não é necessar abrir e fechar chaves em uma linha de código
var possuiFaculdade = false;
if(possuiFaculdade)
  console.log('Sim possui');
else
  console.log('Não possui')