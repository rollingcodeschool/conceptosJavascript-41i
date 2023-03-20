let productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "Protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial",
  ];

  function mostrarProductos(titulo = 'No hay un titulo disponible', arreglo) {
    document.write(`<h2>${titulo}</h2>`);
    document.write("<ul>");
    // for (let indiceSeries = 0; indiceSeries < arreglo.length; indiceSeries++) {
    //   document.write(`<li>${arreglo[indiceSeries]}</li>`);
    // }
    // forEach alternativa al for tradicional
    // arreglo.forEach( producto =>{ document.write(`<li>${producto}</li>`);});
    // map es inmutable
    arreglo.map(producto=> document.write(`<li>${producto}</li>`));
    document.write("</ul>");
  }

  mostrarProductos('Lista de productos', productos);

  //filtrar todos los protectores solares del array
  let protectoresSolares = productos.filter(producto => producto.includes('Protector'));

  mostrarProductos('Lista de protectores solares', protectoresSolares);

  //buscar un elemento en arreglo, el primero que cumpla la condicion 
//   let existeSerum = productos.find( producto => { return producto.includes('Sérum')});
  let existeSerum = productos.find( producto => producto.includes('Sérum'));

  document.write(`Serum encontrado: ${existeSerum}`)