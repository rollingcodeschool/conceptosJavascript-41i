// Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

class Contacto{
    #nombre;
    #telefono;
    constructor(nombre, telefono){
        this.#nombre = nombre;
        this.#telefono = telefono;
    }

    get nombre(){
        this.#nombre;
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }
    get telefono(){
        this.#telefono;
    }

    set telefono(nuevoTelefono){
        this.#telefono = nuevoTelefono
    }

    //metodos
}

class Agenda{
    constructor(tamanio = 10){
       this._contactos = [];  
       this._tamanio = tamanio;
    }

    get contactos(){
        this._contactos;
    }

    set contactos(nuevoContacto){
        this._contactos.push(nuevoContacto)
    }

    get tamanio(){
        this._tamanio;
    }

    set tamanio(nuevoTamanio){
        this._tamanio = nuevoTamanio
    }
    
    // aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

}