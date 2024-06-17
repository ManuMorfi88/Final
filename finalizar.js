document.addEventListener('DOMContentLoaded', () => {
    // Obtener los productos almacenados en localStorage
    const productosFinalizar = JSON.parse(localStorage.getItem("productosFinalizar")) || [];
    let totalPiezas = 0;
    let totalPrecio = 0;

    const resumenProductos = document.getElementById('resumen-productos');
    const uniqueProductos = {};

    // Consolidar productos duplicados
    productosFinalizar.forEach(producto => {
        const normalizedNombre = producto.nombrepan.trim().toLowerCase();
        if (uniqueProductos[normalizedNombre]) {
            uniqueProductos[normalizedNombre].cantidad += parseInt(producto.cantidad);
        } else {
            uniqueProductos[normalizedNombre] = {...producto, cantidad: parseInt(producto.cantidad)};
        }
    });

    // Mostrar productos únicos y acumulados
    Object.values(uniqueProductos).forEach(producto => {
        totalPiezas += producto.cantidad;
        totalPrecio += producto.cantidad * parseFloat(producto.preciopan.replace(' MXN', ''));

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-finalizar');

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        productoDiv.appendChild(imagen);

        const nombre = document.createElement('p');
        nombre.textContent = producto.nombrepan;
        productoDiv.appendChild(nombre);

        const cantidad = document.createElement('p');
        cantidad.textContent = `Cantidad: ${producto.cantidad}`;
        productoDiv.appendChild(cantidad);

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.preciopan}`;
        productoDiv.appendChild(precio);

        resumenProductos.appendChild(productoDiv);
    });

    document.getElementById('piezas').innerText = totalPiezas;
    document.getElementById('total').innerText = totalPrecio.toFixed(2);

    // Borrar productos del carrito después de finalizar la compra
    document.getElementById('finalizar').addEventListener('click', () => {
        alert('¡Compra finalizada con éxito!');
        localStorage.removeItem("productosFinalizar");
        localStorage.removeItem("productos"); // Borrar también los productos del carrito
        window.location.href = "inicio.html"; // Redirigir a la página de inicio
    });
});
