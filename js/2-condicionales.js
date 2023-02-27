// Estructura if - else

/* 
if(condicion === true){
    ...
}else{
    ...
}
*/

// solicitar la edad del usuario e informar si puede votar
// 68 en adelante es opcional, 16 a 17
// 18 años en adelante hasta 67 inclusive

let edad = parseInt(prompt("Ingrese su edad"));

console.log(edad)
console.log(isNaN(edad))
// si no es un numero = true
//  si es un numero = false
// !(true) = false
// ! false = true

if(!isNaN(edad) === true){
    if ((edad >= 16 && edad < 18) || edad > 67) {
        document.write("Es opcional votar");
      } else if (edad >= 18 && edad <= 67) {
        document.write("Debe votar");
      } else {
        document.write("No puede votar");
      }
}else{
    document.write('Esto no es un numero')
}



