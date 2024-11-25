<?php
// Połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projekt sklepu";

$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

// Pobranie danych produktów
$data = json_decode(file_get_contents('php://input'), true);

// Sprawdzamy, czy dane zostały prawidłowo przekazane
if (!$data) {
    echo json_encode(["message" => "Błąd w danych wejściowych.", "error" => json_last_error_msg()]);
    exit;
}

// Sprawdzamy, czy dane są poprawne
if (!empty($data)) {
    // Przygotowanie zapytania do dodawania produktów
    $stmt_product = $conn->prepare("INSERT INTO produkt (nazwa_produktu, cena_produktu, rozmiar_produktu, id_kategorii) VALUES (?, ?, ?, ?)");

    // Iteracja po wszystkich produktach
    foreach ($data as $product) {
        // Zamiana tablicy rozmiarów na format tekstowy (ciąg oddzielony przecinkami)
        $sizes_text = implode(", ", $product['sizes']);  // Tablica rozmiarów zamieniona na tekst

        // Debugowanie - sprawdź, co jest w $sizes_text
        echo "Rozmiary tekstowe: " . $sizes_text . "\n";

        // Przypisanie wartości do zapytania
        $stmt_product->bind_param(
            "sssi",  // Typy dla parametrów: s - string (nazwa produktu), s - string (cena produktu), i - integer (id_kategorii)
            $product['name'],        // Nazwa produktu
            $product['price'],       // Cena produktu
            $sizes_text,             // Rozmiary jako tekst
            $product['id_kategorii'] // ID kategorii
        );

        // Wykonanie zapytania do bazy danych
        if (!$stmt_product->execute()) {
            echo json_encode(["message" => "Błąd dodawania produktu", "error" => $stmt_product->error]);
            exit;
        }
    }

    echo json_encode(["message" => "Produkty zostały dodane pomyślnie."]);
} else {
    echo json_encode(["message" => "Brak danych do zapisania."]);
}

$conn->close();
?>