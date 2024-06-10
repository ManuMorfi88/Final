<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panadería Rodríguez</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="datos.css">
</head>
<body>
    <header>
        <h1 class="n-sitio">PANADERÍA RODRÍGUEZ</h1>
    </header>

    <div class="contenedor-nav">
        <nav class="nav-p">
            <a href="#" class="opcion">Inicio</a>
            <div class="dropdown">
                <a href="#" class="opcion">Colecciones</a>
                <div class="dropdown-content">
                    <div class="col">
                        <p class="d-ops">PANADERÍA</p>
                        <a href="#">PAN TRADICIONAL</a>
                        <a href="#">PAN MINIATURA</a>
                    </div>
                    <div class="col">
                        <p class="d-ops">PAQUETES</p>
                        <a href="#">FIESTAS</a>
                        <a href="#">BODAS</a>
                    </div>
                    <div class="col">
                        <p class="d-ops">TEMPORADA</p>
                        <a href="#">DÍA DE REYES</a>
                        <a href="#">SAN VALENTÍN</a>
                        <a href="#">DÍA DE MUERTOS</a>
                        <a href="#">NAVIDAD</a>
                    </div>
                </div>
            </div>
            <a href="#" class="opcion">Contacto</a>
            <a href="#" class="opcion">Favoritos</a>
            <div class="img-car">
                <img src="/YULI/images/icons8-carrito-de-compras-64.png" alt="">
                <a href="#" class="opcion">Carrito</a>  
            </div>
        </nav>
    </div>

    <script src="./PanTrad.js"></script>
    
    <h1>REGISTRARSE</h1>

    <section>
        <div class="contenedor-datos">
            <div class="parte1">
            <?php
                        session_start();
                        if (isset($_SESSION['message'])) {
                            echo '<p>' . $_SESSION['message'] . '</p>';
                            unset($_SESSION['message']); // Eliminar el mensaje después de mostrarlo
                        }
                        ?>
                <form action="registrar.php" method="POST" id="registrar">
                    <h4>Nombre:</h4>
                    <input class="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" required>
                    <h4>Número Telefónico:</h4>
                    <input class="controls" type="tel" name="telefono" id="telefono" placeholder="Ingrese su Número" required>
                    <h4>Correo (opcional):</h4>
                    <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo">
                    <h4>Contraseña:</h4>
                    <input class="controls" type="password" name="pass" id="pass" placeholder="Ingrese su Contraseña" required>
                    <h4>Confirmar contraseña:</h4>
    
                    <input class="controls" type="password" name="pass2" id="pass2" placeholder="Confirme su Contraseña" required>
                    <h4>¿Ya tienes una cuenta?</h4>
                    <a href="loginhtml.php">Iniciar sesión</a>
                    <div class="body-menu">
                        <div>
                            <button  class="opcion" type="submit" onclick="return validarFormulario()">Entrar</button>
                            <button class="opcion" type="reset">Limpiar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <footer class="site-footer">
        <div class="contenedor-footer">
            <div class="footer-ubicacion">
                <div class="logo-footer"><img class="img1" src="images/logo.jpeg" alt="logo footer"></div>
                <br>
                Calle. Rentería Luviano
                <br>
                Col. Lázaro Cárdenas
                <br>
                Apatzingán, Michoacán
                <br>
                C.P. 60630
                <br>
                <br>
                <h4>Teléfono para contactar</h4>
                <nav class="footer-menu">
                <a href="#">4531276239</a>
                </nav>
            </div>   
            
            <div class="footer-info">
            <div>
                <h4>Tienda en línea</h4>
                <nav class="footer-menu">
                    <a href="#">Pan miniatura</a>
                    <a href="#">Pan tradicional</a>
                    <a href="#">Paquetes</a>
                    <a href="#">Arreglos</a>
                    <a href="#">Pan de temporada</a>
                    <a href="#">Pasteles</a>
                </nav>
            </div>            
                    
            <div>
                <h4>Ayuda</h4>
                <nav class="footer-menu">
                    <a href="#">Conócenos</a>
                    <a href="#">Preguntas más frecuentes</a>
                    <a href="#">Facturas</a>
                </nav>
            </div>            
                        
            <div>
                <h4>Métodos de pago</h4>
                <nav class="footer-menu">
                    <a href="#">Efectivo</a>
                    <a href="#">Transferencia</a>
                </nav>
            </div>            
        
            <div>
                <h4>Horarios</h4>
                        Lunes-Sábado:
                        <br>
                        8:00AM - 4:00 PM
                        <br>
                        <br>
                        Domingo:
                        <br>
                        Cerrado
            </div>
            </div>           
             
            <div class="pan-footer">
                <h4>Pan más vendido</h4>
                <div class="img-pan"><a href="#"><img class="img2" src="images/panmasvendido.jpeg" alt="Pan más vendido"></a></div>
            </div>
        </div>
        
        <div class="parrafo-footer">
            <p>
                Los precios y promociones mostrados en esta página online son exclusivos y estos pueden diferir de los precios y promociones de sucursal.
            </p>
            <p>
                Las imágenes mostradas son exclusivamente para uso ilustrativo.
            </p>
            <p>
                © Panadería Rodríguez es una empresa de Corporativo Fragua, S.A.B. de C.V. Todos los derechos reservados.
            </p>
        </div> 
    </footer>

    <script>
        // Función para validar la longitud de las contraseñas
        function validarFormulario() {
            var pass = document.getElementById('pass').value;
            var pass2 = document.getElementById('pass2').value;

            if (pass.length < 8 || pass2.length < 8) {
                alert('Error: Las contraseñas deben tener al menos 8 caracteres.');
                return false;
            }

            if (pass !== pass2) {
                alert('Error: Las contraseñas no son compatibles.');
                return false;
            }

            return true;
        }

        // Función para obtener el valor de un parámetro GET por nombre
        function getParameterByName(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        // Leer el parámetro 'message' de la URL
        var message = getParameterByName('message');

        // Mostrar alertas basadas en el valor del parámetro 'message'
        if (message === 'success') {
            alert('¡Registro exitoso!');
        } else if (message === 'error') {
            alert('Error: Las contraseñas no son compatibles.');
        }
    </script>
</body>
</html>
