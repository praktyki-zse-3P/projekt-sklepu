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


if (isset($_POST['register'])) {
    $email = $_POST['email'];
    $haslo = $_POST['password'];
    $powtorz_haslo = $_POST['repeat_password'];
    $imie = $_POST['imie']; 
    $nazwisko = $_POST['nazwisko']; 
    $miejscowosc = $_POST['miejscowosc']; 
    $ulica = $_POST['ulica']; 
    $nr_mieszkania = $_POST['nr_mieszkania']; 
    $kod_pocztowy = $_POST['kod_pocztowy']; 
    $telefon = $_POST['telefon']; 

    
    if (empty($email) || empty($haslo) || empty($imie) || empty($nazwisko) || empty($miejscowosc) || empty($ulica) || empty($nr_mieszkania) || empty($kod_pocztowy) || empty($telefon)) {
        $error_message = "Proszę wypełnić wszystkie pola.";
    } else if ($haslo !== $powtorz_haslo) {
        $error_message = "Hasła nie pasują do siebie.";
    } else {
        
        $hashed_password = password_hash($haslo, PASSWORD_DEFAULT);

       
        $stmt = $pdo->prepare("INSERT INTO klient (imie, nazwisko, miejscowosc, ulica, nr_mieszkania, kod_pocztowy, telefon) 
                               VALUES (:imie, :nazwisko, :miejscowosc, :ulica, :nr_mieszkania, :kod_pocztowy, :telefon)");
        $stmt->execute([
            'imie' => $imie, 
            'nazwisko' => $nazwisko, 
            'miejscowosc' => $miejscowosc, 
            'ulica' => $ulica, 
            'nr_mieszkania' => $nr_mieszkania, 
            'kod_pocztowy' => $kod_pocztowy,
            'telefon' => $telefon
        ]);

       
        $id_klienta = $pdo->lastInsertId();

        
        $stmt = $pdo->prepare("INSERT INTO logowanie (id_klienta, email, hashed_password) 
                               VALUES (:id_klienta, :email, :hashed_password)");
        $stmt->execute([
            'id_klienta' => $id_klienta,
            'email' => $email,
            'hashed_password' => $hashed_password
        ]);

        
        session_start();
        $_SESSION['user_id'] = $id_klienta;  
        $_SESSION['email'] = $email;         

       
        header("Location: index.html");
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rejestracja</title>
    <link rel="stylesheet" href="login.css">
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <script>
        
        function togglePassword() {
            var passwordField = document.getElementById("password");
            var repeatPasswordField = document.getElementById("repeat_password");
            var passwordToggle = document.getElementById("password-toggle");
            
            if (passwordField.type === "password") {
                passwordField.type = "text";
                repeatPasswordField.type = "text";
                passwordToggle.classList.remove("fa-eye-slash");
                passwordToggle.classList.add("fa-eye");
            } else {
                passwordField.type = "password";
                repeatPasswordField.type = "password";
                passwordToggle.classList.remove("fa-eye");
                passwordToggle.classList.add("fa-eye-slash");
            }
        }
    </script>
</head>
<body>
    <div class="login-container">
        <div class="login-box">
            <h2>Rejestracja</h2>
            <form action="register.php" method="POST">
                <?php
                if (isset($error_message)) {
                    echo "<p style='color: red;'>$error_message</p>";
                }
                ?>
                <!-- Imię -->
                <div class="textbox">
                    <input type="text" placeholder="Imię" name="imie" required>
                </div>

                <!-- Nazwisko -->
                <div class="textbox">
                    <input type="text" placeholder="Nazwisko" name="nazwisko" required>
                </div>

                <!-- Miejscowość -->
                <div class="textbox">
                    <input type="text" placeholder="Miejscowość" name="miejscowosc" required>
                </div>

                <!-- Ulica -->
                <div class="textbox">
                    <input type="text" placeholder="Ulica" name="ulica" required>
                </div>

                <!-- Nr mieszkania -->
                <div class="textbox">
                    <input type="text" placeholder="Nr mieszkania" name="nr_mieszkania" required>
                </div>

                <!-- Kod pocztowy -->
                <div class="textbox">
                    <input type="text" placeholder="Kod pocztowy" name="kod_pocztowy" required>
                </div>

                <!-- Numer telefonu -->
                <div class="textbox">
                    <input type="text" placeholder="Numer telefonu" name="telefon" required>
                </div>

                <!-- Adres e-mail -->
                <div class="textbox">
                    <input type="email" placeholder="Adres e-mail" name="email" required>
                </div>

                <!-- Hasło -->
                <div class="textbox password-container">
                    <input type="password" id="password" placeholder="Hasło" name="password" required>
                    <i id="password-toggle" class="fas fa-eye-slash" onclick="togglePassword()"></i>
                </div>

                <!-- Powtórz hasło -->
                <div class="textbox password-container">
                    <input type="password" id="repeat_password" placeholder="Powtórz hasło" name="repeat_password" required>
                </div>

                <!-- Przycisk submit -->
                <input type="submit" name="register" value="Zarejestruj się" class="btn-login">

                <!-- Link do logowania -->
                <div class="signup-link">
                    <p>Masz już konto? <a href="login.php">Zaloguj się</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
