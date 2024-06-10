<?php
 include './conexionbd.php';

 $email = $_POST['email'];
 $pass = $_POST['pass'];

 


 
 
 $login = mysqli_query($db, "SELECT pass FROM datos WHERE correo = '$email' ");

 if(mysqli_num_rows($login)>0){
    $row = $login -> fetch_assoc();
    $hash = $row['pass'];
    echo $hash;
    echo 'si entre jeje';
    $_SESSION['usuario']=$email;
    echo $pass;
    
    if(password_verify($pass, $hash)){
        header("location: ./inicio.html");
    
    } else{
        echo 'La contraseña no es valida, intente de nuevo';
    }

 }else{
    echo 'no entre jeje';
    echo '
    <script>
    alert("Este usuario no existe");
    window.location = "./loginhtml.php";
    ';
 }

