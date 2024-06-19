// verificar.js

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

// Función para validar los datos de la dirección
function validarDatosDireccion() {
    const calle = document.getElementById('calle').value;
    const numero = document.getElementById('numero').value;
    const colonia = document.getElementById('colonia').value;
    const referencias = document.getElementById('referencias').value;

    if (calle === "" || numero === "" || colonia === "" || referencias === "") {
        alert("Por favor, complete todos los campos de la dirección.");
        return false;
    }
    return true;
}

// Manejar la finalización de la compra
document.getElementById('finalizar').addEventListener('click', (event) => {
    event.preventDefault();

    if (!validarDatosDireccion()) {
        return; // Si los datos de la dirección no son válidos, no proceder
    }

    // Obtener valores de los campos de dirección y método de pago
    const calle = document.getElementById('calle').value;
    const numero = document.getElementById('numero').value;
    const colonia = document.getElementById('colonia').value;
    const referencias = document.getElementById('referencias').value;
    const productos = JSON.stringify(JSON.parse(localStorage.getItem("productosFinalizar")) || []);
    const piezas = parseInt(document.getElementById('piezas').innerText, 10);
    const total = parseFloat(document.getElementById('total').innerText);

    // Asignar valores a los campos ocultos del formulario
    document.getElementById('hiddenCalle').value = calle;
    document.getElementById('hiddenNumero').value = numero;
    document.getElementById('hiddenColonia').value = colonia;
    document.getElementById('hiddenReferencias').value = referencias;
    document.getElementById('hiddenPiezas').value = piezas;
    document.getElementById('hiddenTotal').value = total;
    document.getElementById('hiddenProductos').value = productos;

    // Mostrar el modal de verificación
    showVerificationModal();

    // Enviar el formulario después de un pequeño retraso para mostrar la animación
    setTimeout(() => {
        document.getElementById('finalizarCompraForm').submit();
    }, 3000);
});
