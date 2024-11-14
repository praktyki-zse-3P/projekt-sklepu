
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


function showAccessDiv() {
    document.getElementById('earlyAccessMessage').classList.remove('hidden');
}
