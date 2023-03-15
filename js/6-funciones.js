// funciones declarativas
function saludar(){
    document.write('Hola mundo<br>');
}

function revelarPersonaje(apellido, nombre, aliasPersonaje){
    // const otroNombre = nombreCompleto(nombre,apellido);
    // document.write(`<br>Mi nombre es ${otroNombre} y me conocen como ${aliasPersonaje}`);
    document.write(`<br>Mi nombre es ${nombreCompleto(nombre,apellido)} y me conocen como ${aliasPersonaje}`);
}

// function nombreCompleto(nombre, apellido){
//     const nuevoNombre = apellido+', '+nombre; 
//     console.log(nuevoNombre);
//     return nuevoNombre;
// }

// funciones expresivas o anonimas
// const nombreCompleto = function (nombre,apellido){
//     const nuevoNombre = apellido+', '+nombre; 
//     return nuevoNombre;
// }

// arrow functions
// const nombreCompleto = (nombre,apellido) =>{
//     const nuevoNombre = apellido+', '+nombre; 
//     return nuevoNombre;
// }

const nombreCompleto = (nombre,apellido) => apellido+', '+nombre;


// document.write(`Mi nombre es Bruce wayne, y me conocen como Batman`)

//invocar o usar la funcion
saludar();
console.log('prueba');

let nombre = 'Peter';
let apellido = 'Parker';
let alias = 'Spiderman';

revelarPersonaje(apellido, nombre, alias);
revelarPersonaje('Wayne', 'Bruce', 'Batman');
let james = nombreCompleto('James','Bond')
console.log(james);

// Pedir al usuario un nombre de un juego y un precio, crear una funcion que informe cuanto vamos a pagar con todos los impuestos incluidos. A continuacion preguntar al usuario si quiere consultar informacion de otro juego.

const precioFinal = precio =>(precio * 1.75).toFixed(2);

do{

const juego = prompt('Ingrese el nombre del juego');
const precio = parseFloat(prompt('Ingrese el precio del juego'));

alert(`El juego ${juego} cuesta $${precioFinal(precio)} todos los impuestos incluidos`);

}while(confirm('¿Quiere realizar otra consulta?'))



