<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit();
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $stmt = $pdo->prepare("DELETE FROM klient WHERE id_klienta = :id");
    $stmt->execute(['id' => $id]);

    $stmt = $pdo->prepare("DELETE FROM logowanie WHERE id_klienta = :id");
    $stmt->execute(['id' => $id]);

    header('Location: dashboard.php');
    exit();
}
?>