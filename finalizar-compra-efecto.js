document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('finalizar').addEventListener('click', () => {
        // Mostrar modal
        const modal = document.getElementById('verification-modal');
        const spinner = modal.querySelector('.spinner');
        const checkmark = modal.querySelector('.checkmark');

        modal.classList.remove('hidden');

        // Simular carga y mostrar verificación
        setTimeout(() => {
            spinner.classList.add('hidden');
            checkmark.classList.remove('hidden');
        }, 2000); // 2 segundos de carga

        // Redirigir después de la verificación
        setTimeout(() => {
            window.location.href = 'inicio.html';
        }, 4000); // 4 segundos total

        // Borrar productos del carrito después de finalizar la compra
        localStorage.removeItem("productos");
    });
});
