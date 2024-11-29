<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AirKingDom</title>
    <link rel="stylesheet" href="style.css" type= "text/css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mrs+Sheppards&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <?php
session_start();
$isLoggedIn = isset($_SESSION['user_id']);
$userData = $isLoggedIn ? [
    'email' => $_SESSION['email'],
] : null;
?>
<script>
    const isLoggedIn = <?php echo json_encode($isLoggedIn); ?>;
    const userData = <?php echo json_encode($userData); ?>;
</script>

</head>
<body>
    <!-- Header Section -->
    <section id="section-header">
        <div id="header">
            <p id="header_word" onclick="showAccessDiv()">ZAREJESTRUJ SIĘ, ABY DOSTAĆ WCZEŚNIEJSZY DOSTĘP!</p>
        </div>
    </section>

    <!-- Early Access Message -->
    <div id="earlyAccessMessage">
        <span class="close-btn" onclick="closeAccessDiv()">&times;</span>

        <div class="earlyAccessMessage-box"><h4>Darmowa dostawa przy zamówieniach powyżej 150zł!</h4>
        <p class="slider-text">Złóż zamówienie o wartości co najmniej 150 zł i ciesz się darmową dostawą! Aby dowiedzieć się więcej, odwiedź naszą stronę z często zadawanymi pytaniami dotyczącymi dostawy.</p>
        </div>
        <div class="earlyAccessMessage-box"><h4>Zarejestruj się, aby mieć wczesny dostęp do ofert i produktów!</h4>
        <p class="slider-text">Zarejestruj się bezpłatnie, aby korzystać z wyjątkowych ofert i mieć wcześniejszy dostęp do wyprzedaży</p>
        </div>
        <div class="earlyAccessMessage-box"><h4>Darmowy zwrot produktów do 30 dni!</h4>
        <p class="slider-text">Masz 30 dni na darmowy zwrot lub wymianę produktów.</p>
        </div>
    </div>

        <section id="section-middle">
            <div class="category">
                <div class="content-left"></div>
    
                <div class="content-middle">    
                    <button class="category-button" onmouseover="showAccessDiv_category('nowe-i-polecane')">Nowe i Polecane</button>
                    <button class="category-button" onmouseover="showAccessDiv_category('mezczyzni')">Mężczyźni</button>
                    <button class="category-button" onmouseover="showAccessDiv_category('kobiety')">Kobiety</button>
                    <button class="category-button" onmouseover="showAccessDiv_category('unisex')">Unisex</button>
                </div>
                
                <div class="content-right">
                    <div class="search-container">
                        <input type="text" id="search-input" placeholder="Wyszukaj produkty...">
                        <button class="button-icon-search" id="search-button">
                            <div class="background-circle-search"></div>
                            <img class="elements" src="search.png" alt="search">
                        </button>
                    </div>

                    <button class="button-icon"><div class="background-circle"></div>
                    <img class="elements" src="user.png" alt="user"></button>

                    <button class="button-icon"><div class="background-circle" onclick="toggleAccessLiked()"></div>
                    <img class="elements" src="heart.png" alt="heart" onclick="toggleAccessLiked()"></button>
                    
                    
                    
                    <button class="button-icon"><div class="background-circle" onclick="toggleAccessShop()"></div>
                    <img class="elements" src="shopping-bag.png" alt="shopping bag" onclick="toggleAccessShop()">
                    <span id="cart-count">0</span> </button>
                </div>
            </div>
    
            

    <div id="container-category-button-access">
        <span class="close-btn-category" onclick="closeAccessDiv_category()">&times;</span>

        <div class="category-button-access" id="nowe-i-polecane-access">
            <h3 id="categorys-name">Nowe i Polecane</h3>
            <ul class="product-list" id="nowe-i-polecane-list"></ul>
        </div>

        <div class="category-button-access" id="mezczyzni-access">
            <h3 id="categorys-name">Mężczyźni</h3>
            <ul class="product-list" id="mezczyzni-list"></ul>
        </div>

        <div class="category-button-access" id="kobiety-access">
            <h3 id="categorys-name">Kobiety</h3>
            <ul class="product-list" id="kobiety-list"></ul>
        </div>

        <div class="category-button-access" id="unisex-access">
            <h3 id="categorys-name">Unisex</h3>
            <ul class="product-list" id="unisex-list"></ul>
        </div>
