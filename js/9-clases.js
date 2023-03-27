// ES6
class Pokemon{
    //se ejecuta automaticamente cuando creo un nuevo objeto
    #tipo;// declaro la propiedad privada
    constructor(nombre, tipo, color){
        this._nombre = nombre;
        this.#tipo = tipo;
        this._color = color;
        this.vida = 100; //propiedad por defecto
    }
    //aqui van todos los metodos que necesite
    tirarPokebola(){
        document.write('<p>Salio de la pokebola, y aperecio un '+this.nombre +' </p>')
    }
    // get y set propiedades computadas
    get color(){
        return this._color;
    }

    set color(nuevoColor){
        if(nuevoColor.length > 0){
            this._color = nuevoColor;
        }
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this._nombre = nuevoNombre;
        }
    }
    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        if(nuevoTipo.length > 0){
            this.#tipo = nuevoTipo;
        }else{
            console.log('el valor asignado de tipo es incorrecto');
        }
    }
}

class PokemonFuego extends Pokemon{
    #ataque;
    #debilidad;
    constructor(nombre, tipo, color, ataque, debilidad){
       super(nombre,tipo,color);//invoco al constructor del padre
       this.#ataque = ataque;
       this.#debilidad = debilidad;
    }
//get y set

//metodos extras
}

// instanciar un prototipo
const pokemonCharmander = new Pokemon('Charmander', 'Fuego', 'Naranja');
const pokemonPlanta = new Pokemon('Bulbasaur', 'Planta', 'Verde');

console.log(pokemonCharmander)
console.log(pokemonPlanta)

pokemonCharmander.tirarPokebola();
pokemonPlanta.tirarPokebola();

pokemonCharmander.color = 'amarillo';
document.write(`<p>Color del pokemon ${pokemonCharmander.nombre} es de color ${pokemonCharmander.color}</p>`)
document.write(`<p>El pokemon ${pokemonCharmander.nombre} es de tipo ${pokemonCharmander.tipo}</p>`)

pokemonCharmander.tipo = 'Electrico';
document.write(`<p>El pokemon ${pokemonCharmander.nombre} es de tipo ${pokemonCharmander.tipo}</p>`)


const charizar = new PokemonFuego('Charizar','Fuego', 'rojo','lanzallamas', 'agua');

console.log(charizar);

charizar.tirarPokebola();
