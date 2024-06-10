<?php
    $db = mysqli_connect('localhost', 'root','','panaderia');
    if (!$db){
        echo "Hubo un error";
        exit;
    }