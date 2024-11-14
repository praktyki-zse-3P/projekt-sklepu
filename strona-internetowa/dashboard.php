<?php
session_start();
require_once 'db.php';  


if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit();
}


function showPodsumowanieSprzedazy($pdo) {
    $stmt = $pdo->query("SELECT * FROM PodsumowanieSprzedazy");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function showProduktyZKategoria($pdo) {
    $stmt = $pdo->query("SELECT * FROM ProduktyZKategoria");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function showSzczegolyZamowienia($pdo) {
    $stmt = $pdo->query("SELECT * FROM SzczegolyZamowienia");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function showSzczegolyWysylek($pdo) {
    $stmt = $pdo->query("SELECT * FROM SzczegolyWysylek");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


$view = isset($_GET['view']) ? $_GET['view'] : 'podsumowanie_sprzedazy'; 


switch ($view) {
    case 'podsumowanie_sprzedazy':
        $data = showPodsumowanieSprzedazy($pdo);
        break;

    case 'produkty_z_kategoria':
        $data = showProduktyZKategoria($pdo);
        break;

    case 'szczegoly_zamowienia':
        $data = showSzczegolyZamowienia($pdo);
        break;

    case 'szczegoly_wysylek':
        $data = showSzczegolyWysylek($pdo);
        break;

    case 'uzytkownicy':
       
        $stmt = $pdo->query("SELECT k.id_klienta, k.imie, k.nazwisko, l.email FROM klient k 
                             JOIN logowanie l ON k.id_klienta = l.id_klienta");
        $clients = $stmt->fetchAll(PDO::FETCH_ASSOC);
        break;

    default:
        $data = [];
        break;
}
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
    <link rel="stylesheet" href="dashboard.css">

  
    <div>
        <a href="?view=podsumowanie_sprzedazy">Podsumowanie Sprzedaży</a> |
        <a href="?view=produkty_z_kategoria">Produkty z Kategorią</a> |
        <a href="?view=szczegoly_zamowienia">Szczegóły Zamówienia</a> |
        <a href="?view=szczegoly_wysylek">Szczegóły Wysyłek</a> |
        <a href="?view=uzytkownicy">Lista Użytkowników</a>
    </div>
    
   
    <h2><?php echo ucfirst(str_replace('_', ' ', $view)); ?></h2>

    <?php if ($view == 'uzytkownicy'): ?>
      
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
                        <a href="delete_user.php?id=<?= $client['id_klienta'] ?>" onclick="return confirm('Czy na pewno chcesz usunąć tego użytkownika?')">Usuń</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php else: ?>
     
        <table border="1">
            <thead>
                <tr>
                    <?php
                    if ($view == 'podsumowanie_sprzedazy') {
                        echo "<th>Marka Produktu</th><th>Model Produktu</th><th>Liczba Zamówień</th><th>Łączność Sprzedaży</th>";
                    } elseif ($view == 'produkty_z_kategoria') {
                        echo "<th>ID Produktu</th><th>Model Produktu</th><th>Marka Produktu</th><th>Cena Produktu</th><th>Rozmiar Produktu</th><th>Kategoria</th>";
                    } elseif ($view == 'szczegoly_zamowienia') {
                        echo "<th>ID Zamówienia</th><th>Imię Klienta</th><th>Nazwisko Klienta</th><th>Miejscowość</th><th>Model Produktu</th><th>Marka Produktu</th><th>Cena Produktu</th><th>Data Zamówienia</th><th>Status Zamówienia</th>";
                    } elseif ($view == 'szczegoly_wysylek') {
                        echo "<th>ID Wysyłki</th><th>ID Zamówienia</th><th>Data Zamówienia</th><th>Data Wysyłki</th><th>Status Zamówienia</th>";
                    }
                    ?>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($data as $row): ?>
                    <tr>
                        <?php
                        if ($view == 'podsumowanie_sprzedazy') {
                            echo "<td>{$row['Marka_Produktu']}</td><td>{$row['Model_Produktu']}</td><td>{$row['Liczba_Zamowien']}</td><td>{$row['LacznoscSprzedazy']}</td>";
                        } elseif ($view == 'produkty_z_kategoria') {
                            echo "<td>{$row['ID_Produktu']}</td><td>{$row['Model_Produktu']}</td><td>{$row['Marka_Produktu']}</td><td>{$row['Cena_Produktu']}</td><td>{$row['Rozmiar_Produktu']}</td><td>{$row['Kategoria']}</td>";
                        } elseif ($view == 'szczegoly_zamowienia') {
                            echo "<td>{$row['ID_Zamowienia']}</td><td>{$row['Imie_Klienta']}</td><td>{$row['Nazwisko_Klienta']}</td><td>{$row['Miejscowosc']}</td><td>{$row['Model_Produktu']}</td><td>{$row['Marka_Produktu']}</td><td>{$row['Cena_Produktu']}</td><td>{$row['Data_Zamowienia']}</td><td>{$row['Status_Zamowienia']}</td>";
                        } elseif ($view == 'szczegoly_wysylek') {
                            echo "<td>{$row['ID_Wysylki']}</td><td>{$row['ID_Zamowienia']}</td><td>{$row['Data_Zamowienia']}</td><td>{$row['Data_Wysylki']}</td><td>{$row['Status_Zamowienia']}</td>";
                        }
                        ?>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</body>
</html>
