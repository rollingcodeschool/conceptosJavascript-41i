// crear un arreglo vacio
let vocales = [];

//crear un arreglo con datos
let series = ["Loky", "Dark", "Thor", 2022, true, "The last of us"];

//funciones
function mostrarSeries(titulo = 'No hay un titulo disponible') {
  document.write(`<h2>${titulo}</h2>`);
  document.write("<ul>");
  for (let indiceSeries = 0; indiceSeries < series.length; indiceSeries++) {
    document.write(`<li>${series[indiceSeries]}</li>`);
  }
  document.write("</ul>");
}

// mostrar el arreglo
console.log(vocales);
console.log(series);
document.write(series);

// mostrar el arreglo como una lista
mostrarSeries();

// agregar elementos en el array
series.unshift("Manifest", "Mandalorian");
mostrarSeries('Agregamos dos elementos al principio del array')

// agregar en el medio del arreglo
series.splice(5, 0, "Friends");
mostrarSeries('Agregamos un elementos en la posicion 5 del array de series');

//agregar un elemento al final
series.push("The big bang theory");
mostrarSeries('Agregamos un elemento al final del array series');

// modificar un item del arreglo
document.write("Elemento posicion 7: " + series[7]);
series[7] = "La niñera";

mostrarSeries('Modificamos el elemento de la posicion 7 del array de series');

// eliminar elementos del inicio del array
series.shift();
mostrarSeries('Eliminamos el primer elemento del arreglo de series');

//eliminar elementos del medio del array
series.splice(5, 1); // borro el elemento de la posicion 5
// series.splice(5,3); // borro 3 elementos desde la posicion 5
// series.splice(3); // borro todo desde la posicion 3
mostrarSeries('Eliminamos el elemento de la posicion 5 del arreglo de series');

// eliminar del final del array
series.pop();
mostrarSeries('Eliminamos el ultimo elemento del arreglo de series')

// OPERACIONES EXTRAS
series.sort();
mostrarSeries('Mostrar el arreglo de series ordenado')

// buscar si existe un elemento en el arreglo
document.write(
  `Existe la serie The last of us: ` + series.includes("The last of us")
);
document.write(
  `<br>Existe la serie the mandalorian: ` + series.includes("the mandalorian")
);

//El operador ternario
// (condicion logica)? true : false;

let existeSerie = series.includes("The last of us")
  ? `si encontramos la serie`
  : "No encontramos la serie buscada";
// let existeSerie =  series.includes('The last of us') ? `si encontramos la serie` : null;

// let existeSerie='';
// if( series.includes('The last of us')){
//     existeSerie = `si encontramos la serie`;
// }else{
//     existeSerie= 'No encontramos la serie buscada';
// }

document.write(`<br>Existe la serie The last of us: ` + existeSerie);
document.write(
  `<br>Existe la serie the mandalorian: ` +
    (series.includes("the mandalorian")
      ? `si encontramos la serie`
      : "No encontramos la serie buscada")
);
