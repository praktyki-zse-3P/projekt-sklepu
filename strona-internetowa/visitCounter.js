// Funkcja do pobierania wartości ciasteczka
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Funkcja do ustawiania ciasteczka
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Obsługa liczby odwiedzin
function updateVisitCount() {
    // Pobierz istniejące ciasteczko
    let visitCount = getCookie("visitCount");

    if (visitCount) {
        // Jeśli ciasteczko istnieje, zwiększ licznik
        visitCount = parseInt(visitCount) + 1;
    } else {
        // Jeśli ciasteczko nie istnieje, ustaw początkową wartość na 1
        visitCount = 1;
    }

    // Zapisz nową wartość ciasteczka
    setCookie("visitCount", visitCount, 365);

    // Wyświetl liczbę odwiedzin w elemencie ikony konta
    const userInfo = document.getElementById("userInfo");
    if (userInfo) {
        const visitBadge = document.getElementById("visitBadge");
        if (visitBadge) {
            visitBadge.textContent = visitCount; // Zaktualizuj licznik
        } else {
            // Dodaj element wyświetlający liczbę odwiedzin
            const badge = document.createElement("span");
            badge.id = "visitBadge";
            badge.textContent = visitCount;
            userInfo.appendChild(badge);
        }
    }
}


// Wywołaj funkcję przy ładowaniu strony
document.addEventListener("DOMContentLoaded", updateVisitCount);
