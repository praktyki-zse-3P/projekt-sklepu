<?php
session_start();
require_once 'db.php';


if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit();
}


if (!isset($_GET['id'])) {
    header('Location: dashboard.php');
    exit();
}

$id_klienta = $_GET['id'];


$stmt = $pdo->prepare("DELETE FROM logowanie WHERE id_klienta = :id_klienta");
$stmt->execute(['id_klienta' => $id_klienta]);


$stmt = $pdo->prepare("DELETE FROM klient WHERE id_klienta = :id_klienta");
$stmt->execute(['id_klienta' => $id_klienta]);


header('Location: dashboard.php');
exit();
?>
