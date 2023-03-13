// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

do{
    let dni = parseInt(prompt("Ingrese un dni entre 0 y 99999999"));
    //validar el numero de dni
    
    //calcular el resto de % 23
    let resultado = dni % 23;
    let letra='';
    console.log(resultado);
    
    switch (resultado) {
      case 0:
        letra = "T";
        break;
      case 1:
        letra = "R";
        break;
      case 2:
        letra = "W";
        break;
      case 3:
        letra = "A";
        break;
      case 4:
        letra = "G";
        break;
      case 5:
        letra = "M";
        break;
      case 6:
        letra = "Y";
        break;
      case 7:
        letra = "F";
        break;
      case 8:
        letra = "P";
        break;
      case 9:
        letra = "D";
        break;
      case 10:
        letra = "X";
        break;
      case 11:
        letra = "B";
        break;
      case 12:
        letra = "N";
        break;
      case 13:
        letra = "J";
        break;
      case 14:
        letra = "Z";
        break;
      case 15:
        letra = "S";
        break;
      case 16:
        letra = "Q";
        break;
      case 17:
        letra = "V";
        break;
      case 18:
        letra = "H";
        break;
      case 19:
        letra = "L";
        break;
      case 20:
        letra = "C";
        break;
      case 21:
        letra = "K";
        break;
      case 22:
        letra = "E";
        break;
      default:
        letra ='valor fuera del rango';
    }
    
    alert(`El numero ingresado ${dni}, obtuvo la letra: ${letra}`)
}while(confirm('¿Desea repetir el proceso?'))
