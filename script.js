const carta = [
  {
    seccion: "Pequeños placeres de Casa Juan",
    items: [
      { nombre: "Tosta de atún trufada con mahonesa de soja", precio: 9.00 },
      { nombre: "Tacos mexicanos de atún con verduras al teriyaki y piñones", precio: 7.50 },
      { nombre: "Croissant de alga relleno de atún picante, guacamole y filamentos de chile", precio: 10.00 },
      { nombre: "Brioche de atún encebollado con huevos de codorniz", precio: 5.00 }
    ]
  },
  {
    seccion: "De la huerta",
    items: [
      { nombre: "Ensalada de tomate de temporada, queso y ventresca de atún", precio: 17.50 },
      { nombre: "Cogollos, aguacate a la brasa, queso feta, cangrejo frito y pesto", precio: 19.50 },
      { nombre: "Ensalada de pulpo frito, aguacate, mango y salsa casera", precio: 17.50 },
      { nombre: "Nuestro salpicón de bogavante", precio: 29.00 }
    ]
  },
  {
    seccion: "Fritos",
    items: [
      { nombre: "Boquerones fritos abiertos al limón", precio: 14.00 },
      { nombre: "Calamar frito con alioli negro", precio: 19.00 },
      { nombre: "Croquetas de gambón, lámina de panceta y ajos confitados (4 und)", precio: 8.00 },
      { nombre: "Croquetas de gambón, lámina de panceta y ajos confitados (6 und)", precio: 12.00 },
      { nombre: "Gambas de cristal fritas, huevo frito, cremoso de patata picante y trufa", precio: 19.00 },
      { nombre: "Rejitos de pulpo frito, maho de hummus, mostaza y ensalada de aguacate", precio: 24.00 }
    ]
  },
  {
    seccion: "Para compartir y no discutir",
    items: [
      { nombre: "Anchoas de Santoña en aove (6 und)", precio: 18.50 },
      { nombre: "Tabla de quesos artesanos", precio: 20.00 },
      { nombre: "Ensaladilla de gambas, mahonesa de su coral, migas de hueva de maruca y crujiente de camarones (1/2)", precio: 9.50 },
      { nombre: "Ensaladilla de gambas (entera)", precio: 14.00 },
      { nombre: "Parrillada de verduras de temporada, mojama de atún y queso azul", precio: 19.00 },
      { nombre: "Almejas fina gallega al fino o a la marinera", precio: 24.00 },
      { nombre: "Albóndigas de langostinos en salsa de piñones y ajos fritos con juliana de verduras (5 und)", precio: 11.00 },
      { nombre: "Albóndigas de langostinos (8 und)", precio: 18.00 },
      { nombre: "Carabineros al ajillo con huevos y patatas fritas", precio: 30.00 },
      { nombre: "Pan de cristal de picaña de vaca madurada, picada de apio con piñones tostados y trufa", precio: 15.00 },
      { nombre: "Steak tartar de solomillo de vaca sobre tuétano a la brasa", precio: 23.00 }
    ]
  },
  {
    seccion: "Al rojo atún",
    items: [
      { nombre: "Tartar de atún rojo trufado o picante", precio: 25.00 },
      { nombre: "Dados de atún marinado, ajoblanco de mango y picatoste de algas", precio: 26.00 },
      { nombre: "Carpaccio de toro con toques cítricos", precio: 28.00 },
      { nombre: "Tarantelo de atún rojo a la parrilla con cuscus de verdura y compota de tomate verde", precio: 24.50 },
      { nombre: "Costillas de atún rojo al josper con salsa barbacoa y patatas", precio: 20.00 },
      { nombre: "Contramormo de atún rojo glaseado con parmentier de patata", precio: 28.50 },
      { nombre: "Estofado de carrillada de atún al estilo “toro” con zanahorias encominá", precio: 22.50 },
      { nombre: "Mormo de atún rojo en salsa de curry verde", precio: 25.00 },
      { nombre: "Solomillo de atún rojo, crema de calabaza y naranja, glaseado japo y ajo asado", precio: 25.00 }
    ]
  },
  {
    seccion: "Arroces",
    items: [
      { nombre: "Arroz negro con chocos de trasmallo (mínimo 2 personas)", precio: 24.00 },
      { nombre: "Nuestro arroz con carabineros (mínimo 2 personas)", precio: 35.00 }
    ]
  },
  {
    seccion: "Pescados",
    items: [
      { nombre: "Calamar al oloroso con sus patatas confitadas (300-400 gr aprox.)", precio: 26.00 },
      { nombre: "Lomo de lubina despinada, crema de ajo negro y puerro confitado", precio: 24.50 },
      { nombre: "Bacalao confitado en roner, pil pil de guisantes y su brandada", precio: 26.00 }
    ]
  },
  {
    seccion: "Carnes",
    items: [
      { nombre: "Codillo de cerdo deshuesado con boletus y foie a la brasa", precio: 20.00 },
      { nombre: "Presa ibérica a la parrilla con patatas y pimientos del padrón fritos", precio: 21.00 },
      { nombre: "Pluma ibérica a baja temperatura, cremoso de trufa y setas salteadas", precio: 23.50 },
      { nombre: "Solomillo de vaca simmental, glaseado de carne, foie y patatas", precio: 28.00 }
    ]
  },
  {
    seccion: "Postres",
    items: [
      { nombre: "Sorbete cremoso de limón", precio: 5.00 },
      { nombre: "Maracuyá, coco y cítrico", precio: 7.00 },
      { nombre: "Sopa de chocolate blanco y lima, bizcocho de cacao y helado de naranja", precio: 7.00 },
      { nombre: "Tarta de queso al horno y peras", precio: 7.00 },
      { nombre: "Tocino de cielo con merengue tostado y helado de yogurt con lima", precio: 6.00 },
      { nombre: "Chocolate en texturas con toffe salado", precio: 7.50 },
      { nombre: "Milhojas de pistachos, vainilla y kumkuat", precio: 7.50 }
    ]
  }
];