</div>


        
        
        <!--Video Text -->
        <div class="content-overlay">
            <h1>AirKingDom</h1>
            <p id="wlk">Walk like King</p>

            <div id="search-results-container" class="search-results-container"></div>
            
            
        </div>
        
        <!-- Video Background -->
        <div class="video-background">
            <video src="animacja(1).mp4" id="animation" type="video/mp4" autoplay loop muted playsinline ></video>  
        </div>
        
       
    
        <!-- Notification Container -->
        <div id="notification-container"></div>
        
        <div class="sort-container">
            <label for="sort">Sortuj według:</label>
            <select id="sort" onchange="sortAndRenderProducts()">
                <option value="name-asc">Nazwa (A-Z)</option>
                <option value="name-desc">Nazwa (Z-A)</option>
                <option value="price-asc">Cena (rosnąco)</option>
                <option value="price-desc">Cena (malejąco)</option>
            </select>
        </div>
        <!-- Products Section -->
        <h6>PRODUKTY</h6>
        <div id="products-container"></div>

       
    
        
        <!-- Product Modal -->
        <div id="modal-template" class="modal">
            <div class="modal-content">
                <!-- Przycisk zamknięcia w prawym górnym rogu -->
                <button class="close-modal" onclick="closeModal()">x</button>
                
                <h2 class="product-name"></h2>
                <p class="price"></p>
                <img class="main-product-image" src="" alt="Product Image">
                
                <div class="product-thumbnails"></div>
                
                <div class="size-options"></div>
                
                <button class="add-to-cart">Dodaj do koszyka</button>

                <button class="add-to-favorites">Dodaj do ulubionych</button>
            </div>
        </div>

        <!-- Polubione produkty---------------------------------------------------------------------------------------->
        <div id="cart-liked-modal">
            <div id="cart-liked"></div>
            <button onclick="addFavoritesToCart()" class="add-to-cart1">Przenieś ulubione do koszyka</button>
        </div>

        <div id="cart-modal">
            <div id="cart-items"></div>
            <div id="cart-total"></div> <!-- Tu będzie wyświetlana łączna cena -->
        </div>
    
        <div id="userInfo">
            <p><strong>Email:</strong> <span id="userEmail"></span></p>
            <button class = "userInfobutton" onclick="viewOrderHistory()">Historia zamówień</button>
            <button class = "userInfobutton" onclick="logout()">Wyloguj</button>
            <p style="margin-top:20px">Liczba odwiedzin strony: </p>
            <script src="visitCounter.js"></script>
        </div>

        <div id="search-modal">
            <div id="search-results" style="padding: 20px;">
                <!-- Wyniki wyszukiwania pojawią się tutaj -->
            </div>
        </div>

    </section>
        
    



       
    
    
    
    
    
    
    
    
        <!-- Login Modal -->
        <div id="loginModal" class="modal">
            <div class="login-content">
                <span class="close" onclick="closeLoginModal()">&times;</span>
                <h2>Logowanie</h2>
                <form action="login.php" method="POST">
                    <div class="textbox">
                        <input type="email" placeholder="Adres e-mail" name="email" required>
                    </div>
                    <div class="textbox">
                        <input type="password" placeholder="Hasło" name="password" required>
                    </div>
                    <input type="submit" name="login" value="Zaloguj się" class="btn-login">
                    <div class="signup-link">
                        <p>Nie masz konta? <a href="#" onclick="openRegisterModal(); closeLoginModal();">Zarejestruj się</a></p>
                    </div>
                </form>
            </div>
        </div>

        <!-- Register Modal -->
        <div id="registerModal" class="modal">
            <div class="register-content">
                <span class="close" onclick="closeRegisterModal()">&times;</span>
                <h2>Rejestracja</h2>
                <form action="register.php" method="POST">
                    <div class="textbox">
                        <input type="text" placeholder="Imię" name="imie" required>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Nazwisko" name="nazwisko" required>
                    </div>
                    <div class="textbox">
                        <input type="email" placeholder="Adres e-mail" name="email" required>
                    </div>
                    <div class="textbox">
                        <input type="password" id="password" placeholder="Hasło" name="password" required>
                        <span id="togglePassword" class="toggle-icon">
                            <i class="fas fa-eye-slash"></i> 
                        </span>
                    </div>
                    <div class="textbox">
                        <input type="password" id="repeat_password" placeholder="Powtórz hasło" name="repeat_password" required>
                        <span id="toggleRepeatPassword" class="toggle-icon">
                            <i class="fas fa-eye-slash"></i> 
                        </span>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Miejscowość" name="miejscowosc" required>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Ulica" name="ulica" required>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Numer mieszkania" name="nr_mieszkania" required>
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Kod pocztowy (00-000)" name="kod_pocztowy" pattern="\d{2}-\d{3}" required>
                    </div>
                    <div class="textbox">
                        <input type="tel" placeholder="Telefon (9 cyfr)" name="telefon" pattern="[0-9]{9}" required>
                    </div>
                    <input type="submit" name="register" value="Zarejestruj się" class="btn-register">
                    <div class="login-link">
                        <p>Masz już konto? <a href="#" onclick="toggleUserInfo(); closeRegisterModal();">Zaloguj się</a></p>
                    </div>
                </form>
            </div>
        </div>
        


    <script src="script.js"></script>
</body>
</html>
