// ES6
class Pokemon{
    constructor(nombre, tipo, color){
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
        this.vida = 100; //propiedad por defecto
    }
    //aqui van todos los metodos que necesite
    tirarPokebola(){
        document.write('<p>Salio de la pokebola, y aperecio un '+this.nombre +' </p>')
    }
    // get y set

    // propiedades privadas
}


// instanciar un prototipo
const pokemonFuego = new Pokemon('Charmander', 'Fuego', 'Naranja');
const pokemonPlanta = new Pokemon('Bulbasaur', 'Planta', 'Verde');

console.log(pokemonFuego)
console.log(pokemonPlanta)

pokemonFuego.tirarPokebola();
pokemonPlanta.tirarPokebola();

