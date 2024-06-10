<?php 
session_start();

// Validar y sanitizar las entradas
$nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
$telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_EMAIL);
$correo = filter_input(INPUT_POST, 'correo', FILTER_SANITIZE_EMAIL);
$pass1 = $_POST['pass'];
$pass2 = $_POST['pass2'];

// Asegurarse de que pass1 es igual a pass2
if ($pass1 !== $pass2) {
    header('Location: registrar1.php?message=error'); // Redirigir al formulario con mensaje de error
    exit;
}

try {
    $conexion = new PDO('mysql:host=localhost;dbname=panaderia', 'root', '');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Preparar la sentencia SQL con los nombres correctos de las columnas
    $enunciado = $conexion->prepare('INSERT INTO datos (nombre, telefono, correo, pass) VALUES (?, ?, ?, ?)');

    // Encriptar la contraseña antes de enlazarla
    $hashedPassword = password_hash($pass1, PASSWORD_DEFAULT);

    // Enlazar los parámetros
    $enunciado->bindParam(1, $nombre);
    $enunciado->bindParam(2, $telefono);
    $enunciado->bindParam(3, $correo);
    $enunciado->bindParam(4, $hashedPassword);

    // Ejecutar la sentencia
    $enunciado->execute();   
    
    header('Location: registrar1.php?message=success'); // Redirigir al formulario con mensaje de éxito
    exit;

} catch (PDOException $e) {
    header('Location: registrar1.php?message=error'); // Redirigir al formulario con mensaje de error
    exit;
} finally {
    // Cerrar la conexión
    $conexion = null;
}
?>
