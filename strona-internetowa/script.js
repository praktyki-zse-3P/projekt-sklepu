// Funkcje do otwierania i zamykania modali
function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function openRegisterModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeRegisterModal() {
    document.getElementById("registerModal").style.display = "none";
}

//heart- polubione

function showAccessLiked() {
    var messageDiv = document.getElementById('cart-liked-modal');
    messageDiv.classList.add('visible'); 
    document.addEventListener('click', handleOutsideClick_Liked);
}

function closeAccessLiked() {
    var messageDiv = document.getElementById('cart-liked-modal');
    messageDiv.classList.remove('visible'); 
    document.removeEventListener('click', handleOutsideClick_Liked);
}

function toggleEarlyAccessLiked() {
    var messageDiv = document.getElementById('cart-liked-modal');
    messageDiv.classList.toggle('hidden');
}

function handleOutsideClick_Liked(event) {
    const accessDiv = document.getElementById('cart-liked-modal');
    if (!accessDiv.contains(event.target) && event.target.id !== '') {
        closeAccessLiked(); 
    }
}


//CART MODAL

function showAccessShop() {
    var messageDiv = document.getElementById('cart-modal');
    messageDiv.classList.add('visible'); 
    document.addEventListener('click', handleOutsideClick_shop);
}

function closeAccessShop() {
    var messageDiv = document.getElementById('cart-modal');
    messageDiv.classList.remove('visible'); 
    document.removeEventListener('click', handleOutsideClick_shop);
}

function toggleEarlyAccessShop() {
    var messageDiv = document.getElementById('cart-modal');
    messageDiv.classList.toggle('hidden');
}

function handleOutsideClick_shop(event) {
    const accessDiv = document.getElementById('cart-modal');
    if (!accessDiv.contains(event.target) && event.target.id !== '') {
        closeAccessShop(); 
    }
}

