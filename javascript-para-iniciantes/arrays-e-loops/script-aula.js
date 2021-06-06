
// array
var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// var ultimoItem = videoGames.pop(); Da o ultimo item e remove ele
// videoGames.push('PSP') Adiciona mais um elemento na array

// loop
for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break; // Parar o loop
  }
}

for (var numero = 1; numero <= 4; numero++) {
  console.log(numero);
}

var i = 0; // index
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

// Um metódo da array que passa por cada elemento dela
frutas.forEach(function(fruta, index) { // 1° argumento - nome, 2° argumento - index, 3° argumento - array
  frutas.pop();
  console.log(fruta, index, frutas)
});


// Funciona, mas não é aconselhavel
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
