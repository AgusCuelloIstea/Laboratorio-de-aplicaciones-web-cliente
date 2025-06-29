let modal;
let modalBody;

document.addEventListener("DOMContentLoaded", () => {
  const modalElement = document.getElementById("detalleModal");
  modalBody = document.getElementById("modal-content");

  if (modalElement && modalBody) {
    modal = new bootstrap.Modal(modalElement);
  }
});

window.mostrarDetalleProducto = function (id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((producto) => {
      modalBody.innerHTML = `
        <div class="container">
          <!-- Título y precio -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="mb-0">${producto.title}</h5>
            <h5 class="text-primary mb-0">$${producto.price}</h5>
          </div>

          <!-- Imagen e info -->
          <div class="text-center mb-3">
            <img src="${producto.image}" alt="${producto.title}" class="img-fluid" style="max-height: 300px; object-fit: contain;" />
          </div>

          <div class="mb-4">
            <p class="text-muted">${producto.description}</p>
          </div>

          <!-- Botón de agregar al carrito -->
          <div class="text-center">
            <button class="btn btn-success">
              <i class="bi bi-cart-plus me-1"></i> Agregar al carrito
            </button>
          </div>
        </div>
      `;

      modal.show();
    })
    .catch(() => {
      modalBody.innerHTML = `<p class="text-danger">No se pudo cargar el detalle del producto.</p>`;
    });
};
