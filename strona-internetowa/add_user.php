<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit();
}

$error_message = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];

    if (empty($email) || empty($password) || empty($imie) || empty($nazwisko)) {
        $error_message = "Proszę wypełnić wszystkie pola.";
    } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO klient (imie, nazwisko) VALUES (:imie, :nazwisko)");
        $stmt->execute(['imie' => $imie, 'nazwisko' => $nazwisko]);

        $id_klienta = $pdo->lastInsertId();

        $stmt = $pdo->prepare("INSERT INTO logowanie (id_klienta, email, hashed_password) VALUES (:id_klienta, :email, :hashed_password)");
        $stmt->execute(['id_klienta' => $id_klienta, 'email' => $email, 'hashed_password' => $hashed_password]);

        header('Location: dashboard.php');
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Dodaj nowego użytkownika</title>
</head>
<body>
    <h1>Dodaj nowego użytkownika</h1>
    <form action="add_user.php" method="POST">
        <input type="email" name="email" placeholder="Email" required><br>
        <input type="password" name="password" placeholder="Hasło" required><br>
        <input type="text" name="imie" placeholder="Imię" required><br>
        <input type="text" name="nazwisko" placeholder="Nazwisko" required><br>
        <button type="submit">Dodaj użytkownika</button>
    </form>
    <?php if (!empty($error_message)) { echo "<p style='color: red;'>$error_message</p>"; } ?>
</body>
</html>