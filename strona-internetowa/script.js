
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
        id: 'yeezy350',
        name: 'Yeezy 350 Beluga',
        price: '$249.99',
        mainImage: 'yeezy350beluga/yeezy350beluga1.jpg',
        thumbnails: [
            'yeezy350beluga/yeezy350beluga1.jpg',
            'yeezy350beluga/yeezy350beluga2.jpg',
            'yeezy350beluga/yeezy350beluga3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 'nikeshox',
        name: 'Nike Shox TL Black',
        price: '$199.99',
        mainImage: 'nikeshox/NikeShox1.jpg',
        thumbnails: [
            'nikeshox/NikeShox1.jpg',
            'nikeshox/NikeShox2.jpg',
            'nikeshox/NikeShox3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },

    {
        id: 'yeezyslied',
        name: 'Yeezy Slide',
        price: '$149.99',
        mainImage: 'yeezyslide/YeezySlides1.jpg',
        thumbnails: [
            'yeezyslide/YeezySlides1.jpg',
            'yeezyslide/YeezySlides2.jpg',
            'yeezyslide/YeezySlides3.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    }
];

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

// Funkcja otwierająca okno modalne dla wybranego produktu
function openProductWindow(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('modal-template').cloneNode(true);
    modal.style.display = 'block';
    modal.removeAttribute('id'); // Usuwamy id z kopii

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
    };
    sizeOptions.appendChild(sizeButton);
});

    // Dodajemy modal do body
    document.body.appendChild(modal);

    // Dodajemy event dla przycisku zamykania
    modal.querySelector('.close-btn').onclick = () => closeModal(modal);
}

// Funkcja zmieniająca główne zdjęcie
function changeImage(modal, src) {
    const mainImage = modal.querySelector('.main-product-image'); // Wyszukujemy w kontekście modalnego okna
    mainImage.src = src; // Zmieniamy src głównego zdjęcia
}

// Funkcja zamykająca modal
function closeModal(modal) {
    modal.style.display = 'none';
    modal.remove(); // Usuwamy modal z DOM
}

// Funkcja dodająca produkt do koszyka
function addToCart() {
    alert('Produkt dodany do koszyka!');
}

// Inicjalizowanie strony - tworzenie produktów
window.onload = () => {
    products.forEach(createProductHTML);
};


function showNotification(message) {
    const container = document.getElementById('notification-container');

    // Tworzymy nowe powiadomienie
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;

    // Dodajemy powiadomienie do kontenera
    container.appendChild(notification);

    // Automatyczne usunięcie powiadomienia po 3 sekundach
    setTimeout(() => {
        notification.style.opacity = '0'; // Efekt zanikania
        setTimeout(() => notification.remove(), 500); // Usuń po efektach
    }, 3000);
}

// Wywołanie przy dodaniu do koszyka
function addToCart() {
    showNotification('Produkt dodany do koszyka!');
}







let cart = []; // Koszyk przechowuje produkty jako obiekty

// Dodaj produkt do koszyka
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    // Sprawdź, czy produkt już istnieje w koszyku
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1; // Zwiększ ilość
    } else {
        cart.push({ ...product, quantity: 1 }); // Dodaj nowy produkt
    }

    updateCartCount();
    showNotification('Dodano do koszyka!');
}

// Aktualizuj licznik produktów w koszyku
function updateCartCount() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Otwórz modal koszyka
function openCart() {
    const modal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Wyczyszczenie listy produktów
    cartItemsContainer.innerHTML = '';

    // Wypełnij szczegóły koszyka
    let total = 0;
    cart.forEach(item => {
        const productRow = document.createElement('div');
        productRow.classList.add('cart-item');
        productRow.innerHTML = `
            <span>${item.name}</span>
            <span>${item.quantity} x ${item.price}</span>
            <button onclick="removeFromCart('${item.id}')">Usuń</button>
        `;
        cartItemsContainer.appendChild(productRow);

        total += parseFloat(item.price.replace('$', '')) * item.quantity;
    });

    // Zaktualizuj łączną kwotę
    cartTotal.innerText = `$${total.toFixed(2)}`;

    modal.style.display = 'block';
}

// Zamknij modal koszyka
function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

// Usuń produkt z koszyka
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    openCart(); // Odśwież widok koszyka
}

// Przejdź do kasy
function checkout() {
    if (cart.length === 0) {
        alert('Koszyk jest pusty!');
        return;
    }
    alert('Dziękujemy za zakupy!');
    cart = []; // Wyczyść koszyk po zakończeniu zakupów
    updateCartCount();
    closeCart();
}