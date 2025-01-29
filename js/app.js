// JAVA SCRIPT EN LA GALERIA
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








// JAVA SCRIPT EN LA CONTACTO
// Validad con Bootsrap y Java Script en el formulario de Contacto en Linea
document.addEventListener("DOMContentLoaded", function () {
  'use strict';                                                 // modo estricto para evitar errores comunes

  // Seleccionamos el formulario
  const form = document.querySelector('.needs-validation');
  const inputAsunto = document.getElementById('asunto');

  // Validación dinámica del campo "Asunto"
  inputAsunto.addEventListener('input', function () {
    if (inputAsunto.value.trim() !== '') {                      // Verificamos si el campo tiene contenido
      inputAsunto.classList.remove('is-invalid');               // Quitamos la clase de error
      inputAsunto.classList.add('is-valid');                    // Agregamos la clase de éxito
    } else {
      inputAsunto.classList.remove('is-valid');                 // Quitamos la clase de éxito si estaba
      inputAsunto.classList.add('is-invalid');                  // Agregamos la clase de error
    }
  });

  // Validación general del formulario
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {                                // Si el formulario no es válido, evitamos que se envíe
      event.preventDefault();                                   // Evita que el formulario se envíe
      event.stopPropagation();                                  // Evita que el evento de submit se propague
    } else {
      event.preventDefault();                                   // Evita el envío real (quítalo si deseas enviarlo a un servidor)

      // ✅ Mensaje de éxito al usuario
      alert("✅ Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");

      // Opcional: Restablecer el formulario después del envío exitoso
      form.reset();

      // Eliminar las clases de validación para que el formulario vuelva a su estado inicial
      form.classList.remove('was-validated');
      form.querySelectorAll('.is-valid, .is-invalid').forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
      });
    }

    // Agregamos la clase "was-validated" para que Bootstrap muestre los mensajes de validación
    form.classList.add('was-validated');
  }, false);
});








// JAVA SCRIPT EN LA TIENDA
// Esperar a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  let carrito = [];                                                                              // Array para almacenar los productos agregados al carrito

  // Agregar productos al carrito
  document.querySelectorAll(".agregar-carrito").forEach(boton => {
    boton.addEventListener("click", function () {
      const card = this.closest(".card, .producto");                                             // Encuentra el contenedor más cercano del producto 
      const nombre = card.querySelector("h3").innerText;                                         // Obtiene el nombre y el precio del producto desde la tarjeta
      const precio = parseFloat(card.querySelector(".fs-1").innerText.replace("$", "").replace(",", ""));

      // Verifica si el producto ya está en el carrito
      const productoExistente = carrito.find(producto => producto.nombre === nombre);

      if (productoExistente) {
        productoExistente.cantidad += 1;                                                           // Si el producto ya está en el carrito, aumenta la cantidad
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });                                             // Si no está en el carrito, lo agrega con cantidad inicial 1
      }

      actualizarCarrito();
    });
  });

  // Función para actualizar la tabla del carrito
  function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");                                 // Cuerpo de la tabla del carrito
    const totalCarrito = document.getElementById("total-carrito");                                 // Elemento donde se mostrará el total

    // Vacía la tabla antes de actualizarla
    listaCarrito.innerHTML = "";
    let total = 0;                                                                                  // Variable para calcular el total de la compra

    carrito.forEach(producto => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;                                                                            // Suma el subtotal al total general

      // Agrega una fila a la tabla con la información del producto
      listaCarrito.innerHTML += `
              <tr>
                  <td>${producto.nombre}</td>
                  <td>$${producto.precio.toFixed(2)}</td>
                  <td>
                      <input type="number" class="form-control cantidad-producto" data-nombre="${producto.nombre}" min="1" value="${producto.cantidad}">
                  </td>
                  <td>$${subtotal.toFixed(2)}</td>
                  <td>
                      <button class="btn btn-danger btn-sm eliminar-producto" data-nombre="${producto.nombre}">Eliminar</button>
                  </td>
              </tr>
          `;
    });

    // Muestra el total actualizado
    totalCarrito.innerText = total.toFixed(2);

    // Agrega eventos para actualizar la cantidad de productos en el carrito
    document.querySelectorAll(".cantidad-producto").forEach(input => {
      input.addEventListener("change", function () {
        const nombre = this.dataset.nombre;                                                         // Obtiene el nombre del producto desde el atributo data
        const nuevoValor = parseInt(this.value);                                                    // Obtiene la nueva cantidad ingresada

        // Busca el producto en el carrito y actualiza la cantidad
        const producto = carrito.find(prod => prod.nombre === nombre);
        if (producto) {
          producto.cantidad = nuevoValor;
          actualizarCarrito();                                                                       // Vuelve a actualizar la tabla
        }
      });
    });

    // Eliminar producto del carrito
    document.querySelectorAll(".eliminar-producto").forEach(boton => {
      boton.addEventListener("click", function () {
        const nombre = this.dataset.nombre;                                                            // Obtiene el nombre del producto a eliminar
        carrito = carrito.filter(prod => prod.nombre !== nombre);                                      // Filtra el carrito para eliminar el producto seleccionado   
        actualizarCarrito();
      });
    });
  }

  // Evento para finalizar la compra

  document.getElementById("comprar-btn").addEventListener("click", function () {
    if (carrito.length === 0) {
      alert("⚠️ El carrito está vacío. Agrega productos antes de comprar.");
    } else {
      // ✅ Mensaje de éxito
      alert("✅ ¡Gracias por tu compra! Tu pedido ha sido procesado correctamente.");

      // Efecto de desvanecimiento antes de vaciar el carrito
      const listaCarrito = document.getElementById("lista-carrito");
      listaCarrito.style.transition = "opacity 0.5s";
      listaCarrito.style.opacity = "0";                                                                 // Desvanece la lista antes de vaciar el carrito

      setTimeout(() => {
        carrito = [];                                                                                   // Vacía el carrito después de la compra
        actualizarCarrito();                                                                            // Actualiza la tabla

        // Restablecer la opacidad para futuras compras
        listaCarrito.style.opacity = "1";
      }, 500);                                                                                          // Espera 0.5 segundos para dar tiempo a la animación
    }
  });
});