const productContainer = document.querySelector("#lista-productos");

// Función para cargar los productos desde el servidor
async function cargarProductos() {
  try {
    const response = await fetch("/api/productos");
    const productos = await response.json();

    // Generar el HTML para cada producto y agregarlo al contenedor
    let productHtml = "";
    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      productHtml += `
      <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="add('${producto.nombre}', ${producto.precio})">Añadir</button>
              </div>
              <small class="text-muted">$${producto.precio.toLocaleString('es-CL')}</small>
            </div>
          </div>
        </div>
      </div>
 `;

    }
    productContainer.innerHTML = productHtml;
  } catch (error) {
    console.error(error);
    alert("Error al cargar los productos");
  }
}

cargarProductos();

let productos = [];
let total = 0;

function add(producto, precio) {
  // Reemplazar la coma con un punto y convertir el precio a un número
  const precioString = precio.toString();
  const numeroPrecio = parseFloat(precioString.replace(',', '.'));
  productos.push(producto);
  total += numeroPrecio;
  // Formatear el total como una cadena de texto con un punto como separador de miles
  const formatearTotal = `$${total.toLocaleString('es-CL', { minimumFractionDigits: 0, useGrouping: true })}`;
  document.querySelector("#checkout").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg> ${formatearTotal}`;
}

function pagar() {
  window.alert(productos.join(", \n"));
}
