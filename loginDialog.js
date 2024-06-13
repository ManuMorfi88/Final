document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('entrar').addEventListener('click', function() {
        // Crear el contenedor del cuadro de diálogo
        const dialogContainer = document.createElement('div');
        dialogContainer.style.position = 'fixed';
        dialogContainer.style.top = '0';
        dialogContainer.style.left = '0';
        dialogContainer.style.width = '100%';
        dialogContainer.style.height = '100%';
        dialogContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        dialogContainer.style.display = 'flex';
        dialogContainer.style.justifyContent = 'center';
        dialogContainer.style.alignItems = 'center';
        dialogContainer.style.zIndex = '1000';

        // Crear el cuadro de diálogo
        const dialogBox = document.createElement('div');
        dialogBox.style.backgroundColor = '#fff';
        dialogBox.style.padding = '2rem';
        dialogBox.style.borderRadius = '10px';
        dialogBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        dialogBox.style.textAlign = 'center';

        // Crear el mensaje
        const message = document.createElement('p');
        message.textContent = '¿Deseas iniciar sesión o registrarte?';
        dialogBox.appendChild(message);

        // Crear los botones
        const loginButton = document.createElement('button');
        loginButton.textContent = 'Iniciar Sesión';
        loginButton.style.margin = '1rem';
        loginButton.addEventListener('click', function() {
            window.location.href = 'loginhtml.php'; // Cambia esta URL según sea necesario
        });

        const registerButton = document.createElement('button');
        registerButton.textContent = 'Registrarse';
        registerButton.style.margin = '1rem';
        registerButton.addEventListener('click', function() {
            window.location.href = 'registrar1.php'; // Cambia esta URL según sea necesario
        });

        // Crear el botón de cerrar
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Cerrar';
        closeButton.style.margin = '1rem';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(dialogContainer);
        });

        dialogBox.appendChild(loginButton);
        dialogBox.appendChild(registerButton);
        dialogBox.appendChild(closeButton);

        dialogContainer.appendChild(dialogBox);
        document.body.appendChild(dialogContainer);
    });
});
