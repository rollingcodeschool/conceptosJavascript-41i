/*
switch(opcion){
    case 1:
        todas las lineas de codigo que quiero ejectuar si la opcion del usuario es 1
        break;
    case 2:
        todas las lineas de codigo que quiero ejectuar si la opcion del usuario es 2
        break;
    case 3:
        todas las lineas de codigo que quiero ejectuar si la opcion del usuario es 3
        break;
    case 'navidad':
        todas las lineas de codigo que quiero ejectuar si la opcion del usuario es navidad
        break;
    default:
        todas las lineas de codigo a ejecutar en caso de coincidir con los case
}
*/
// Solicitar al usuario un dia de la semana y ofrecer una opcion de menu completo: plato principal, bebida, postre. (los dias a considerar son lunes, martes, miercoles)

const dia = prompt(
  "Seleccione un dia de la semana: 1-Lunes, 2-Martes, 3-Miercoles"
);

switch (dia) {
  case "1":
    document.write("<h2>Menú del lunes</h2>");
    document.write(`<ul>
        <li>Plato principal: Milanesa con papas</li>
        <li>Bebida: Vino</li>
        <li>Postre: Flan</li>
    </ul>`);
    break;
  case "2":
    document.write("<h2>Menú del martes</h2>");
    document.write(`<ul>
        <li>Plato principal: Pastel de papas</li>
        <li>Bebida: Coca-cola</li>
        <li>Postre: Helado </li>
    </ul>`);
    break;
  case "3":
    document.write("<h2>Menú del miercoles</h2>");
    document.write(`<ul>
        <li>Plato principal: ñoquis</li>
        <li>Bebida: Jugo</li>
        <li>Postre: budin de pan</li>
    </ul>`);
    break;
default:
    document.write('<p>Ingreso una opción invalida</p>')
}
