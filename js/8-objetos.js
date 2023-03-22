//crear un objeto con notacion literal

let pikachu = {
    //propiedades -> key: value
    nombre:'Pikachu',
    color: 'Amarillo', 
    tamanio: .4,
    tipo: 'electrico',
    evoluciones: ['pichu', 'pikachu', 'Raichu'],
    categoria: 'raton',
    //metodos
    atacar: ()=>{
        document.write('<p>Impactrueno!!!!</p>');
    },
    defender: ()=>{
        console.log(this)
        document.write('<p>Esquivo el ataque</p>');
    },
    evolucion: function (){
        console.log(this);
        document.write(`<p>${this.nombre} esta evolucionando a ${this.evoluciones[2]}</p>`);
    }
}

// mostrar el objeto
console.log(pikachu);

document.write(`Pokemon : ${pikachu.nombre}`);
document.write(`<br>Color : ${pikachu.color}`);
document.write(`<br>Evoluciones : ${pikachu['evoluciones']}`);
document.write(`<br>Tamaño : ${pikachu.tamanio}`);
//modificar 

pikachu.tamanio = .5;
document.write(`<br>Tamaño : ${pikachu.tamanio}`);

//agregar una propiedad
pikachu.nro = 25;
document.write(`<br>Tamaño : ${pikachu.nro}`);
console.log(pikachu);

//borrar la propiedad de un objeto
delete pikachu.tamanio;
console.log(pikachu);

//usar los metodos
pikachu.atacar();
pikachu.evolucion();
pikachu.defender();

console.log(this);

console.log(pikachu.hasOwnProperty('color'));
console.log(pikachu.hasOwnProperty('estado'));

// Crear un prototipo Pokemon ES5 / ES6
function Pokemon(nombre, tipo, color){
    this.nombre = nombre;
    this.tipo = tipo;
    this.color = color;
}

// instanciar un prototipo
const pokemonFuego = new Pokemon('Charmander', 'Fuego', 'Naranja');
const pokemonPlanta = new Pokemon('Bulbasaur', 'Planta', 'Verde');

console.log(pokemonFuego)
console.log(pokemonPlanta)





