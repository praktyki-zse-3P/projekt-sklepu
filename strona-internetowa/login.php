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

session_start();
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['login'])) {
    $email = $_POST['email'];
    $haslo = $_POST['password'];

    if (empty($email) || empty($haslo)) {
        $error = "Proszę wypełnić wszystkie pola.";
    } else {
        $stmt = $pdo->prepare("SELECT * FROM logowanie WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
           
            if (password_verify($haslo, $user['hashed_password'])) {
                
                $_SESSION['user_id'] = $user['id_klienta'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['role'] = $user['role']; 

                
                if ($_SESSION['role'] == 'admin') {
                    header("Location: dashboard.php");
                } else {
                   
                    header("Location: user_dashboard.php");
                }
                exit();
            } else {
                $error = "Niepoprawne hasło.";
            }
        } else {
            $error = "Niepoprawny e-mail.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="login-container">
        <div class="login-box">
            <h2>Logowanie</h2>
            <form action="login.php" method="POST">
                
                <div class="textbox">
                    <input type="email" placeholder="Adres e-mail" name="email" required value="<?php echo !empty($email) ? $email : ''; ?>">
                </div>
                
                <div class="textbox">
                    <input type="password" placeholder="Hasło" name="password" required>
                </div>

                
                <?php if (!empty($error)): ?>
                    <div class="error-message" style="color: red; margin-top: 10px;">
                        <?php echo $error; ?>
                    </div>
                <?php endif; ?>

                
                <input type="submit" name="login" value="Zaloguj się" class="btn-login">
                
                
                <div class="signup-link">
                    <p>Nie masz konta? <a href="register.php">Zarejestruj się</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
