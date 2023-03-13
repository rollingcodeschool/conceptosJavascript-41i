// crear un arreglo vacio
let vocales = [];

//crear un arreglo con datos
let series = ['Loky', 'Dark', 'Thor', 2022, true, 'The last of us'];

// mostrar el arreglo
console.log(vocales);
console.log(series);
document.write(series);

// mostrar el arreglo como una lista
document.write('<h2>Lista de series</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

// agregar elementos en el array
series.unshift('Manifest', 'Mandalorian');

document.write('<h2>Agregamos dos elementos al principio del array</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

// agregar en el medio del arreglo
series.splice(5,0,'Friends');

document.write('<h2>Agregamos un elementos en la posicion 5 del array de series</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

//agregar un elemento al final
series.push('The big bang theory');

document.write('<h2>Agregamos un elemento al final del array series</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

// modificar un item del arreglo
document.write('Elemento posicion 7: '+series[7]);
series[7] = 'La niñera';

document.write('<h2>Modificamos el elemento de la posicion 7 del array de series</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

// eliminar elementos del inicio del array
series.shift();

document.write('<h2>Eliminamos el primer elemento del arreglo de series</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

//eliminar elementos del medio del array
 series.splice(5,1); // borro el elemento de la posicion 5
// series.splice(5,3); // borro 3 elementos desde la posicion 5
// series.splice(3); // borro todo desde la posicion 3

document.write('<h2>Eliminamos el elemento de la posicion 5 del arreglo de series</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

// eliminar del final del array
series.pop();

document.write('<h2>Eliminamos el ultimo elemento del arreglo de series</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

// OPERACIONES EXTRAS
series.sort();

document.write('<h2>Mostrar el arreglo de series ordenado</h2>')
document.write('<ul>')
for(let indiceSeries=0; indiceSeries < series.length; indiceSeries++){
    document.write(`<li>${ series[indiceSeries] }</li>`)
}
document.write('</ul>')

// buscar si existe un elemento en el arreglo
document.write(`Existe la serie The last of us: `+ series.includes('The last of us'))






