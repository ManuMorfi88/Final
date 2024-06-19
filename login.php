<?php
include './conexionbd.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $error_message = '';  // Variable para el mensaje de error

    $login = mysqli_query($db, "SELECT pass, nombre FROM datos WHERE correo = '$email'");

    if (mysqli_num_rows($login) > 0) {
        $row = $login->fetch_assoc();
        $hash = $row['pass'];
        $nombre = $row['nombre']; // Obtener el nombre del usuario

        if (password_verify($pass, $hash)) {
            $_SESSION['usuario'] = $nombre; // Guardar el nombre del usuario en la sesión
            header("location: ./inicio.php"); // Cambiar a .php para poder utilizar PHP en la página de inicio
            exit();
        } else {
            $error_message = 'La contraseña no es válida, intente de nuevo';
        }
    } else {
        $error_message = 'El usuario no existe';
    }

    if ($error_message != '') {
        echo "<script>
                alert('$error_message');
                window.location.href = './loginhtml.php';
              </script>";
        exit();
    }
}
?>
