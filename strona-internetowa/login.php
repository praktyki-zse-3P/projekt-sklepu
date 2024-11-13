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

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['login'])) {
    $email = $_POST['email'];
    $haslo = $_POST['password'];

    if (empty($email) || empty($haslo)) {
        echo "Proszę wypełnić wszystkie pola.";
    } else {
        
        $stmt = $pdo->prepare("SELECT * FROM logowanie WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

       
        if ($user && password_verify($haslo, $user['hashed_password'])) {
            
            session_start();
            $_SESSION['user_id'] = $user['id'];  
            $_SESSION['email'] = $user['email'];  
            header("Location: index.html");  
            exit();
        } else {
            echo "Niepoprawny e-mail lub hasło.";
        }
    }
}
?>


