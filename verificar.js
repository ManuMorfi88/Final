
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
        }, 5000);
    }

    // Manejar la finalización de la compra
    document.getElementById('finalizar').addEventListener('click', () => {
        localStorage.removeItem("productos");
        showVerificationModal();
    });
