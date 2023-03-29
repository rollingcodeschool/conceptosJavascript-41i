// for in, itera en objetos
let heroe = {
  nombre: "Tony Stark",
  heroe: "Ironman",
  color: "rojo",
  universo: "Marvel",
};

let colores = ['Azul','Amarillo', 'Rosa', 'verde', 'turquesa'];

for(let i in heroe ){
    console.log(`${i}: ${heroe[i]}`)// devuelve la key de cada propiedad
}

//for of se usa para objetos iterables (Arrays y string)
for(let i of colores){
    console.log(i);
}

// no lo podemos usar en objetos

// for(let i of heroe){
//     console.log(i);
// }
