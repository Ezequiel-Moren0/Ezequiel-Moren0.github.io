// Carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    console.log(carrito); // Para depuración
}



// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    const carritoContenido = document.getElementById('carritoContenido');
    carritoContenido.innerHTML = ''; // Limpiar contenido previo
    let total = 0;

    // Crear lista de productos en el carrito
    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button class="eliminar-btn" onclick="eliminarDelCarrito(${index})">🗑️</button>
        `;
        carritoContenido.appendChild(item);
        total += producto.precio;
    });

    // Mostrar el total
    const totalElement = document.createElement('div');
    totalElement.innerHTML = `<strong>Total: $${total}</strong>`;
    carritoContenido.appendChild(totalElement);

    // Mostrar la ventana emergente
    document.getElementById('carritoPopup').style.display = 'block';
}

// Función para cerrar la ventana emergente sin vaciar el carrito
function cerrarCarritoPopup() {
    document.getElementById('carritoPopup').style.display = 'none';
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar el elemento del array
    mostrarCarrito(); // Actualizar la vista del carrito
}

// Función para realizar la compra
function realizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    alert('¡Compra realizada!');
    carrito = []; // Vaciar el carrito
    cerrarCarritoPopup();
}


