<?php

$host = 'localhost';  
$dbname = 'projekt sklepu';  
$username = 'root';  
$password = '';  


try {
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    
    die("Nie udało się połączyć z bazą danych: " . $e->getMessage());
}
?>
