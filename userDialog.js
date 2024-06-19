document.addEventListener('DOMContentLoaded', function() {
    const entrarButton = document.getElementById('entrar');
    const nombreUsuario = "<?php echo isset($nombre_usuario) ? htmlspecialchars($nombre_usuario) : ''; ?>";

    entrarButton.addEventListener('click', function() {
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

        const dialogBox = document.createElement('div');
        dialogBox.style.backgroundColor = '#fff';
        dialogBox.style.padding = '2rem';
        dialogBox.style.borderRadius = '10px';
        dialogBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        dialogBox.style.textAlign = 'center';

        if (nombreUsuario) {
            // Mostrar información del usuario y opción para cerrar sesión
            const message = document.createElement('p');
            message.textContent = `Nombre: ${nombreUsuario}`;
            dialogBox.appendChild(message);

            const logoutButton = document.createElement('button');
            logoutButton.textContent = 'Cerrar sesión';
            logoutButton.style.margin = '1rem';
            logoutButton.addEventListener('click', function() {
                window.location.href = 'logout.php';
            });

            dialogBox.appendChild(logoutButton);
        } else {
            // Mostrar opciones para iniciar sesión o registrarse
            const message = document.createElement('p');
            message.textContent = '¿Deseas iniciar sesión o registrarte?';
            dialogBox.appendChild(message);

            const loginButton = document.createElement('button');
            loginButton.textContent = 'Iniciar sesión';
            loginButton.style.margin = '1rem';
            loginButton.addEventListener('click', function() {
                window.location.href = 'loginhtml.php';
            });

            const registerButton = document.createElement('button');
            registerButton.textContent = 'Registrarse';
            registerButton.style.margin = '1rem';
            registerButton.addEventListener('click', function() {
                window.location.href = 'registrar1.php';
            });

            dialogBox.appendChild(loginButton);
            dialogBox.appendChild(registerButton);
        }

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Cerrar';
        closeButton.style.margin = '1rem';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(dialogContainer);
        });

        dialogBox.appendChild(closeButton);
        dialogContainer.appendChild(dialogBox);
        document.body.appendChild(dialogContainer);
    });
});
