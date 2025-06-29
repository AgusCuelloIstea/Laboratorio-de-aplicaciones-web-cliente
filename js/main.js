document.addEventListener("DOMContentLoaded", () => {
  const contenedorInicio = document.getElementById("productos-inicio");

  if (contenedorInicio) {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productos) => {
        productos.slice(0, 4).forEach((producto) => {
          const div = document.createElement("div");
          div.className = "col-sm-6 col-md-4 col-lg-3";

          div.innerHTML = `
            <div class="card h-100 card-hover" style="cursor: pointer;">
              <img src="${producto.image}" class="card-img-top p-3" alt="${producto.title}" style="height: 200px; object-fit: contain;">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title fw-light">${producto.title}</h5>
                <strong class="mb-2">$${producto.price}</strong>
              </div>
            </div>
          `;

          const card = div.querySelector(".card");
          card.addEventListener("click", () => {
            window.mostrarDetalleProducto(producto.id);
          });

          contenedorInicio.appendChild(div);
        });
      })
      .catch((error) => {
        console.error("Error al cargar productos en inicio:", error);
        contenedorInicio.innerHTML = `<p class="text-danger">No se pudieron cargar los productos.</p>`;
      });
  }
});
