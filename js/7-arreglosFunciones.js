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

  function mostrarSeries(titulo = 'No hay un titulo disponible', arreglo) {
    document.write(`<h2>${titulo}</h2>`);
    document.write("<ul>");
    for (let indiceSeries = 0; indiceSeries < arreglo.length; indiceSeries++) {
      document.write(`<li>${arreglo[indiceSeries]}</li>`);
    }
    document.write("</ul>");
  }

  mostrarSeries('Lista de productos', productos);