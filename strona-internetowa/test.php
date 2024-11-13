<?php
$host = 'localhost';
$dbname = 'projekt sklepu';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    echo "Połączenie z bazą danych zostało nawiązane!";
} catch (PDOException $e) {
    echo "Błąd połączenia z bazą danych: " . $e->getMessage();
}
?>