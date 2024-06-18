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
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap">
</head>
<body>
    <header>
        <h1 class="n-sitio">PANADERÍA RODRÍGUEZ</h1>
    </header>
    
    <h1 class="sesion">INICIAR SESIÓN</h1>

    <section>
        <div class="contenedor-datos">
            <div class="parte1">
            <?php
    if (isset($_GET['error'])) {
        echo '<p style="color:red;">' . htmlspecialchars($_GET['error']) . '</p>';
    }
    ?>
                <form action="login.php" method="POST" id="login">
                    <h4>Correo Electrónico o Número Telefónico:</h4>
                    <input class="controls" type="text" name="email" id="email" placeholder="Ingrese su Correo o Número" required>
                    <h4>Contraseña:</h4>
                    <input class="controls" type="password" name="pass" id="pass" placeholder="Ingrese su Contraseña" required>
                    <h4>¿Aún no tienes cuenta?</h4>
                    <a href="registrar1.php" class="crea_cuenta">CREAR CUENTA</a>
                    <div class="body-menu">
                    <button class="opcion" type="button" onclick="window.location.href='inicio.html'">Volver</button>
                    <button class="opcion" type="submit">Entrar</button>
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
            Calle. Renteria Luviano
            <br>
            Col. Lazaro Cardenas
            <br>
            Apatzingán Michoacan
            <br>
            C.P. 60630
            <br>
            <br>
            <h4>Telefono para contactar</h4>
            <nav class="footer-menu">
            <a href="#">4531276239</a>
            </nav>
        </div>   
        
        <div class="footer-info">
        <div>
            <h4>Tienda en linea</h4>
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
                <a href="#">Conocenos</a>
                <a href="#">Preguntas mas frecuentes</a>
                <a href="#">Facturas</a>
            </nav>
        </div>            
                    
        <div>
            <h4>Metodos de pago</h4>
            <nav class="footer-menu">
                <a href="#">Efectivo</a>
                <a href="#">Transferencia</a>
            </nav>
        </div>            
    
        <div>
            <h4>Horarios</h4>
                    Lunes-Sabado:
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
                <h4>Pan mas vendido</h4>
                <div class="img-pan"><a href="#"><img class="img2" src="images/panmasvendido.jpeg" alt="Pan mas vedido"></a></div>
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
                © Panaderia Rodriguez es una empresa de Corporativo Fragua, S.A.B. de C.V. Todos los derechos reservados
            </p>
        </div> 
    </footer>
</body>
</html>