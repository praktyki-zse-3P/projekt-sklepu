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











