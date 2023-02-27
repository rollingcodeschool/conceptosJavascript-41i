//Esto es un comentario de una linea

/*
Es un comentario
de multiples 
lineas
*/

// crear o declarar una variable (var - let - const)

let producto = 'ipad pro';
let precio = 700;
let luzEncendida = false;

// mostrar en el documento html
document.write('<h1>Hola mundo</h1>');
document.write('<br>');
document.write('Precio: $'+ precio * 380);
document.write('<p>Precio: $'+ (precio + 5)+'</p>');
document.write(`<p>Precio: $ ${precio + 5} </p>`);


// mostrar en la consola
console.log(precio * 380);

let vacio = null;
// mostrar una ventana emergente
alert('Hola mundo');

// parseInt('numero')
let numero = parseFloat(prompt('ingrese un numero'));
console.log(numero);
console.log(typeof(numero));

