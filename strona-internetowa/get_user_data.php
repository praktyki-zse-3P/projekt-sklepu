<?php
session_start();
include('db.php'); // Połączenie z bazą danych

// Sprawdzenie, czy sesja użytkownika jest ustawiona
if (isset($_SESSION['user_email'])) {
    $email = $_SESSION['user_email']; // Pobierz email z sesji

    // Zapytanie SQL łączące tabele "klient" i "logowanie"
    $sql = "
        SELECT k.imie, k.nazwisko 
        FROM klient k
        JOIN logowanie l ON k.id_klienta = l.id_klienta
        WHERE l.email = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email); // Zabezpieczenie przed SQL Injection
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Jeśli użytkownik istnieje, zwróć dane
        $user = $result->fetch_assoc();
        $userData = [
            'imie' => $user['imie'],
            'nazwisko' => $user['nazwisko']
        ];
        echo json_encode($userData); // Zwróć dane w formacie JSON
    } else {
        echo json_encode(['error' => 'Użytkownik nie znaleziony']);
    }
} else {
    echo json_encode(['error' => 'Brak sesji użytkownika']);
}
?>
