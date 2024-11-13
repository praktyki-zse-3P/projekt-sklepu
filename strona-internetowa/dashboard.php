
<?php
session_start();
require_once 'db.php';  

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit();
}

$stmt = $pdo->query("SELECT * FROM klient");
$clients = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Panel Admina</title>
</head>
<body>
    <h1>Witaj w Panelu Administratora</h1>
    <a href="logout.php">Wyloguj się</a>
    <h2>Lista użytkowników</h2>
    <a href="add_user.php">Dodaj nowego użytkownika</a>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Akcje</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($clients as $client): ?>
            <tr>
                <td><?= $client['id_klienta'] ?></td>
                <td><?= $client['email'] ?></td>
                <td><?= $client['imie'] ?></td>
                <td><?= $client['nazwisko'] ?></td>
                <td>
                    <a href="edit_user.php?id=<?= $client['id_klienta'] ?>">Edytuj</a> | 
                    <a href="delete_user.php?id=<?= $client['id_klienta'] ?>">Usuń</a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
