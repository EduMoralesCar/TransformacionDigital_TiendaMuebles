// JS en la Area de Galeria
// Obtenemos el elemento del modal con el ID
const modalImagen = document.getElementById('modal-imagen');

if (modalImagen) {
  modalImagen.addEventListener('show.bs.modal', function (event) {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');

    const contenidoModal = document.querySelector('.modal-body');

    // Limpiamos el contenido antes de agregar una nueva imagen
    // para evitar que se acumulen imágenes cada vez que se abre el modal
    contenidoModal.innerHTML = '';

    // Construir una nueva imagen
    const imagen = document.createElement('IMG');
    imagen.src = `img/galeria/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galería';

    // Finalmente insertamos la imagen dentro del modal
    contenidoModal.appendChild(imagen);
  });
}








// JS en la Area de Contacto
document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  const form = document.querySelector('.needs-validation');
  const campos = form.querySelectorAll('input, textarea, select');

  // Validar campo individual en tiempo real
  function validarCampo(campo) {
    if (!campo.checkValidity()) {
      campo.classList.remove('is-valid');
      campo.classList.add('is-invalid');
    } else {
      campo.classList.remove('is-invalid');
      campo.classList.add('is-valid');
    }
  }

  // Aplicar validación en todos los campos cuando escriben o salen del campo
  campos.forEach(campo => {
    campo.addEventListener('input', () => validarCampo(campo));
    campo.addEventListener('blur', () => validarCampo(campo));
  });

  // Validación al enviar el formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío real

    // Validar todos los campos
    campos.forEach(campo => validarCampo(campo));

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      // ✅ Mostrar mensaje
      alert("✅ Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");

      // Limpiar todo
      form.reset();
      form.classList.remove('was-validated');
      campos.forEach(campo => {
        campo.classList.remove('is-valid', 'is-invalid');
      });
    }
  }, false);
});








//  JS en la Area de Tienda
document.addEventListener("DOMContentLoaded", function () {
  let carrito = [];  // El carrito inicia vacío
  const notificacion = document.getElementById("notificacion-carrito");
  const botonesAgregar = document.querySelectorAll(".agregar-carrito");
  const botonVaciar = document.getElementById("vaciar-carrito");
  const botonCarrito = document.querySelector(".boton-carrito");
  const botonComprar = document.getElementById("comprar-btn");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const seccionProductos = document.querySelector("#productos"); // Asegúrate de que esta sección tenga el ID correcto

  // Función para actualizar la notificación del carrito
  function actualizarNotificacion() {
    if (carrito.length > 0) {
      notificacion.style.display = "block"; // Mostrar el punto rojo
    } else {
      notificacion.style.display = "none"; // Ocultar si el carrito está vacío
    }
  }

  // Función para actualizar la lista de productos en el carrito
  function actualizarCarrito() {
    listaCarrito.innerHTML = ""; // Limpiar lista antes de actualizar
    let total = 0;  // Reiniciar total

    carrito.forEach((producto, index) => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;  // Sumar el subtotal al total general

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

    totalCarrito.innerText = total.toFixed(2); // Mostrar total actualizado

    // Evento para cambiar la cantidad de un producto
    document.querySelectorAll(".cantidad-producto").forEach(input => {
      input.addEventListener("change", function () {
        const index = this.dataset.index;
        const nuevaCantidad = parseInt(this.value);
        carrito[index].cantidad = nuevaCantidad;
        actualizarCarrito();
        actualizarNotificacion();
      });
    });

    // Evento para eliminar un producto
    document.querySelectorAll(".eliminar-producto").forEach(boton => {
      boton.addEventListener("click", function () {
        const index = this.dataset.index;
        carrito.splice(index, 1);
        actualizarCarrito();
        actualizarNotificacion();
      });
    });
  }

  // Evento para agregar productos al carrito
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", function () {
      const card = this.closest(".card, .producto");
      const nombre = card.querySelector("h3").innerText;
      const precio = parseFloat(card.querySelector(".fs-1").innerText.replace("$", "").replace(",", ""));

      // Verifica si el producto ya está en el carrito
      const productoExistente = carrito.find(producto => producto.nombre === nombre);

      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }

      actualizarCarrito();
      actualizarNotificacion();
    });
  });

  // Evento para vaciar el carrito
  botonVaciar.addEventListener("click", function () {
    if (carrito.length === 0) {
      alert("⚠️ El carrito ya está vacío.");
      return;
    }

    carrito = [];
    actualizarCarrito();
    actualizarNotificacion();

    alert("🛒 El carrito ha sido vaciado.");
  });

  // Evento para finalizar la compra
  botonComprar.addEventListener("click", function () {
    if (carrito.length === 0) {
      alert("⚠️ El carrito está vacío. Agrega productos antes de comprar.");
    } else {
      alert("✅ ¡Gracias por tu compra! Tu pedido ha sido procesado correctamente.");

      carrito = [];  // Vaciar carrito después de la compra
      actualizarCarrito();
      actualizarNotificacion();  // 🔥 AHORA EL PUNTO ROJO TAMBIÉN DESAPARECE

      listaCarrito.style.opacity = "0";  // Efecto de desvanecimiento
      setTimeout(() => {
        listaCarrito.innerHTML = "";
        listaCarrito.style.opacity = "1";
      }, 500);
    }
  });

  // Ocultar el botón del carrito al inicio
  botonCarrito.style.display = "none";

  // Mostrar el botón cuando el usuario llega a la sección de productos
  function toggleBotonCarrito() {
    const rect = seccionProductos.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.5) {
      botonCarrito.style.display = "flex";
    } else {
      botonCarrito.style.display = "none";
    }
  }

  window.addEventListener("scroll", toggleBotonCarrito);

  // Asegurar que todo esté limpio al cargar la página
  actualizarCarrito();
  actualizarNotificacion();
});