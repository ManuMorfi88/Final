    document.getElementById('finalizar').addEventListener('click', function(event) {
        event.preventDefault();
        const calle = document.getElementById('calle').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const colonia = document.getElementById('colonia').value.trim();
        const referencias = document.getElementById('referencias').value.trim();

        if (!calle || !numero || !colonia) {
            alert('Por favor, complete todos los campos requeridos: calle, número, colonia.');
            return;
        }

        const modal = document.getElementById('verificationModal');
        const spinner = document.getElementById('spinner');
        const successIcon = document.getElementById('successIcon');
        const modalText = document.getElementById('modalText');

        spinner.style.display = 'block';
        successIcon.style.display = 'none';
        modalText.textContent = 'Procesando compra...';
        modal.style.display = 'block';

        setTimeout(() => {
            spinner.style.display = 'none';
            successIcon.style.display = 'block';
            modalText.textContent = 'Compra completada con éxito';
            
            // Aquí puedes agregar la lógica para enviar el formulario si todo está correcto
            document.getElementById('formDireccion').submit();
        }, 3000); // Simula 3 segundos de carga
    });

    // Para cerrar el modal al hacer clic en cualquier lugar fuera de él
    window.onclick = function(event) {
        const modal = document.getElementById('verificationModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
