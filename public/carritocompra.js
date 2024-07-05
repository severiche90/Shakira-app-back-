// Obtener los productos del carrito
const carritoProductos = document.querySelector('.carrito-productos');

// Obtener el botón de confirmar compra
const confirmarCompra = document.querySelector('.confirmar-compra');

// Obtener el total del carrito
const total = document.querySelector('.total');

// Función para eliminar un producto del carrito
function eliminarProducto(event) {
    const producto = event.target.parentNode;
    producto.remove();
    calcularTotal();
}

// Función para calcular el total del carrito
function calcularTotal() {
    let total = 0;
    carritoProductos.querySelectorAll('.carrito-producto').forEach((producto) => {
        const precio = producto.querySelector('.precio').textContent;
        total += parseFloat(precio.replace('$', ''));
    });
    document.querySelector('.total').textContent = `Total: $${total.toFixed(2)}`;
}

// Agregar evento a los botones de eliminar producto
carritoProductos.querySelectorAll('.eliminar-producto').forEach((boton) => {
    boton.addEventListener('click', eliminarProducto);
});

// Agregar evento al botón de confirmar compra
confirmarCompra.addEventListener('click', () => {
    alert('Compra exitosa!');
    // Aquí puedes agregar la lógica para procesar la compra
});

// Calcular el total del carrito al cargar la página
calcularTotal();