let pedido = [];

function mostrarSeccion(nombreSeccion) {
  const inicioDiv = document.getElementById("inicio");
  const contenidoDiv = document.getElementById("contenido");
  
  if (nombreSeccion === "inicio") {
    inicioDiv.style.display = "flex";
    contenidoDiv.innerHTML = "";
    return;
  }

  inicioDiv.style.display = "none";
  contenidoDiv.innerHTML = "";

  const btnAtras = document.createElement("button");
  btnAtras.textContent = "← Atrás";
  btnAtras.style.marginBottom = "10px";
  btnAtras.style.padding = "5px 10px";
  btnAtras.style.fontSize = "0.9em";
  btnAtras.style.cursor = "pointer";
  btnAtras.onclick = () => mostrarSeccion("inicio");

  contenidoDiv.appendChild(btnAtras);

  carta.forEach(seccion => {
    if (seccion.seccion === nombreSeccion || nombreSeccion === "carta") {
      const seccionDiv = document.createElement("div");
      seccionDiv.classList.add("seccion");

      const titulo = document.createElement("h2");
      titulo.textContent = seccion.seccion;
      seccionDiv.appendChild(titulo);

      seccion.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        itemDiv.innerHTML = `
          <span>${item.nombre} - €${item.precio.toFixed(2)}</span>
          <button onclick="agregarPedido('${item.nombre}', ${item.precio})">Añadir</button>
        `;

        seccionDiv.appendChild(itemDiv);
      });

      contenidoDiv.appendChild(seccionDiv);
    }
  });
}

function agregarPedido(nombre, precio) {
  const itemExistente = pedido.find(item => item.nombre === nombre);
  
  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    pedido.push({ nombre, precio, cantidad: 1 });
  }
  actualizarPedido();
}

function actualizarPedido() {
  const pedidoUl = document.getElementById("pedidoItems");
  pedidoUl.innerHTML = "";
  let total = 0;

  pedido.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} (x${item.cantidad}) - €${(item.precio * item.cantidad).toFixed(2)}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
      pedido.splice(index, 1);
      actualizarPedido();
    };

    li.appendChild(btnEliminar);
    pedidoUl.appendChild(li);
    total += item.precio * item.cantidad;
  });

  document.getElementById("total").textContent = total.toFixed(2);

  // Guardar en localStorage
  localStorage.setItem("pedido", JSON.stringify(pedido));
}

// Recuperar al cargar
window.onload = () => {
  const pedidoGuardado = localStorage.getItem("pedido");
  if (pedidoGuardado) {
    pedido = JSON.parse(pedidoGuardado);
    actualizarPedido();
  }
};

function buscarPlato() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const nombre = item.textContent.toLowerCase();
    item.style.display = nombre.includes(texto) ? "flex" : "none";
  });
}

function pagar() {
  alert(`Total a pagar: €${document.getElementById("total").textContent}`);
  pedido = [];
  actualizarPedido();
}
