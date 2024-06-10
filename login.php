<?php
 include './conexionbd.php';

 $email = $_POST['email'];
 $pass = $_POST['pass'];
 $error_message = '';  // Variable para el mensaje de error
 
 $login = mysqli_query($db, "SELECT pass FROM datos WHERE correo = '$email' ");

 if(mysqli_num_rows($login)>0){
    $row = $login -> fetch_assoc();
    $hash = $row['pass'];
    echo $hash;
    
    $_SESSION['usuario']=$email;
    echo $pass;
    
    if(password_verify($pass, $hash)){
        header("location: ./inicio.html");
    
    } else{
        $error_message = 'La contraseña no es válida, intente de nuevo';
    }

 }else{
    
    $error_message = 'El usuario no existe';
 }
 if ($error_message != '') {
    echo "<script>
            alert('$error_message');
            window.location.href = './loginhtml.php';
          </script>";
    exit();
}
