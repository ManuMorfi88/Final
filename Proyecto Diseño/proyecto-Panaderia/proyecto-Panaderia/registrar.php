<?php 
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $corro = $_POST['correo'];
    $pass1 = $_POST['pass'];
    $pass2 = $_POST['pass2'];
    
    print_r($_POST);
    ///////// no olviodar que el pass1 sea igual a pass2/////////////////
    try{
        $conection = new PDO('mysql:host=localhost;dbname=bd_registro','root','');
    
         $enunciado = $conection->prepare('INSERT INTO usuario values (?,?,?,?)');
    
         $enunciado->bindParam(1, $nombre);
         $enunciado->bindParam(2, $telefono);
         $enunciado->bindParam(3, $correo);
         $enunciado->bindParam(4, $co);
    
         $co= password_hash($password1, PASSWORD_DEFAULT);//encriptacion de la contraseña
    
        $enunciado->execute();   
        echo "todo bien";
    
    }catch(PDOException $e){
            echo 'ERROR'. $e->getMessage() .'';
        }
    
?>