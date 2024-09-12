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

    const modal = document.getElementById('modal');
    const modalContainer = document.getElementById('modal-container');
    const closeBtn = document.querySelector('.close-btn');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const carouselContainer = document.getElementById('modal-carousel');

    // Fonction pour ouvrir le modal
    window.openModal = (projectId) => {
        // Définir les images pour chaque projet
        const projectImages = {
            1: ["v6protect-1.png", "v6protect-2.png", "v6protect-3.png"], // Exemple d'images pour le projet 1
            2: ["soan-1.png", "soan-2.png"], // Exemple d'images pour le projet 2
            // Ajouter d'autres projets ici
        };

        // Charger les images dans le modal
        const images = projectImages[projectId] || [];
        carouselContainer.innerHTML = images.map(src => `<img src="${src}" alt="Image" class="screenshot">`).join('');

        // Afficher le modal
        modalContainer.style.display = 'block';
    };

    // Fonction pour fermer le modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modalContainer.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });

    // Fonction de défilement horizontal
    const scrollAmount = 300; // Ajuster la valeur selon les besoins
    function scrollLeft() {
        carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    function scrollRight() {
        carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    if (leftBtn) {
        leftBtn.addEventListener('click', scrollLeft);
    }

    if (rightBtn) {
        rightBtn.addEventListener('click', scrollRight);
    }
    
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


// Sélection de tous les liens de navigation
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // Appel initial pour mettre à jour les liens au chargement
