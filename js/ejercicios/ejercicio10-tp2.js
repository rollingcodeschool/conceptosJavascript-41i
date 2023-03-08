// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = prompt('Ingrese un numero de filas');
const columnas = prompt('Ingrese un numero de columnas');

document.write('<table><tbody>')
for(let indiceFilas = 0; indiceFilas<filas ; indiceFilas++){
    document.write(`<tr>`);
    // dibujar celdas tantas veces como columnas se indiquen
    document.write('<td>1</td>')
    
    document.write('</tr>')
}
document.write('</tbody></table>')
