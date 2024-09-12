document.addEventListener('DOMContentLoaded', function () {

    let sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
    let navLinks = document.querySelectorAll('.nav-link'); // Sélectionne tous les liens de navigation

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Si la position de défilement dépasse le sommet de la section et est en dessous du bas de la section
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id'); // Récupère l'ID de la section en cours
        }
    });

    // Ajoute la classe active au lien correspondant à la section visible
    navLinks.forEach(link => {
        link.classList.remove('active-link'); // Supprime la classe active de tous les liens
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active-link'); // Ajoute la classe active au lien en cours
        }
    });

    // Déclaration des variables pour le changement de thème
    const toggleSwitch = document.getElementById("toggle-switch");
    if (toggleSwitch) {
        toggleSwitch.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    } else {
        console.error("Element with ID 'toggle-switch' not found.");
    }

    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const screenshotsContainer = document.querySelector('.screenshots-container');
    const screenshots = document.querySelectorAll('.screenshot');
    
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        screenshotsContainer.style.transform = `translateX(${offset}%)`;
    }

    leftBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = screenshots.length - 1;
        }
        updateCarousel();
    });

    rightBtn.addEventListener('click', function() {
        if (currentIndex < screenshots.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    
    // Compte à rebours
    const countdownElement = document.getElementById('countdown-number');
    const countdownCircle = document.getElementById('countdown-circle');
    if (countdownElement && countdownCircle) {
        let timeLeft = 30;

        function updateCountdown() {
            countdownElement.textContent = timeLeft;

            if (timeLeft <= 3) {
                countdownCircle.classList.add('red');
            }

            if (timeLeft > 0) {
                timeLeft--;
            } else {
                clearInterval(countdownInterval);
                countdownElement.textContent = "0";
            }
        }

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Appel initial pour afficher la première valeur
    } else {
        console.error("Countdown elements not found.");
    }
});
