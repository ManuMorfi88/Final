<?php
$servername = "localhost";
$username = "root"; // Cambia esto si tu usuario de MySQL es diferente
$password = ""; // Cambia esto si tienes una contraseña en MySQL
$dbname = "panaderia";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener datos del formulario
$calle = $conn->real_escape_string($_POST['calle']);
$numero = $conn->real_escape_string($_POST['numero']);
$colonia = $conn->real_escape_string($_POST['colonia']);
$referencias = $conn->real_escape_string($_POST['referencias']);
$piezas = (int)$_POST['piezas'];
$total = (float)$_POST['total'];
$productos = json_decode($_POST['productos'], true);

// Verificar los valores recibidos
var_dump($calle, $numero, $colonia, $referencias, $piezas, $total);

// Insertar datos de dirección
$sql = "INSERT INTO direcciones (calle, numero, colonia, referencias) VALUES ('$calle', '$numero', '$colonia', '$referencias')";
if ($conn->query($sql) === TRUE) {
    $direccion_id = $conn->insert_id;

    // Insertar datos de compra
    $sql = "INSERT INTO compras (direccion_id, piezas, total) VALUES ('$direccion_id', '$piezas', '$total')";
    if ($conn->query($sql) === TRUE) {
        echo "Compra registrada exitosamente";
        echo "<script>
            localStorage.removeItem('productosFinalizar');
            localStorage.removeItem('productos');
        </script>";
        header("Location: inicio.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();