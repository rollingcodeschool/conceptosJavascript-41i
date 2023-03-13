// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let frase = prompt('Ingrese una frase').toLowerCase(); ;
// 'hola mundo'
// frase

for(let i=0; i< frase.length; i++){
    // es una vocal?
    if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u' ){
        document.write(`Vocal ${frase.charAt(i)} esta en la posicion ${i}`)
        // i = frase.length;
        break;
    }
}

