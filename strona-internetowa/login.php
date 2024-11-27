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

session_start();
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['login'])) {
    $email = $_POST['email'];
    $haslo = $_POST['password'];

    if (empty($email) || empty($haslo)) {
        $error = "Proszę wypełnić wszystkie pola.";
    } else {
        // Pobierz użytkownika z bazy na podstawie emaila
        $stmt = $pdo->prepare("SELECT * FROM logowanie WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // Weryfikacja hasła
            if (password_verify($haslo, $user['hashed_password'])) {
                // Zapisz dane do sesji
                $_SESSION['user_id'] = $user['id_klienta'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['imie'] = $user['imie'];       // Dodano imię
                $_SESSION['nazwisko'] = $user['nazwisko']; // Dodano nazwisko
                $_SESSION['role'] = $user['role'];

                // Przekierowanie w zależności od roli
                if ($_SESSION['role'] == 'admin') {
                    header("Location: dashboard.php");
                } else {
                    header("Location: index.php");
                }
                exit();
            } else {
                $error = "Niepoprawne hasło.";
            }
        } else {
            $error = "Niepoprawny e-mail.";
        }
    }
}
?>
