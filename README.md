# Proyecto E-commerce TP

## Descripción general
Este proyecto consiste en una aplicación web desarrollada con **HTML, CSS y JavaScript puro**, que consume una API para listar productos, permite la visualización detallada de cada producto, la gestión de un carrito de compras con persistencia en `localStorage` y la posibilidad de buscar productos.

---

## Funcionalidades

### 1. Consumo y listado de productos
- Se realiza una consulta a la API para obtener el listado de productos.
- Los productos se muestran en tarjetas (cards) con información básica.
- Se implementa un buscador que permite filtrar los productos por nombre o característica.

### 2. Modal de detalle de producto
- Al seleccionar un producto, se abre un modal que muestra el título, precio y descripción completa.
- El modal puede cerrarse con la ‘X’ o con el botón “Agregar al carrito”.
- Al agregar un producto al carrito, se almacena en `localStorage` y se muestra un mensaje confirmando la acción.

### 3. Carrito de compras
- El carrito se representa con un icono en la barra de navegación.
- Al hacer clic en el icono, se despliega un sidebar con el listado de productos seleccionados.
- Los productos del carrito mantienen persistencia gracias a `localStorage`.

### 4. Sidebar del carrito
- En el sidebar se muestran los productos con su imagen, título, cantidad y precio final.
- Se incluyen botones para:
  - Disminuir cantidad (con botón deshabilitado si cantidad es 1).
  - Aumentar cantidad (habilita el botón para disminuir).
  - Eliminar producto del carrito.
- Cada cambio actualiza el `localStorage` para mantener la persistencia.

### 5. Acciones finales del carrito
- Botón “Finalizar compra” que limpia el carrito, borra el `localStorage` y muestra un mensaje de confirmación.
- Botón “Eliminar todo” que elimina todos los productos y limpia el `localStorage`.

---

## Integrantes y contribuciones

| Nombre Completo      | Funcionalidad desarrollada                          | GitHub Username         |
|---------------------|----------------------------------------------------|------------------------|
| Cuello Pablo Agustin      | Listado de productos, modal de detalle de producto y buscador                      | AgusCuelloIstea |
| Participante 2       | Mensajes al usuario  | [usuario2](https://github.com/usuario2) |
| Participante 3       | Carrito de compras y persistencia en localStorage  | [usuario3](https://github.com/usuario3) |
| Participante 4       | Sidebar del carrito y manejo de cantidades          | [usuario4](https://github.com/usuario4) |
| Participante 5       | Acciones de finalizar compra y eliminar todo        | [usuario5](https://github.com/usuario5) |

---

## Instrucciones para correr el proyecto

1. Clonar el repositorio
2. Abrir el archivo `index.html` directamente en un navegador web moderno
3. Asegurarse de tener conexión a internet para que la API funcione correctamente# TP-Laboratorio-de-aplicaciones-web-cliente
