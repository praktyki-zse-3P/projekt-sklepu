<?php
$host = 'localhost';
$dbname = 'sklep';
$username = 'root';
$password = '';

try {
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Nie udało się połączyć z bazą danych: " . $e->getMessage());
}

if (isset($_POST['register'])) {
    $email = $_POST['email'];
    $haslo = $_POST['password'];

    if (empty($email) || empty($haslo)) {
        echo "Proszę wypełnić wszystkie pola.";
    } else {
        
        $hashed_password = password_hash($haslo, PASSWORD_DEFAULT);

        
        $stmt = $pdo->prepare("INSERT INTO logowanie (email, hashed_password) VALUES (:email, :hashed_password)");
        
        $stmt->execute(['email' => $email, 'hashed_password' => $hashed_password]);

        
        session_start();
        $_SESSION['user_id'] = $pdo->lastInsertId(); 
        $_SESSION['email'] = $email;  
        header("Location: index.html");  
        exit();
    }
}
?>