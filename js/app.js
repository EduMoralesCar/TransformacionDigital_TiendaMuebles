// ==========================================
// BASE DE DATOS DE 40 PRODUCTOS
// ==========================================
const PRODUCTS_DATA = [
  // Oficina (10)
  { id: 1, nombre: "Mueble Escritorio Funcional", precio: 4000, precioOriginal: 4800, categoria: "oficina", badge: "Nuevo", image: "img/productos/producto1.jpg", desc: "Mueble de alta calidad con dos compartimentos para exhibir y organizar tus objetos." },
  { id: 7, nombre: "Silla Ergonómica Pro", precio: 1800, precioOriginal: 2200, categoria: "oficina", badge: "Hot", image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=600&q=80", desc: "Silla de oficina ajustable con soporte lumbar activo y malla transpirable de alta densidad." },
  { id: 8, nombre: "Escritorio Elevable Eléctrico", precio: 5200, precioOriginal: 6100, categoria: "oficina", badge: "Nuevo", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80", desc: "Escritorio de madera con motor silencioso doble y memoria de altura programable." },
  { id: 9, nombre: "Sillón Ejecutivo de Cuero", precio: 3200, precioOriginal: 3800, categoria: "oficina", badge: "-15%", image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80", desc: "Sillón tapizado en cuero premium italiano con base de aluminio pulido." },
  { id: 10, nombre: "Organizador de Oficina Minimalista", precio: 850, precioOriginal: 1100, categoria: "oficina", badge: "", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80", desc: "Archivador móvil con cajones de cierre suave y ruedas de nylon silenciosas." },
  { id: 11, nombre: "Lámpara de Escritorio LED 3D", precio: 450, precioOriginal: 550, categoria: "oficina", badge: "Nuevo", image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=600&q=80", desc: "Lámpara articulada con control táctil de intensidad y temperatura de color." },
  { id: 12, nombre: "Mesa de Reuniones Escandinava", precio: 7800, precioOriginal: 9200, categoria: "oficina", badge: "Popular", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", desc: "Mesa de juntas fabricada en madera de roble macizo con pasacables integrado." },
  { id: 13, nombre: "Estantería Industrial Acero", precio: 2900, precioOriginal: 3400, categoria: "oficina", badge: "", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=600&q=80", desc: "Librería de diseño industrial con estantes de pino rústico y soportes de acero negro." },
  { id: 14, nombre: "Silla Confidente de Diseño", precio: 950, precioOriginal: 1200, categoria: "oficina", badge: "Nuevo", image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&w=600&q=80", desc: "Silla de recepción con estructura cromada cantilever y asiento tapizado." },
  { id: 15, nombre: "Pizarra Móvil Magnética", precio: 1100, precioOriginal: 1300, categoria: "oficina", badge: "", image: "https://images.unsplash.com/photo-1540317580-149a05813844?auto=format&fit=crop&w=600&q=80", desc: "Pizarra de vidrio templado rotatoria con soporte móvil y frenos." },

  // Hogar (10)
  { id: 2, nombre: "Conjunto Decoración Hogar", precio: 5500, precioOriginal: 6500, categoria: "hogar", badge: "-15%", image: "img/productos/producto2.jpg", desc: "Elegante conjunto de sala: sofá en L, mesa de centro con jarrón y cómoda blanca." },
  { id: 4, nombre: "Conjunto Mesa y Sillas", precio: 1200, precioOriginal: 1500, categoria: "hogar", badge: "Nuevo", image: "img/productos/producto4.jpg", desc: "Mesa redonda blanca con pedestal central y dos sillas con patas de madera." },
  { id: 16, nombre: "Aparador Nórdico de Roble", precio: 4500, precioOriginal: 5200, categoria: "hogar", badge: "Hot", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80", desc: "Mueble buffet con puertas en relieve geométrico y patas de madera maciza." },
  { id: 17, nombre: "Mesa de Comedor Extensible", precio: 6200, precioOriginal: 7300, categoria: "hogar", badge: "Nuevo", image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80", desc: "Mesa de comedor para 6-10 comensales acabada en chapa de nogal americano." },
  { id: 18, nombre: "Juego de Sillas de Comedor (x4)", precio: 3100, precioOriginal: 3700, categoria: "hogar", badge: "Popular", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80", desc: "Cuatro sillas de comedor tapizadas en tela repelente a líquidos con patas metálicas." },
  { id: 19, nombre: "Consola de Entrada Flotante", precio: 1400, precioOriginal: 1800, categoria: "hogar", badge: "", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80", desc: "Consola recibidora minimalista de pared con dos cajones ocultos de apertura push." },
  { id: 20, nombre: "Estantería de Cocina Móvil", precio: 850, precioOriginal: 1050, categoria: "hogar", badge: "", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80", desc: "Carrito auxiliar de cocina en madera y metal con ruedas bloqueables." },
  { id: 21, nombre: "Mueble Zapatero Espejo", precio: 2200, precioOriginal: 2600, categoria: "hogar", badge: "", image: "https://images.unsplash.com/photo-1594040228729-823162a507e8?auto=format&fit=crop&w=600&q=80", desc: "Mueble zapatero vertical con puerta de espejo de cuerpo entero." },
  { id: 22, font: "", nombre: "Espejo de Pared Arco 3D", precio: 980, precioOriginal: 1200, categoria: "hogar", badge: "Nuevo", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80", desc: "Espejo con marco metálico en arco y profundidad visual tridimensional." },
  { id: 23, nombre: "Alfombra Geométrica Premium", precio: 1500, precioOriginal: 1900, categoria: "hogar", badge: "", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80", desc: "Alfombra de pelo corto tejida a mano con patrones tridimensionales en relieve." },

  // Dormitorio (10)
  { id: 5, nombre: "Dormitorio Moderno", precio: 8000, precioOriginal: 9500, categoria: "dormitorio", badge: "-15%", image: "img/productos/producto5.jpg", desc: "Cama con cabecero tapizado, ropa de cama blanca, cortinas gris oscuro y lámpara." },
  { id: 6, nombre: "Dormitorio Minimalista", precio: 7500, precioOriginal: 8800, categoria: "dormitorio", badge: "Popular", image: "img/productos/producto6.jpg", desc: "Cama con cabecero de madera, dos mesitas de noche flotantes y ropa de cama gris." },
  { id: 24, nombre: "Mesita de Noche Flotante", precio: 750, precioOriginal: 900, categoria: "dormitorio", badge: "Nuevo", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80", desc: "Mesita de colgar en pared con cajón y ranura integrada para cables de carga." },
  { id: 25, nombre: "Cómoda de 6 Cajones", precio: 3800, precioOriginal: 4500, categoria: "dormitorio", badge: "Hot", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80", desc: "Cómoda ancha de dormitorio acabada en lacado blanco mate con tiradores de latón." },
  { id: 26, nombre: "Armario de Puertas Correderas", precio: 9500, precioOriginal: 11000, categoria: "dormitorio", badge: "", image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=600&q=80", desc: "Armario ropero empotrado con puertas correderas e interior completamente equipado." },
  { id: 27, nombre: "Tocador con Espejo LED", precio: 4200, precioOriginal: 4900, categoria: "dormitorio", badge: "Nuevo", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80", desc: "Mueble tocador con espejo circular retroiluminado LED de tres tonos." },
  { id: 28, nombre: "Banqueta de Pie de Cama", precio: 1600, precioOriginal: 1950, categoria: "dormitorio", badge: "", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80", desc: "Banqueta tapizada en boucle con patas doradas y cajón de almacenamiento interno." },
  { id: 29, nombre: "Perchero de Pie Nórdico", precio: 680, precioOriginal: 850, categoria: "dormitorio", badge: "", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80", desc: "Colgador exento de madera de bambú con 8 ganchos y estante inferior." },
  { id: 30, nombre: "Colchón Viscoelástico Cloud", precio: 5800, precioOriginal: 6900, categoria: "dormitorio", badge: "Hot", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80", desc: "Colchón ergonómico de 30cm con memoria viscoelástica y gel termorregulador." },
  { id: 31, nombre: "Cabecero de Cama Acanalado", precio: 2200, precioOriginal: 2700, categoria: "dormitorio", badge: "Nuevo", image: "https://images.unsplash.com/photo-1582582621959-a0a27f0f188a?auto=format&fit=crop&w=600&q=80", desc: "Cabecero tapizado de pared con diseño de paneles verticales acanalados." },

  // Sala (10)
  { id: 3, nombre: "Sofá Elegante Gris", precio: 3500, precioOriginal: 4200, categoria: "sala", badge: "Popular", image: "img/productos/producto3.jpg", desc: "Sofá gris de confort premium con dos cojines teal y un cojín decorativo central." },
  { id: 32, nombre: "Sofá Modular de 4 Plazas", precio: 12500, precioOriginal: 14900, categoria: "sala", badge: "Hot", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80", desc: "Sofá modular esquinero tapizado en lino texturizado con chaise longue reversible." },
  { id: 33, nombre: "Butaca Giratoria Bouclé", precio: 2800, precioOriginal: 3300, categoria: "sala", badge: "Nuevo", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80", desc: "Butaca de lectura giratoria 360° tapizada en suave tejido bouclé color crema." },
  { id: 34, nombre: "Mesa de Centro Nido Vidrio", precio: 1950, precioOriginal: 2400, categoria: "sala", badge: "", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80", desc: "Juego de dos mesas de centro redondas apilables con tapas de cristal templado oscuro." },
  { id: 35, nombre: "Mueble TV Flotante Wood", precio: 3900, precioOriginal: 4600, categoria: "sala", badge: "Nuevo", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80", desc: "Bajo de TV suspendido con listones de madera natural y puertas abatibles." },
  { id: 36, nombre: "Aparador Vitrina de Cristal", precio: 4800, precioOriginal: 5600, categoria: "sala", badge: "", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", desc: "Gabinete con puertas de cristal estriado, estantes interiores y luz LED integrada." },
  { id: 37, nombre: "Lámpara de Pie Arco Cromo", precio: 1500, precioOriginal: 1800, categoria: "sala", badge: "", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80", desc: "Elegante lámpara de pie arqueada con pantalla metálica cromada y base de mármol pesado." },
  { id: 38, nombre: "Estantería Modular Cubos", precio: 2400, precioOriginal: 2950, categoria: "sala", badge: "Nuevo", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80", desc: "Librería modular abierta con compartimentos asimétricos de madera." },
  { id: 39, nombre: "Chaise Longue Velvet Azul", precio: 6800, precioOriginal: 7900, categoria: "sala", badge: "Popular", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80", desc: "Diván de descanso clásico tapizado en terciopelo azul marino con patas de madera." },
  { id: 40, nombre: "Mesa Auxiliar de Mármol", precio: 1100, precioOriginal: 1400, categoria: "sala", badge: "", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", desc: "Mesa de esquina compacta con tapa hexagonal de mármol blanco de Carrara." }
];

// ==========================================
// SVGs REALES EN REEMPLAZO DE EMOJIS
// ==========================================
const SVG_ICONS = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  cube: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2"><path d="m21 16-9 5.4-9-5.4V8L12 2.6 21 8z"/><path d="M12 22V12"/><path d="m12 12 8.7-5.2"/><path d="m12 12-8.7-5.2"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-success"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
};

// ==========================================
// RENDERIZADOR DINÁMICO DE PRODUCTOS
// ==========================================
function renderProducts(products, limit = null) {
  const grid = document.getElementById("grid-productos");
  if (!grid) return;

  grid.innerHTML = "";
  const itemsToRender = limit ? products.slice(0, limit) : products;

  if (itemsToRender.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center py-5"><h3 class="text-muted">No se encontraron productos coincidentes.</h3></div>`;
    return;
  }

  itemsToRender.forEach(p => {
    let badgeHtml = "";
    let badgeClass = "badge-hot";
    if (p.badge) {
      if (p.badge.toLowerCase() === "nuevo") badgeClass = "badge-new";
      if (p.badge.includes("%")) badgeClass = "badge-discount";
      badgeHtml = `<span class="product-badge ${badgeClass}">${p.badge}</span>`;
    }

    grid.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12" style="transition: all 0.3s ease;">
        <div class="card tilt-3d" data-categoria="${p.categoria}">
          <div class="card-img-wrapper">
            ${badgeHtml}
            <img class="card-img-top" src="${p.image}" alt="${p.nombre}">
          </div>
          <div class="card-body text-center bg-primary text-white p-5 d-flex flex-column justify-content-between">
            <div class="mb-4">
              <h3 class="fs-2 fw-bold text-white mb-3">${p.nombre}</h3>
              <p class="fs-4 text-light-opacity" style="opacity: 0.8; line-height: 1.6; min-height: 80px;">${p.desc}</p>
            </div>
            <div>
              <div class="mb-4 d-flex justify-content-center align-items-center">
                <span class="price-original">$${p.precioOriginal.toFixed(2)}</span>
                <span class="price-current fs-1 fw-bold">$${p.precio.toFixed(2)}</span>
              </div>
              <div class="product-actions">
                <button class="boton btn btn-success fs-3 fw-bold text-uppercase py-3 agregar-carrito d-flex align-items-center justify-content-center flex-grow-1">
                  ${SVG_ICONS.cart} Agregar
                </button>
                <button class="btn btn-view-3d btn-lg d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#modal3D" data-nombre="${p.nombre}" data-imagen="${p.image}">
                  ${SVG_ICONS.cube} 3D
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Re-inicializar el motor de inclinación 3D en las tarjetas agregadas
  initDynamic3DTilt();
}

// ==========================================
// JS EN LA AREA DE GALERÍA
// ==========================================
const modalImagen = document.getElementById('modal-imagen');

if (modalImagen) {
  modalImagen.addEventListener('show.bs.modal', function (event) {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');

    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.innerHTML = '';

    const imagen = document.createElement('IMG');
    const isBlogSubpage = window.location.pathname.includes('/blog/');
    imagen.src = (isBlogSubpage ? '../' : '') + `img/galeria/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galería';

    contenidoModal.appendChild(imagen);
  });
}

// ==========================================
// JS EN LA AREA DE CONTACTO
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  const form = document.querySelector('.needs-validation');
  if (form) {
    const campos = form.querySelectorAll('input, textarea, select');

    function validarCampo(campo) {
      if (!campo.checkValidity()) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
      } else {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
      }
    }

    campos.forEach(campo => {
      campo.addEventListener('input', () => validarCampo(campo));
      campo.addEventListener('blur', () => validarCampo(campo));
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      campos.forEach(campo => validarCampo(campo));

      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
      } else {
        alert("✅ Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");
        form.reset();
        form.classList.remove('was-validated');
        campos.forEach(campo => {
          campo.classList.remove('is-valid', 'is-invalid');
        });
      }
    }, false);
  }
});

// ==========================================
// JS EN LA AREA DE TIENDA (CARRITO)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  let carrito = [];
  const notificacion = document.getElementById("notificacion-carrito");
  const botonVaciar = document.getElementById("vaciar-carrito");
  const botonCarrito = document.querySelector(".boton-carrito");
  const botonComprar = document.getElementById("comprar-btn");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const seccionProductos = document.querySelector("#productos");

  function actualizarNotificacion() {
    if (!notificacion) return;
    if (carrito.length > 0) {
      notificacion.style.display = "block";
    } else {
      notificacion.style.display = "none";
    }
  }

  function actualizarCarrito() {
    if (!listaCarrito || !totalCarrito) return;
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;

      listaCarrito.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <input type="number" class="form-control cantidad-producto" data-index="${index}" min="1" value="${producto.cantidad}">
            </td>
            <td>$${subtotal.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm eliminar-producto" data-index="${index}">Eliminar</button>
            </td>
        </tr>
      `;
    });

    totalCarrito.innerText = total.toFixed(2);

    document.querySelectorAll(".cantidad-producto").forEach(input => {
      input.addEventListener("change", function () {
        const index = this.dataset.index;
        const nuevaCantidad = parseInt(this.value);
        carrito[index].cantidad = nuevaCantidad;
        actualizarCarrito();
        actualizarNotificacion();
      });
    });

    document.querySelectorAll(".eliminar-producto").forEach(boton => {
      boton.addEventListener("click", function () {
        const index = this.dataset.index;
        carrito.splice(index, 1);
        actualizarCarrito();
        actualizarNotificacion();
      });
    });
  }

  // Delegación de eventos para agregar productos al carrito (soportando renders dinámicos)
  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".agregar-carrito");
    if (!btn) return;

    const card = btn.closest(".card");
    if (!card) return;

    const nombre = card.querySelector("h3").innerText;
    const precioElement = card.querySelector(".price-current");
    if (!precioElement) return;

    const precio = parseFloat(precioElement.innerText.replace("$", "").replace(",", ""));

    const productoExistente = carrito.find(p => p.nombre === nombre);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();
    actualizarNotificacion();
    
    showToast3D("¡Producto Agregado!", `Se añadió "${nombre}" al carrito.`, SVG_ICONS.success);
  });

  if (botonVaciar) {
    botonVaciar.addEventListener("click", function () {
      if (carrito.length === 0) {
        showToast3D("Carrito Vacío", "⚠️ El carrito ya está vacío.", "⚠️");
        return;
      }
      carrito = [];
      actualizarCarrito();
      actualizarNotificacion();
      showToast3D("Carrito Limpio", "El carrito ha sido vaciado.", "🗑️");
    });
  }

  if (botonComprar) {
    botonComprar.addEventListener("click", function () {
      if (carrito.length === 0) {
        showToast3D("Error", "⚠️ Agrega productos antes de comprar.", "❌");
      } else {
        alert("✅ ¡Gracias por tu compra! Tu pedido ha sido procesado correctamente.");
        carrito = [];
        actualizarCarrito();
        actualizarNotificacion();

        listaCarrito.style.opacity = "0";
        setTimeout(() => {
          listaCarrito.innerHTML = "";
          listaCarrito.style.opacity = "1";
        }, 500);
      }
    });
  }

  if (botonCarrito) {
    botonCarrito.style.display = "none";
  }

  function toggleBotonCarrito() {
    if (!seccionProductos || !botonCarrito) return;
    const rect = seccionProductos.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.5) {
      botonCarrito.style.display = "flex";
    } else {
      botonCarrito.style.display = "none";
    }
  }

  if (seccionProductos && botonCarrito) {
    window.addEventListener("scroll", toggleBotonCarrito);
  }

  actualizarCarrito();
  actualizarNotificacion();
});

// ========================================================
// SISTEMA DE TEMAS, TOASTS 3D, BUSCADOR Y FILTROS
// ========================================================
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Inicialización e Inyección del Selector de Tema ---
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.className = 'theme-toggle-btn';
  toggleBtn.setAttribute('aria-label', 'Cambiar Tema');
  toggleBtn.innerHTML = currentTheme === 'dark' ? SVG_ICONS.sun : SVG_ICONS.moon;
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', function () {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'dark';
    if (activeTheme === 'dark') {
      newTheme = 'light';
      toggleBtn.innerHTML = SVG_ICONS.moon;
    } else {
      newTheme = 'dark';
      toggleBtn.innerHTML = SVG_ICONS.sun;
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- 2. Efecto Sticky Encogimiento del Header ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- 3. Renderizar Productos de la Base de Datos ---
  const grid = document.getElementById("grid-productos");
  if (grid) {
    // Si estamos en la página principal, renderizar límite de 6 destacados. Si es la tienda, renderizar los 40.
    const isHomePage = !window.location.pathname.includes('tienda.html');
    renderProducts(PRODUCTS_DATA, isHomePage ? 6 : null);
  }

  // --- 4. Sistema de Búsqueda y Filtrado ---
  const searchInput = document.getElementById('search-products');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function filterProducts() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let activeCategory = 'todos';
    
    filterButtons.forEach(btn => {
      if (btn.classList.contains('active')) {
        activeCategory = btn.getAttribute('data-filter');
      }
    });

    const filtered = PRODUCTS_DATA.filter(p => {
      const titleMatches = p.nombre.toLowerCase().includes(query);
      const categoryMatches = activeCategory === 'todos' || p.categoria === activeCategory;
      return titleMatches && categoryMatches;
    });

    const isHomePage = !window.location.pathname.includes('tienda.html');
    renderProducts(filtered, isHomePage ? 6 : null);
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterProducts();
    });
  });

  // --- 5. Lógica del Visualizador 3D Interactivo (Delegación de Eventos) ---
  const modal3D = document.getElementById('modal3D');
  if (modal3D) {
    const viewerObject = modal3D.querySelector('.viewer-3d-object');
    const viewerImg = modal3D.querySelector('.viewer-3d-object img');
    const title3D = modal3D.querySelector('#modal3DLabel');
    const btnRotLeft = modal3D.querySelector('.rot-left');
    const btnRotRight = modal3D.querySelector('.rot-right');
    const btnZoomIn = modal3D.querySelector('.zoom-in');
    const btnZoomOut = modal3D.querySelector('.zoom-out');
    const btnReset = modal3D.querySelector('.reset-view');

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let rotateX = 10;
    let rotateY = -25;
    let zoom3d = 1.0;
    let autoRotateActive = true;
    let autoRotateInterval;

    // Abrir visor por delegación de clics
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-view-3d');
      if (!btn) return;

      const nombre = btn.getAttribute('data-nombre');
      const img = btn.getAttribute('data-imagen');
      
      if (title3D) title3D.innerText = `Vista 3D - ${nombre}`;
      if (viewerImg) viewerImg.src = img;
      
      rotateX = 10;
      rotateY = -25;
      zoom3d = 1.0;
      update3DTransform();
      startAutoRotate();
    });

    function update3DTransform() {
      if (!viewerObject) return;
      viewerObject.style.setProperty('--rotate-x', `${rotateX}deg`);
      viewerObject.style.setProperty('--rotate-y', `${rotateY}deg`);
      viewerObject.style.setProperty('--zoom-3d', `${zoom3d}`);
    }

    function startAutoRotate() {
      clearInterval(autoRotateInterval);
      if (!autoRotateActive) return;
      autoRotateInterval = setInterval(() => {
        if (!isDragging) {
          rotateY += 0.5;
          update3DTransform();
        }
      }, 16);
    }

    if (viewerObject) {
      viewerObject.addEventListener('mousedown', e => {
        isDragging = true;
        autoRotateActive = false;
        startX = e.clientX;
        startY = e.clientY;
      });

      window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        rotateY += dx * 0.5;
        rotateX = Math.max(-60, Math.min(60, rotateX - dy * 0.5));

        startX = e.clientX;
        startY = e.clientY;
        update3DTransform();
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }

    if (btnRotLeft) {
      btnRotLeft.addEventListener('click', () => {
        autoRotateActive = false;
        rotateY -= 15;
        update3DTransform();
      });
    }
    if (btnRotRight) {
      btnRotRight.addEventListener('click', () => {
        autoRotateActive = false;
        rotateY += 15;
        update3DTransform();
      });
    }
    if (btnZoomIn) {
      btnZoomIn.addEventListener('click', () => {
        zoom3d = Math.min(1.8, zoom3d + 0.1);
        update3DTransform();
      });
    }
    if (btnZoomOut) {
      btnZoomOut.addEventListener('click', () => {
        zoom3d = Math.max(0.6, zoom3d - 0.1);
        update3DTransform();
      });
    }
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        rotateX = 10;
        rotateY = -25;
        zoom3d = 1.0;
        autoRotateActive = true;
        update3DTransform();
        startAutoRotate();
      });
    }

    modal3D.addEventListener('hidden.bs.modal', function () {
      clearInterval(autoRotateInterval);
    });
  }
});

// ==========================================
// MOTOR DE INCLINACIÓN 3D DINÁMICO
// ==========================================
function initDynamic3DTilt() {
  const tiltElements = document.querySelectorAll('.tilt-3d');
  
  tiltElements.forEach(el => {
    // Evitar duplicar el glare
    if (!el.querySelector('.glare-3d')) {
      const glare = document.createElement('div');
      glare.className = 'glare-3d';
      el.classList.add('glare-container');
      el.appendChild(glare);
    }

    // Remover listeners anteriores para evitar duplicados
    const newEl = el.cloneNode(true);
    el.parentNode.replaceChild(newEl, el);

    newEl.addEventListener('mousemove', e => {
      const rect = newEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = x - xc;
      const dy = y - yc;
      
      const rotateX = -(dy / yc) * 12;
      const rotateY = (dx / xc) * 12;
      
      newEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      const glare = newEl.querySelector('.glare-3d');
      if (glare) {
        const pctX = (x / rect.width) * 100;
        const pctY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%)`;
      }
    });

    newEl.addEventListener('mouseleave', () => {
      newEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      const glare = newEl.querySelector('.glare-3d');
      if (glare) {
        glare.style.background = 'transparent';
      }
    });
  });
}

// ==========================================
// TOAST NOTIFICATIONS 3D
// ==========================================
function showToast3D(title, message, iconContent) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container-3d';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-3d';
  toast.innerHTML = `
    <div class="toast-3d-icon d-flex align-items-center justify-content-center">${iconContent}</div>
    <div class="toast-3d-content">
      <h5 class="text-white">${title}</h5>
      <p class="text-muted">${message}</p>
    </div>
  `;
  container.appendChild(toast);

  toast.offsetHeight;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}