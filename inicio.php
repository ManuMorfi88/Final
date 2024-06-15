<?php
session_start();
$nombre_usuario = isset($_SESSION['usuario']) ? $_SESSION['usuario'] : null;
$email_usuario = isset($_SESSION['email']) ? $_SESSION['email'] : null;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panadería Rodríguez</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles1.css ">
</head>
<body>
    <header>
        <h1 class="nombre-sitio">PANADERÍA RODRÍGUEZ</h1>
    </header>

    <div class="HHH">
        <button class="abrir-menu" id="abrir"><i class="bi bi-list"></i></button>
        <h2 class="nombre-sitio4">PANADERÍA RODRÍGUEZ</h2>
    </div>
    <div class="menu-principal">
        <div class="contenedor-nav" id="nav">
            <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
            
            <nav class="nav-principal">
                <a href="inicio.php" class="opcion">Inicio <span class="separator">|</span></a>
                <div class="dropdown">
                    <a href="#" class="opcion">Colecciones <span class="separator">|</span></a>
                    <div class="dropdown-content">
                        <div class="col">
                            <p class="d-ops">PANADERÍA</p>
                            <a href="PanTrad.html">PAN TRADICIONAL</a>
                            <a href="/Final/PanMiniatura.html">PAN MINIATURA</a>
                        </div>
                        <div class="col">
                            <p class="d-ops">PAQUETES</p>
                            <a href="/Final/fiestas.html">FIESTAS</a>
                            <a href="/Final/bodas.html">BODAS</a>
                        </div>
                        <div class="col">
                            <p class="d-ops">TEMPORADA</p>
                            <a href="/Final/DiaReyes.html">DÍA DE REYES</a>
                            <a href="/Final/SanValentin.html">SAN VALENTÍN</a>
                            <a href="/Final/DiaDeMuertos.html">DÍA DE MUERTOS</a>
                            <a href="/Final/Navidad.html">NAVIDAD</a>
                        </div>
                    </div>
                </div>

                <a href="#" class="opcion">Contacto <span class="separator">|</span></a>
                <a href="favoritos.html" class="opcion">Favoritos</a>
                <div class="cont-favoritos desaparecer" id="cont-favoritos">
                    <button class="cerrar-menu" id="cerrarfavoritos"><i class="bi bi-x"></i></button>
                </div>
            </nav>
        </div>

        <div class="login-menu">
            <nav class="loginyusuario">
                <?php if ($nombre_usuario): ?>
                    <a href="#" class="login" id="usuario"><?php echo htmlspecialchars(substr($nombre_usuario, 0, 19)); ?></a>
                <?php else: ?>
                    <a href="loginhtml.php" class="login">Iniciar sesión</a>
                <?php endif; ?>
                <button class="login-mono" id="entrar"><i class="bi bi-person"></i></button>
                <a href="#" class="opcion" id="carrito"><i class="bi bi-cart"></i></a>  
            </nav>
        </div>
    </div>

    <div class="cont-carrito desaparecer" id="cont-carrito">
        <button class="cerrar-menu" id="cerrarcarrito"><i class="bi bi-x"></i></button>
    </div>

    <script src="AgregarCarrito.js"></script>
    <script src="nav.js"></script>
    <script src="favoritos.js"></script>
    <script src="userDialog.js"></script> <!-- Nuevo archivo JavaScript -->
    
    <div class="imagen-principal">
        <img src="images/PANADERIA-PRINCIPAL-1.jpg" alt="Panadería Principal">
    </div>

    <section class="contenedor-categorias">
        <h2>DISFRUTA DE LA MEJOR PANADERÍA</h2>
        <div class="listado-categorias">
            <div class="pan-tra-min">
                <div class="categoria">
                    <img src="images/1.jpeg" alt="">
                    <a href="#">PAN MINIATURA</a>
                </div>
                <div class="categoria">
                    <img src="images/2.jpeg" alt="">
                    <a href="PanTrad.html">PAN TRADICIONAL</a>
                </div>
            </div>
            <div class="pan-even">
                <div class="categoria">
                    <img src="images/3.jpeg" alt="">
                    <a href="#">PAN PARA EVENTOS</a>
                </div>
            </div>
        </div>
    </section>
    <script src="./PanTrad.js"></script>

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
                © Panadería Rodríguez es una empresa de Corporativo Fragua, S.A.B. de C.V. Todos los derechos reservados
            </p>
        </div> 
    </footer>
</body>
</html>
