document.addEventListener('DOMContentLoaded', () => {
    // Obtener los productos almacenados en localStorage
    const productosFinalizar = JSON.parse(localStorage.getItem("productos")) || [];
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

    // Función para mostrar el modal de verificación
    function showVerificationModal() {
        const modal = document.getElementById('verificationModal');
        const spinner = document.getElementById('spinner');
        const successIcon = document.getElementById('successIcon');
        const modalText = document.getElementById('modalText');

        modal.style.display = "block";

        // Simular un retraso de 3 segundos para la verificación
        setTimeout(() => {
            spinner.style.display = "none";
            successIcon.style.display = "block";
            modalText.innerText = "¡Compra finalizada con éxito!";

            // Redirigir a la página de inicio después de 2 segundos
            setTimeout(() => {
                window.location.href = "inicio.php";
            }, 2000);
        }, 3000);
    }

    // Manejar la finalización de la compra
    document.getElementById('finalizar').addEventListener('click', () => {
        localStorage.removeItem("productos");
        showVerificationModal();
    });
});
