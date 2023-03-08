// while(condicion logica){
//     todo el codigo que quiero repetir
//     cambiar la condicion logica
// }

let contador = 2;

while(contador <= 10){
    document.write(`<p>Este es el parrafo N${contador}</p>`);
    // contador++ // contador = contador + 1 ;
    contador += 2 //contador = contador + 2; 
}


// do-while
/*
do{
//     todo el codigo que quiero repetir
//     cambiar la condicion logica
}while(condicion logica)
*/
// let vueltas= 100; 

// do{
//     document.write(`<p>Este es el renglon N${vueltas}</p>`);
//     vueltas+= 2; // vueltas= vueltas +2
// }while(vueltas <10)


let vueltas= 100; 

do{
    document.write(`<p>Este es el renglon N${vueltas}</p>`);
    console.log(`<p>Este es el renglon N${vueltas}</p>`);
    vueltas+= 2; // vueltas= vueltas +2
}while(confirm(`¿Desea ejecutar el codigo nuevamente?`))

//for
/*
for(inicializar la variable; condicion logica; incremento/decrementos){
//     todo el codigo que quiero repetir
}
*/

for(let contador = 10; contador >=1; contador-- ){
    document.write(`<p>Este es un contador, N${contador}</p>`);
    console.log(contador)
}