// Funkcja do pokazywania i ukrywania hasła
function togglePassword() {
    var passwordField = document.getElementById("password");
    var repeatPasswordField = document.getElementById("repeat_password");
    var icon = event.target;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        repeatPasswordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        repeatPasswordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

//Funkcja do mozliwosci klikniecia w background przycisku i dzialania jego
document.querySelectorAll('.button-icon').forEach(button => {
    button.addEventListener('click', function() {
        if (button.querySelector('img').alt === 'user') {
            openLoginModal(); 
        }
    });
});

// Funkcja do wyświetlania panelu-gora

function toggleEarlyAccessMessage() {
    var messageDiv = document.getElementById('earlyAccessMessage');
    messageDiv.classList.toggle('hidden');
}

function showAccessDiv() {
    var messageDiv = document.getElementById('earlyAccessMessage');
    messageDiv.classList.add('visible'); 
    document.addEventListener('click', handleOutsideClick);
}

function closeAccessDiv() {
    var messageDiv = document.getElementById('earlyAccessMessage');
    messageDiv.classList.remove('visible'); 
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    const accessDiv = document.getElementById('earlyAccessMessage');
    if (!accessDiv.contains(event.target) && event.target.id !== 'header_word') {
        closeAccessDiv(); 
    }
}

//------Funcja-do-wyswietlania-panelu-category-------------------------------------------------------



// Funkcja do pokazania panelu
function showAccessDiv_category(category) {
    var messageDiv = document.getElementById('container-category-button-access');
    messageDiv.classList.add('visible'); // Pokaż panel

    // Ukryj wszystkie sekcje
    const sections = document.querySelectorAll('.category-button-access');
    sections.forEach(section => section.style.display = 'none');

    // Pokaż tylko odpowiednią sekcję
    const categorySection = document.getElementById(category + '-access');
    if (categorySection) {
        categorySection.style.display = 'block';
    }

    document.addEventListener('click', handleOutsideClick_category); // Dodaj nasłuchiwacz do kliknięcia poza panelem
}

// Funkcja do zamknięcia panelu
function closeAccessDiv_category() {
    var messageDiv = document.getElementById('container-category-button-access');
    messageDiv.classList.remove('visible'); // Ukryj panel
    document.removeEventListener('click', handleOutsideClick_category); // Usuń nasłuchiwacz kliknięcia
}

// Funkcja do obsługi kliknięcia poza panelem
function handleOutsideClick_category(event) {
    const accessDiv = document.getElementById('container-category-button-access');
    const categoryButtons = document.querySelectorAll('.category-button');

    // Jeśli kliknięcie miało miejsce poza panelem i przyciskami, zamknij panel
    if (!accessDiv.contains(event.target) && !Array.from(categoryButtons).includes(event.target)) {
        closeAccessDiv_category();
    }
}

// Dane o produktach
const products = [
    {
        id: 'yeezyslidebone',
        name: 'Yeezy Slide Bone',
        price: '175.99',
        id_kategorii: 3,
        mainImage: 'images/yeezyslidebone/YeezySlideBone1.jpg',
        thumbnails: [
            'images/yeezyslidebone/YeezySlideBone1.jpg',
            'images/yeezyslidebone/YeezySlideBone2.jpg',
            'images/yeezyslidebone/YeezySlideBone3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'yeezyslide',
        name: 'Yeezy Slide Onyx',
        price: '129.99',
        id_kategorii: 3,
        mainImage: 'images/yeezyslide/YeezySlides1.jpg',
        thumbnails: [
            'images/yeezyslide/YeezySlides1.jpg',
            'images/yeezyslide/YeezySlides2.jpg',
            'images/yeezyslide/YeezySlides3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'yeezyfoamrunner',
        name: 'Yeezy Foam Runner Carbon',
        price: '156.99',
        id_kategorii: 1,
        mainImage: 'images/foamrnr/foamrnr1.jpg',
        thumbnails: [
            'images/foamrnr/foamrnr1.jpg',
            'images/foamrnr/foamrnr2.jpg',
            'images/foamrnr/foamrnr3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'yeezy350',
        name: 'Yeezy 350 Beluga',
        price: '249.99',
        id_kategorii: 1,
        mainImage: 'images/yeezy350beluga/yeezy350beluga1.jpg',
        thumbnails: [
            'images/yeezy350beluga/yeezy350beluga1.jpg',
            'images/yeezy350beluga/yeezy350beluga2.jpg',
            'images/yeezy350beluga/yeezy350beluga3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'yeezy350zebra',
        name: 'Yeezy 350 Zebra',
        price: '360.99',
        id_kategorii: 1,
        mainImage: 'images/yeezy350zebra/yeezy3501.jpg',
        thumbnails: [
            'images/yeezy350zebra/yeezy3501.jpg',
            'images/yeezy350zebra/yeezy3502.jpg',
            'images/yeezy350zebra/yeezy3503.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },

    {
        id: 'yeezy350sesame',
        name: 'Yeezy 350 Sesame',
        price: '325.99',
        id_kategorii: 3,
        mainImage: 'images/yeezy350sesame/yeezy3501.jpg',
        thumbnails: [
            'images/yeezy350sesame/yeezy3501.jpg',
            'images/yeezy350sesame/yeezy3502.jpg',
            'images/yeezy350sesame/yeezy3503.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },

    {
        id: 'yeezy350oreo',
        name: 'Yeezy 350 Oreo',
        price: '554.99',
        id_kategorii: 1,
        mainImage: 'images/yeezy350oreo/yeezy3501.jpg',
        thumbnails: [
            'images/yeezy350oreo/yeezy3501.jpg',
            'images/yeezy350oreo/yeezy3502.jpg',
            'images/yeezy350oreo/yeezy3503.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'yeezy350darksalt',
        name: 'Yeezy 350 Dark Salt',
        price: '340.99',
        id_kategorii: 1,
        mainImage: 'images/yeezy350darksalt/yeezy3501.jpg',
        thumbnails: [
            'images/yeezy350darksalt/yeezy3501.jpg',
            'images/yeezy350darksalt/yeezy3502.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'yeezy500',
        name: 'Yeezy 500 Utility Black',
        price: '340.99',
        id_kategorii: 1,
        mainImage: 'images/yeezy500/yeezy5001.jpg',
        thumbnails: [
            'images/yeezy500/yeezy5001.jpg',
            'images/yeezy500/yeezy5002.jpg',
            'images/yeezy500/yeezy5003.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'yeezy500white',
        name: 'Yeezy 500 Bone White',
        price: '180.99',
        id_kategorii: 1,
        mainImage: 'images/yeezy500white/yeezy5001.jpg',
        thumbnails: [
            'images/yeezy500white/yeezy5001.jpg',
            'images/yeezy500white/yeezy5002.jpg',
            'images/yeezy500white/yeezy5003.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'nikeaf1supreme',
        name: 'Nike Air Force 1 Supreme',
        price: '120.99',
        id_kategorii: 1,
        mainImage: 'images/nikeaf1s/nikeaf1s.jpg',
        thumbnails: [
            'images/nikeaf1s/nikeaf1s.jpg',
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'nikeaf1',
        name: 'Nike Air Force 1',
        price: '120.99',
        id_kategorii: 3,
        mainImage: 'images/af1/af11.jpg',
        thumbnails: [
            'images/af1/af11.jpg',
            'images/af1/af12.jpg',
            'images/af1/af13.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'nikeaf1tiffany',
        name: 'Nike Air Force 1 Tiffany & Co. 1837',
        price: '1599.99',
        id_kategorii: 3,
        mainImage: 'images/af1tiffany/af1tiffany1.jpg',
        thumbnails: [
            'images/af1tiffany/af1tiffany1.jpg',
            'images/af1tiffany/af1tiffany2.jpg',
            'images/af1tiffany/af1tiffany3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkfuchsia',
        name: 'Nike Dunk Fuchsia',
        price: '156.99',
        id_kategorii: 2,
        mainImage: 'images/dunkfuchsia/dunk1.jpg',
        thumbnails: [
            'images/dunkfuchsia/dunk1.jpg',
            'images/dunkfuchsia/dunk2.jpg',
            'images/dunkfuchsia/dunk3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkvalerianblue',
        name: 'Nike Dunk Valerian Blue',
        price: '168.99',
        id_kategorii: 1,
        mainImage: 'images/dunkvalerianblue/dunk1.jpg',
        thumbnails: [
            'images/dunkvalerianblue/dunk1.jpg',
            'images/dunkvalerianblue/dunk2.jpg',
            'images/dunkvalerianblue/dunk3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkunc',
        name: 'Nike Dunk UNC',
        price: '156.99',
        id_kategorii: 1,
        mainImage: 'images/dunkunc/dunkunc1.jpg',
        thumbnails: [
            'images/dunkunc/dunkunc1.jpg',
            'images/dunkunc/dunkunc2.jpg',
            'images/dunkunc/dunkunc3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkpink',
        name: 'Nike Dunk Triple Pink',
        price: '180.99',
        id_kategorii: 2,
        mainImage: 'images/dunkpink/dunk1.jpg',
        thumbnails: [
            'images/dunkpink/dunk1.jpg',
            'images/dunkpink/dunk2.jpg',
            'images/dunkpink/dunk3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkpanda',
        name: 'Nike Dunk Panda',
        price: '84.99',
        id_kategorii: 3,
        mainImage: 'images/dunkpanda/dunk1.jpg',
        thumbnails: [
            'images/dunkpanda/dunk1.jpg',
            'images/dunkpanda/dunk2.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkblackgum',
        name: 'Nike Dunk Blackgum',
        price: '120.99',
        id_kategorii: 2,
        mainImage: 'images/dunkblackgum/dunkblackgum1.jpg',
        thumbnails: [
            'images/dunkblackgum/dunkblackgum1.jpg',
            'images/dunkblackgum/dunkblackgum2.jpg',
            'images/dunkblackgum/dunkblackgum3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkts',
        name: 'Nike Dunk Travis Scott',
        price: '1199.99',
        id_kategorii: 1,
        mainImage: 'images/dunkts/dunkts1.jpg',
        thumbnails: [
            'images/dunkts/dunkts1.jpg',
            'images/dunkts/dunkts2.jpg',
            'images/dunkts/dunkts3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },

    {
        id: 'dunkstrangelove',
        name: 'Nike Dunk Strange Love',
        price: '1499.99',
        id_kategorii: 2,
        mainImage: 'images/dunkstrangelove/dunk1.jpg',
        thumbnails: [
            'images/dunkstrangelove/dunk1.jpg',
            'images/dunkstrangelove/dunk2.jpg',
            'images/dunkstrangelove/dunk3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunksupreme',
        name: 'Nike Dunk Supreme Black',
        price: '842.99',
        id_kategorii: 3,
        mainImage: 'images/dunksupreme/dunk1.jpg',
        thumbnails: [
            'images/dunksupreme/dunk1.jpg',
            'images/dunksupreme/dunk2.jpg',
            'images/dunksupreme/dunk3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'dunkof',
        name: 'Nike Dunk Off-White Lot 50',
        price: '1567.99',
        id_kategorii: 3,
        mainImage: 'images/dunkof/dunk1.jpg',
        thumbnails: [
            'images/dunkof/dunk1.jpg',
            'images/dunkof/dunk2.jpg',
            'images/dunkof/dunk3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },

    {
        id: 'aj1cement',
        name: 'Air Jordan 1 High White Cement',
        price: '240.99',
        id_kategorii: 3,
        mainImage: 'images/aj1cement/aj11.jpg',
        thumbnails: [
            'images/aj1cement/aj11.jpg',
            'images/aj1cement/aj12.jpg',
            'images/aj1cement/aj13.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1green',
        name: 'Air Jordan 1 High Lucky Green',
        price: '279.99',
        id_kategorii: 1,
        mainImage: 'images/aj1green/aj11.jpg',
        thumbnails: [
            'images/aj1green/aj11.jpg',
            'images/aj1green/aj12.jpg',
            'images/aj1green/aj13.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1taxi',
        name: 'Air Jordan 1 High Taxi',
        price: '199.99',
        id_kategorii: 1,
        mainImage: 'images/aj1taxi/aj11.jpg',
        thumbnails: [
            'images/aj1taxi/aj11.jpg',
            'images/aj1taxi/aj12.jpg',
            'images/aj1taxi/aj13.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1pink',
        name: 'Air Jordan 1 High Washed Pink',
        price: '252.99',
        id_kategorii: 2,
        mainImage: 'images/aj1pink/aj11.jpg',
        thumbnails: [
            'images/aj1pink/aj11.jpg',
            'images/aj1pink/aj12.jpg',
            'images/aj1pink/aj13.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1unc',
        name: 'Air Jordan 1 High University Blue (UNC)',
        price: '484.99',
        id_kategorii: 1,
        mainImage: 'images/aj1unc/aj11.jpg',
        thumbnails: [
            'images/aj1unc/aj11.jpg',
            'images/aj1unc/aj12.jpg',
            'images/aj1unc/aj13.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1bubblegum',
        name: 'Air Jordan 1 High Atmosphere Bubble Gum',
        price: '250.99',
        id_kategorii: 2,
        mainImage: 'images/aj1bubblegum/aj11.jpg',
        thumbnails: [
            'images/aj1bubblegum/aj11.jpg',
            'images/aj1bubblegum/aj12.jpg',
            'images/aj1bubblegum/aj13.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1balvin',
        name: 'Air Jordan 1 High J. Balvin',
        price: '620.99',
        id_kategorii: 3,
        mainImage: 'images/aj1balvin/aj1balvin1.jpg',
        thumbnails: [
            'images/aj1balvin/aj1balvin1.jpg',
            'images/aj1balvin/aj1balvin2.jpg',
            'images/aj1balvin/aj1balvin3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1ts',
        name: 'Air Jordan 1 High Travis Scott',
        price: '2409.99',
        id_kategorii: 1,
        mainImage: 'images/aj1ts/aj1ts1.jpg',
        thumbnails: [
            'images/aj1ts/aj1ts1.jpg',
            'images/aj1ts/aj1ts2.jpg',
            'images/aj1ts/aj1ts3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1dior',
        name: 'Air Jordan 1 High Dior',
        price: '14199.99',
        id_kategorii: 3,
        mainImage: 'images/aj1dior/aj1dior1.jpg',
        thumbnails: [
            'images/aj1dior/aj1dior1.jpg',
            'images/aj1dior/aj1dior2.jpg',
            'images/aj1dior/aj1dior3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj1of',
        name: 'Air Jordan 1 High Off-White NRG',
        price: '8439.99',
        id_kategorii: 3,
        mainImage: 'images/aj1of/aj1of1.jpg',
        thumbnails: [
            'images/aj1of/aj1of1.jpg',
            'images/aj1of/aj1of2.jpg',
            'images/aj1of/aj1of3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4whitethunder',
        name: 'Air Jordan 4 White Thunder',
        price: '190.99',
        id_kategorii: 3,
        mainImage: 'images/aj4whitethunder/aj4whitethunder1.jpg',
        thumbnails: [
            'images/aj4whitethunder/aj4whitethunder1.jpg',
            'images/aj4whitethunder/aj4whitethunder2.jpg',
            'images/aj4whitethunder/aj4whitethunder3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4cacao',
        name: 'Air Jordan 4 Cacao Wow',
        price: '260.99',
        id_kategorii: 3,
        mainImage: 'images/aj4cacao/aj4cacao1.jpg',
        thumbnails: [
            'images/aj4cacao/aj4cacao1.jpg',
            'images/aj4cacao/aj4cacao2.jpg',
            'images/aj4cacao/aj4cacao3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4military',
        name: 'Air Jordan 4 Military Black',
        price: '530.99',
        id_kategorii: 3,
        mainImage: 'images/aj4military/aj4military1.jpg',
        thumbnails: [
            'images/aj4military/aj4military1.jpg',
            'images/aj4military/aj4military2.jpg',
            'images/aj4military/aj4military3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4metallicgold',
        name: 'Air Jordan 4 Metallic Gold',
        price: '264.99',
        id_kategorii: 3,
        mainImage: 'images/aj4metallicgold/aj4metallicgold1.jpg',
        thumbnails: [
            'images/aj4metallicgold/aj4metallicgold1.jpg',
            'images/aj4metallicgold/aj4metallicgold2.jpg',
            'images/aj4metallicgold/aj4metallicgold3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4metallicgreen',
        name: 'Air Jordan 4 Metallic Green',
        price: '1155.99',
        id_kategorii: 3,
        mainImage: 'images/aj4mgreen/aj4mgreen1.jpg',
        thumbnails: [
            'images/aj4mgreen/aj4mgreen1.jpg',
            'images/aj4mgreen/aj4mgreen2.jpg',
            'images/aj4mgreen/aj4mgreen3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4metallicorange',
        name: 'Air Jordan 4 Metallic Orange',
        price: '1155.99',
        id_kategorii: 3,
        mainImage: 'images/aj4morange/aj4morange1.jpg',
        thumbnails: [
            'images/aj4morange/aj4morange1.jpg',
            'images/aj4morange/aj4morange2.jpg',
            'images/aj4morange/aj4morange3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4ts',
        name: 'Air Jordan 4 Cactus Jack',
        price: '2049.99',
        id_kategorii: 1,
        mainImage: 'images/aj4ts/aj4ts1.jpg',
        thumbnails: [
            'images/aj4ts/aj4ts1.jpg',
            'images/aj4ts/aj4ts2.jpg',
            'images/aj4ts/aj4ts3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4bcat',
        name: 'Air Jordan 4 Black Cat',
        price: '1350.99',
        id_kategorii: 1,
        mainImage: 'images/aj4bcat/aj4bcat1.jpg',
        thumbnails: [
            'images/aj4bcat/aj4bcat1.jpg',
            'images/aj4bcat/aj4bcat2.jpg',
            'images/aj4bcat/aj4bcat3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'aj4kaws',
        name: 'Air Jordan 4 Kaws Gray',
        price: '3375.99',
        id_kategorii: 1,
        mainImage: 'images/aj4kaws/aj4kaws1.jpg',
        thumbnails: [
            'images/aj4kaws/aj4kaws1.jpg',
            'images/aj4kaws/aj4kaws2.jpg',
            'images/aj4kaws/aj4kaws3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'newbalance550unc',
        name: 'New Balance 550 UNC',
        price: '239.99',
        id_kategorii: 1,
        mainImage: 'images/newbalance550unc/newbalance5501.jpg',
        thumbnails: [
            'images/newbalance550unc/newbalance5501.jpg',
            'images/newbalance550unc/newbalance5502.jpg',
            'images/newbalance550unc/newbalance5503.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'newbalance550pink',
        name: 'New Balance 550 White Pink Sea Salt',
        price: '119.99',
        id_kategorii: 2,
        mainImage: 'images/newbalance550pink/newbalance5501.jpg',
        thumbnails: [
            'images/newbalance550pink/newbalance5501.jpg',
            'images/newbalance550pink/newbalance5502.jpg',
            'images/newbalance550pink/newbalance5503.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'newbalance550white',
        name: 'New Balance 550 White Grey',
        price: '144.99',
        id_kategorii: 3,
        mainImage: 'images/newbalance550white/newbalance5501.jpg',
        thumbnails: [
            'images/newbalance550white/newbalance5501.jpg',
            'images/newbalance550white/newbalance5502.jpg',
            'images/newbalance550white/newbalance5503.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'newbalance530silver',
        name: 'New Balance 530 Silver Navy',
        price: '156.99',
        id_kategorii: 1,
        mainImage: 'images/newbalance530silver/newbalance5301.jpg',
        thumbnails: [
            'images/newbalance530silver/newbalance5301.jpg',
            'images/newbalance530silver/newbalance5302.jpg',
            'images/newbalance530silver/newbalance5303.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'newbalance530pink',
        name: 'New Balance 530 Pink Sugar',
        price: '156.99',
        id_kategorii: 2,
        mainImage: 'images/newbalance530pink/newbalance5301.jpg',
        thumbnails: [
            'images/newbalance530pink/newbalance5301.jpg',
            'images/newbalance530pink/newbalance5302.jpg',
            'images/newbalance530pink/newbalance5303.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    
    
];

fetch('add_products.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(products),
})
    .then(response => response.json())
    .then(data => console.log('Dodano produkty:', data))
    .catch(error => console.error('Błąd:', error));

// Przechowywanie produktów w koszyku
let cart = [];

// Funkcja tworząca HTML dla każdego produktu
function createProductHTML(product) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-preview');

    // Tworzymy miniaturę produktu
    const img = document.createElement('img');
    img.classList.add('product-thumbnail');
    img.src = product.mainImage;
    img.alt = product.name;
    img.onclick = () => openProductWindow(product.id);
    productContainer.appendChild(img);

    // Dodajemy nazwę i cenę
    const h3 = document.createElement('h3');
    h3.innerText = product.name;
    const p = document.createElement('p');
    p.classList.add('price');
    p.innerText = product.price;

    productContainer.appendChild(h3);
    productContainer.appendChild(p);

    document.getElementById('products-container').appendChild(productContainer);
}

// Funkcja do otwierania okna modalnego dla wybranego produktu
function openProductWindow(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('modal-template').cloneNode(true);
    modal.style.display = 'block';
    modal.removeAttribute('id'); // Usuwamy id z kopii

    // Zablokowanie przewijania tła
    document.body.style.overflow = 'hidden';

    // Uzupełniamy dane w oknie modalnym
    modal.querySelector('.product-name').innerText = product.name;
    modal.querySelector('.price').innerText = product.price;
    modal.querySelector('.main-product-image').src = product.mainImage;

    // Dodajemy miniaturki zdjęć
    const thumbnailsContainer = modal.querySelector('.product-thumbnails');
    product.thumbnails.forEach(thumbnail => {
        const thumbImg = document.createElement('img');
        thumbImg.src = thumbnail;
        thumbImg.onclick = () => changeImage(modal, thumbnail); // Przekazujemy modal jako kontekst
        thumbnailsContainer.appendChild(thumbImg);
    });

    // Dodajemy opcje rozmiarów
    const sizeOptions = modal.querySelector('.size-options');
    product.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.innerText = size;
        sizeButton.onclick = () => {
            // Oznacz aktywny rozmiar
            sizeOptions.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            sizeButton.classList.add('active');
            // Usuwamy ewentualny komunikat o błędzie
            const errorText = modal.querySelector('.size-error');
            if (errorText) errorText.remove();
        };
        sizeOptions.appendChild(sizeButton);
    });

    // Dodajemy przycisk dodania do koszyka
    const addToCartButton = modal.querySelector('.add-to-cart');
    addToCartButton.onclick = () => addToCart(product, modal);  // Przekazujemy modal, żeby sprawdzić rozmiar

    // Dodanie przycisku "Dodaj do ulubionych" w oknie modalnym
    const addToFavoritesButton = modal.querySelector('.add-to-favorites');
    addToFavoritesButton.onclick = () => addToFavorites(product);  // Dodajemy do ulubionych

    // Dodajemy przycisk zamknięcia
    const closeButton = modal.querySelector('.close-modal');
    closeButton.onclick = () => closeModal(modal); // Zamknięcie modalu po kliknięciu w przycisk 'x'

    // Zamknięcie modalu, jeśli użytkownik kliknie poza oknem
    modal.addEventListener('click', (e) => {
        if (!modal.querySelector('.modal-content').contains(e.target)) {
            closeModal(modal);
        }
    });

    // Dodanie modal do body
    document.body.appendChild(modal);
}

// Funkcja do zamknięcia modalu
function closeModal(modal) {
    modal.style.display = 'none'; // Ukrywa modal
    document.body.style.overflow = ''; // Przywraca przewijanie tła
}

// Funkcja zmieniająca główne zdjęcie
function changeImage(modal, src) {
    const mainImage = modal.querySelector('.main-product-image'); // Wyszukujemy w kontekście modalnego okna
    mainImage.src = src; // Zmieniamy src głównego zdjęcia
}

// Funkcja dodająca produkt do koszyka
function addToCart(product, modal) {
    const sizeSelected = modal.querySelector('.size-options button.active');  // Sprawdzamy, czy wybrano rozmiar

    if (!sizeSelected) {
        // Jeśli nie wybrano rozmiaru, wyświetlamy komunikat o błędzie w oknie modalnym
        let errorText = modal.querySelector('.size-error');
        if (!errorText) {
            errorText = document.createElement('p');
            errorText.classList.add('size-error');
            errorText.style.color = 'red';
            errorText.innerText = 'Proszę wybrać rozmiar!';
            modal.querySelector('.size-options').appendChild(errorText);
        }
        return;  // Zatrzymujemy dodawanie do koszyka
    }

    const selectedSize = sizeSelected.innerText; // Pobieramy wybrany rozmiar

    // Dodajemy produkt do koszyka z wybranym rozmiarem
    cart.push({ ...product, selectedSize });
    
    // Wyświetlamy informację o dodaniu do koszyka w prawym górnym rogu modalu
    const cartInfo = document.createElement('div');
    cartInfo.classList.add('cart-info');
    cartInfo.style.position = 'absolute';
    cartInfo.style.top = '10px';
    cartInfo.style.right = '10px';
    cartInfo.style.backgroundColor = 'green';
    cartInfo.style.color = 'white';
    cartInfo.style.padding = '5px 10px';
    cartInfo.style.borderRadius = '5px';
    cartInfo.innerText = `${product.name} (Rozmiar: ${selectedSize}) dodano do koszyka!`;
    
    modal.appendChild(cartInfo);

    // Znikanie informacji po 3 sekundach
    setTimeout(() => {
        cartInfo.remove();
    }, 3000);  // 3000 ms = 3 sekundy

    // Aktualizujemy liczbę produktów w koszyku
    updateCartCount();
    
    // Odświeżamy widok koszyka dynamicznie
    updateCartDynamic();
}


// Funkcja aktualizująca liczbę produktów w koszyku
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Funkcja otwierająca modal z koszykiem
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
    updateCart(); // Aktualizujemy zawartość koszyka
}

// Funkcja zamykająca modal z koszykiem
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Funkcja usuwająca przedmiot z koszyka
function removeFromCart(index) {
    cart.splice(index, 1); // Usuwamy przedmiot z tablicy `cart`
    updateCart(); // Aktualizujemy zawartość koszyka w modalu
    updateCartCount(); // Aktualizujemy liczbę produktów w koszyku
}


function updateCartDynamic() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Czyścimy poprzednią zawartość

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Twój koszyk jest pusty.</p>';
        cartTotalContainer.innerHTML = '';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.style.display = 'flex';
            cartItem.style.justifyContent = 'space-between';
            cartItem.style.alignItems = 'center';
            cartItem.style.marginBottom = '10px';

            // Obrazek produktu
            const itemImage = document.createElement('img');
            itemImage.src = `${item.mainImage}`;
            itemImage.alt = item.name;
            itemImage.style.width = '50px';
            itemImage.style.marginRight = '10px';
            cartItem.appendChild(itemImage);

            // Nazwa i rozmiar produktu
            const itemDetails = document.createElement('div');
            itemDetails.style.flexGrow = '1';
            itemDetails.innerText = `${item.name} (Rozmiar: ${item.selectedSize})`;
            cartItem.appendChild(itemDetails);

            // Cena produktu
            const itemPrice = document.createElement('p');
            itemPrice.innerText = `${item.price}`;
            itemPrice.style.marginRight = '10px';
            cartItem.appendChild(itemPrice);

            // Przycisk usuwania
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Usuń';
            removeButton.style.backgroundColor = 'red';
            removeButton.style.color = 'white';
            removeButton.style.border = 'none';
            removeButton.style.padding = '5px 10px';
            removeButton.style.borderRadius = '5px';
            removeButton.style.cursor = 'pointer';

            // Obsługa kliknięcia w przycisk usuwania
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1); // Usuwamy element z koszyka
                updateCartDynamic(); // Dynamicznie odświeżamy widok koszyka
                updateCartCount(); // Aktualizujemy licznik produktów
            });
            cartItem.appendChild(removeButton);

            // Dodanie elementu do kontenera koszyka
            cartItemsContainer.appendChild(cartItem);

            // Obliczanie łącznej ceny
            total += parseFloat(item.price.replace('$', '').replace(',', ''));
        });

        // Wyświetlanie łącznej ceny
        cartTotalContainer.innerHTML = `<strong>Łączna cena: $${total.toFixed(2)}</strong>`;
    }
}

// Funkcja otwierająca modal koszyka z dynamiczną aktualizacją
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
    updateCartDynamic(); // Dynamicznie odświeżamy zawartość koszyka
}

// Inicjalizowanie strony - tworzenie produktów
window.onload = () => {
    products.forEach(createProductHTML);
};





// Tablica do przechowywania produktów w ulubionych
let favorites = [];

function addToFavorites(product) {
    if (!favorites.some(fav => fav.id === product.id)) {
        favorites.push(product); // Dodajemy produkt do ulubionych

        // Wyświetlamy powiadomienie o sukcesie
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '10px';
        notification.style.right = '10px';
        notification.style.backgroundColor = 'green';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.innerText = `${product.name} dodano do ulubionych!`;
        document.body.appendChild(notification);

        // Usunięcie powiadomienia po 3 sekundach
        setTimeout(() => notification.remove(), 3000);

        updateFavoritesDisplay(); // Aktualizowanie wyświetlania ulubionych
    } else {
        alert(`${product.name} jest już w ulubionych!`);
    }
}

// Funkcja dodająca produkt do ulubionych
function addToFavorites(product) {
    const sizeSelected = document.querySelector('.size-options button.active'); // Sprawdzamy, czy wybrano rozmiar
    if (!sizeSelected) {
        alert('Proszę wybrać rozmiar przed dodaniem do ulubionych!');
        return;
    }

    const selectedSize = sizeSelected.innerText; // Pobieramy wybrany rozmiar

    // Sprawdzamy, czy produkt o tym samym rozmiarze już istnieje w ulubionych
    if (!favorites.some(fav => fav.id === product.id && fav.selectedSize === selectedSize)) {
        favorites.push({ ...product, selectedSize }); // Dodajemy produkt z rozmiarem do ulubionych

        // Wyświetlamy powiadomienie o sukcesie
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '10px';
        notification.style.right = '10px';
        notification.style.backgroundColor = 'green';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.innerText = `${product.name} (Rozmiar: ${selectedSize}) dodano do ulubionych!`;
        document.body.appendChild(notification);

        // Usunięcie powiadomienia po 3 sekundach
        setTimeout(() => notification.remove(), 3000);

        updateFavoritesDisplay(); // Aktualizowanie wyświetlania ulubionych
    } else {
        alert(`${product.name} w rozmiarze ${selectedSize} jest już w ulubionych!`);
    }
}



// Funkcja wyświetlająca ulubione produkty
function updateFavoritesDisplay() {
    const favoritesContainer = document.getElementById('cart-liked');
    favoritesContainer.innerHTML = ''; // Czyścimy obecny widok

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>Brak ulubionych produktów.</p>';
    } else {
        favorites.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('favorite-product');

            // Obrazek produktu
            const img = document.createElement('img');
            img.src = `${product.mainImage}`;
            img.alt = product.name;
            img.style.width = '80px';
            img.style.marginRight = '10px';
            productElement.appendChild(img);

            // Nazwa produktu
            const name = document.createElement('h4');
            name.innerText = `${product.name} (Rozmiar: ${product.selectedSize})`;
            productElement.appendChild(name);

            // Cena produktu
            const price = document.createElement('p');
            price.innerText = product.price;
            productElement.appendChild(price);

            // Przycisk usuwania
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Usuń';
            removeButton.style.backgroundColor = 'red';
            removeButton.style.color = 'white';
            removeButton.style.border = 'none';
            removeButton.style.padding = '5px 10px';
            removeButton.style.borderRadius = '5px';
            removeButton.style.cursor = 'pointer';

            // Obsługa kliknięcia w przycisk usuwania
            removeButton.addEventListener('click', () => {
                favorites.splice(index, 1); // Usuwamy element z ulubionych
                updateFavoritesDisplay(); // Aktualizujemy widok ulubionych
            });

            productElement.appendChild(removeButton);

            // Przycisk dodania do koszyka
            const addToCartButton = document.createElement('button');
            addToCartButton.innerText = 'Dodaj do koszyka';
            addToCartButton.style.backgroundColor = 'blue';
            addToCartButton.style.color = 'white';
            addToCartButton.style.border = 'none';
            addToCartButton.style.padding = '5px 10px';
            addToCartButton.style.borderRadius = '5px';
            addToCartButton.style.cursor = 'pointer';

            // Obsługa kliknięcia w przycisk dodania do koszyka
            addToCartButton.addEventListener('click', () => {
                cart.push(product); // Dodajemy produkt do koszyka
                updateCartDynamic(); // Odświeżamy widok koszyka
                updateCartCount(); // Aktualizujemy licznik koszyka
                alert(`${product.name} (Rozmiar: ${product.selectedSize}) dodano do koszyka!`);
            });

            productElement.appendChild(addToCartButton);

            // Dodanie elementu produktu do kontenera ulubionych
            favoritesContainer.appendChild(productElement);
        });
    }
}

// Funkcja przenosząca wszystkie przedmioty z ulubionych do koszyka
function addFavoritesToCart() {
    if (favorites.length === 0) {
        alert('Brak ulubionych produktów do dodania do koszyka!');
        return;
    }

    favorites.forEach(product => {
        cart.push(product); // Dodajemy produkt do koszyka
    });

    favorites = []; // Czyścimy ulubione po przeniesieniu
    updateFavoritesDisplay(); // Odświeżamy widok ulubionych
    updateCartDynamic(); // Odświeżamy widok koszyka
    updateCartCount(); // Aktualizujemy licznik koszyka

    alert('Wszystkie ulubione produkty zostały dodane do koszyka!');
}


