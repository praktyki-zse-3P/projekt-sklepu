
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



function toggleEarlyAccessMessage_category() {
    var messageDiv = document.getElementById('container-category-button-access');
    messageDiv.classList.toggle('hidden');
}

function showAccessDiv_category() {
    var messageDiv = document.getElementById('container-category-button-access');
    messageDiv.classList.add('visible'); 
    document.addEventListener('click', handleOutsideClick_category);
}

function closeAccessDiv_category() {
    var messageDiv = document.getElementById('container-category-button-access');
    messageDiv.classList.remove('visible'); 
    document.removeEventListener('click', handleOutsideClick_category);
}

function handleOutsideClick_category(event) {
    const accessDiv = document.getElementById('container-category-button-access');
    if (!accessDiv.contains(event.target) && event.target.id !== 'category-button') {
        closeAccessDiv_category(); 
    }
}