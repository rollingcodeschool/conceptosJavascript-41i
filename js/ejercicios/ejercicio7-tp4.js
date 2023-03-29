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
        return this.#nombre;
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }
    get telefono(){
        return this.#telefono;
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
        return this._contactos;
    }

    set contactos(nuevoContacto){
        this._contactos.push(nuevoContacto)
      
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(nuevoTamanio){
        this._tamanio = nuevoTamanio
    }
    aniadirContacto(contactoNuevo){
        // verificar si el contactoNuevo ya existe en la agenda

        //si la agenda tiene espacio disponible
        if(!this.agendaLlena()){
            this.contactos = contactoNuevo
            console.log(this.contactos)
        }
    }

    agendaLlena(){
        if(this.contactos.length === this.tamanio){
            console.log('agenda llena');
            return true;
        }else{
            console.log('la agenda tiene espacio ');
            return false;
        }
    }
    // aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.
}

let agendaNueva = new Agenda();
console.log(agendaNueva);
do{
    const opcion = prompt(`Seleccione una de las siguientes opciones:
    1- Añadir un contacto
    2- Verificar si existe un contacto
    3- Listar los contactos
    4- Buscar un contacto
    5- Eliminar un contacto
    6- Verificar si la agenda esta llena
    7- Verificar espacios disponibles en la agenda
    8- Modificar el tamaño de la agenda`);
    
    switch(opcion){
        case '1':
            let nombre = prompt('Ingrese un nombre');
            let telefono = prompt('Ingrese un telefono');
            let contactoNuevo = new Contacto(nombre,telefono);
            agendaNueva.aniadirContacto(contactoNuevo);
            break;
        case '2':
            console.log('Verificar si existe un contacto');
            break;
        case '3':
            console.log('1- Añadir un contacto');
            break;
        case '4':
            console.log('1- Añadir un contacto');
            break;
        case '5':
            console.log('1- Añadir un contacto');
            break;
        case '6':
            console.log('1- Añadir un contacto');
            break;
        case '7':
            console.log('1- Añadir un contacto');
            break;
        case '8':
            console.log('1- Añadir un contacto');
            break;
        default:
            alert('Ingresaste una opcion incorrecta')
    
    }
}while(confirm('¿Desea realizar otra operacion?'))






