document.addEventListener('DOMContentLoaded', () => {
    // Obtener los productos almacenados en localStorage
    const productosFinalizar = JSON.parse(localStorage.getItem("productosFinalizar")) || [];
    let totalPiezas = 0;
    let totalPrecio = 0;

    const resumenProductos = document.getElementById('resumen-productos');
    productosFinalizar.forEach(producto => {
        totalPiezas += parseInt(producto.cantidad);
        totalPrecio += parseInt(producto.cantidad) * parseFloat(producto.preciopan.replace(' MXN', ''));

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
        localStorage.removeItem("productosFinalizar");
        localStorage.removeItem("productos"); // Agregar esta línea para borrar los productos del carrito también
        alert('Compra finalizada');
    });
});
