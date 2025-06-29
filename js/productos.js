document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos");

  if (!contenedor) return;

  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(productos => {
      productos.forEach(producto => {
        const card = document.createElement("div");
        card.className = "col-sm-6 col-md-4 col-lg-3";

        card.innerHTML = `
          <div class="card h-100 card-hover" style="cursor: pointer;">
            <img src="${producto.image}" class="card-img-top p-3" alt="${producto.title}" style="height: 200px; object-fit: contain;">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title fw-light">${producto.title}</h5>
              <strong class="mb-2">$${producto.price}</strong>
            </div>
          </div>
        `;

        const cardElement = card.querySelector(".card");
        cardElement.addEventListener("click", () => {
          if (typeof window.mostrarDetalleProducto === "function") {
            window.mostrarDetalleProducto(producto.id);
          } else {
            console.warn("mostrarDetalleProducto no está definida.");
          }
        });

        contenedor.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error al cargar productos:", error);
      contenedor.innerHTML = `<p class="text-danger">Error al cargar los productos.</p>`;
    });
});
