<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit();
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $stmt = $pdo->prepare("SELECT * FROM klient WHERE id_klienta = :id");
    $stmt->execute(['id' => $id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        die("Nie znaleziono użytkownika.");
    }
}

$error_message = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];

    if (empty($imie) || empty($nazwisko)) {
        $error_message = "Proszę wypełnić wszystkie pola.";
    } else {
        $stmt = $pdo->prepare("UPDATE klient SET imie = :imie, nazwisko = :nazwisko WHERE id_klienta = :id");
        $stmt->execute(['imie' => $imie, 'nazwisko' => $nazwisko, 'id' => $id]);

        header('Location: dashboard.php');
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Edytuj użytkownika</title>
</head>
<body>
    <h1>Edytuj użytkownika</h1>
    <form action="edit_user.php?id=<?= $user['id_klienta'] ?>" method="POST">
        <input type="text" name="imie" value="<?= $user['imie'] ?>" required><br>
        <input type="text" name="nazwisko" value="<?= $user['nazwisko'] ?>" required><br>
        <button type="submit">Zapisz zmiany</button>
    </form>
    <?php if (!empty($error_message)) { echo "<p style='color: red;'>$error_message</p>"; } ?>
</body>
</html>