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
    // Przygotowanie zapytania do sprawdzania istnienia produktu
    $stmt_check = $conn->prepare("SELECT COUNT(*) FROM produkt WHERE nazwa_produktu = ? AND cena_produktu = ? AND id_kategorii = ?");

    // Przygotowanie zapytania do dodawania produktów
    $stmt_product = $conn->prepare("INSERT INTO produkt (nazwa_produktu, cena_produktu, rozmiar_produktu, id_kategorii) VALUES (?, ?, ?, ?)");

    foreach ($data as $product) {
        // Zamiana tablicy rozmiarów na format tekstowy (ciąg oddzielony przecinkami)
        $sizes_text = implode(", ", $product['sizes']);

        // Debugowanie: Sprawdzenie, jakie wartości są przekazywane
        echo "Sprawdzam produkt: " . $product['name'] . " z ceną: " . $product['price'] . " oraz kategorią: " . $product['id_kategorii'] . "\n";

        // Sprawdzenie, czy produkt już istnieje
        $stmt_check->bind_param(
            "ssi", 
            $product['name'],        // Nazwa produktu
            $product['price'],       // Cena produktu (upewnij się, że to jest liczba zmiennoprzecinkowa)
            $product['id_kategorii'] // ID kategorii
        );

        if (!$stmt_check->execute()) {
            echo json_encode(["message" => "Błąd podczas sprawdzania produktu", "error" => $stmt_check->error]);
            exit;
        }

        $stmt_check->bind_result($count);
        $stmt_check->fetch();

        if ($count > 0) {
            // Produkt już istnieje, pomiń dodawanie
            echo json_encode(["message" => "Produkt '{$product['name']}' już istnieje."]);
            continue;
        }

        // Dodanie nowego produktu
        $stmt_product->bind_param(
            "sssi", 
            $product['name'],        // Nazwa produktu
            $product['price'],       // Cena produktu
            $sizes_text,             // Rozmiary jako tekst
            $product['id_kategorii'] // ID kategorii
        );

        if (!$stmt_product->execute()) {
            echo json_encode(["message" => "Błąd dodawania produktu", "error" => $stmt_product->error]);
            exit;
        }

        // Jeśli wszystko poszło dobrze
        echo json_encode(["message" => "Produkt '{$product['name']}' dodany pomyślnie."]);
    }

    echo json_encode(["message" => "Produkty zostały dodane pomyślnie."]);
} else {
    echo json_encode(["message" => "Brak danych do zapisania."]);
}

$conn->close();
?>