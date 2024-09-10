// Ajuste la vitesse du défilement en changeant la durée de l'animation CSS si nécessaire.
const track = document.querySelector(".logo-track");

// Répète les logos pour un défilement continu
track.innerHTML += track.innerHTML;

const body = document.querySelector("body"),
      toggleSwitch = document.getElementById("toggle-switch");

// Ajouter un écouteur d'événements pour le bouton de changement de thème
toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// Vérifiez si ScrollReveal est bien chargé
if (typeof ScrollReveal !== 'undefined') {
    // Configuration ScrollReveal pour des animations depuis le haut
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    // Révèle des éléments avec les classes appropriées
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".Informations", { delay: 200 });
    sr.reveal(".text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 320 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    // Configuration ScrollReveal pour des animations depuis la gauche
    const srLeft = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    // Configuration ScrollReveal pour des animations depuis la droite
    const srRight = ScrollReveal({
        origin: "right",  // Corrected from "left" to "right" for right reveal
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    srRight.reveal(".skill", { delay: 100 });
    srRight.reveal(".skill-box", { delay: 100 });
} else {
    console.error('ScrollReveal is not loaded.');
}

/*---Liens activés---*/

const sections = document.querySelectorll(".section [id] ");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const selectionHeight = current.offsetHeight,

            sectionTop = curent.offsetTop - 50,
            ection = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classicList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classicList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// Sélectionne tous les liens de navigation
const navLinks = document.querySelectorAll('.nav-link');

// Fonction pour mettre à jour la classe active des liens
function updateActiveLink() {
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            // Vérifie si la section est dans la vue
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

// Écoute les événements de défilement pour mettre à jour les liens actifs
window.addEventListener('scroll', updateActiveLink);

// Appelle la fonction une première fois pour mettre à jour au chargement
updateActiveLink();

console.log("JavaScript est bien relié !");

/* ----------------JAVASCRIPT Pour les screens qui défilent----------------*/
const container = document.querySelector('.screenshots-container');
let scrollAmount = 0;

// Fonction pour défiler vers la gauche
function scrollLeft() {
    container.scrollBy({
        top: 0,
        left: -200, // Ajustez ce nombre selon la largeur de défilement souhaitée
        behavior: 'smooth'
    });
}

// Fonction pour défiler vers la droite
function scrollRight() {
    container.scrollBy({
        top: 0,
        left: 200, // Ajustez ce nombre selon la largeur de défilement souhaitée
        behavior: 'smooth'
    });
}


// -------------------- COMPTE À REBOURS

// Sélectionne l'élément qui affiche le compte à rebours
const countdownElement = document.getElementById('countdown-number');
const countdownCircle = document.getElementById('countdown-circle');

// Temps de départ en secondes
let timeLeft = 30;

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
    countdownElement.textContent = timeLeft; // Affiche le temps restant

    // Change la couleur du cercle pour les 3 dernières secondes
    if (timeLeft <= 3) {
        countdownCircle.classList.add('red'); // Ajoute la classe rouge
    }

    // Vérifie si le temps est écoulé
    if (timeLeft > 0) {
        timeLeft--; // Diminue le temps restant
    } else {
        clearInterval(countdownInterval); // Arrête le compte à rebours
        countdownElement.textContent = "0"; // Fixe à zéro une fois terminé
    }
}

// Exécute la fonction updateCountdown toutes les secondes
const countdownInterval = setInterval(updateCountdown, 1000);

// Appelle immédiatement la fonction pour afficher la première valeur
updateCountdown();



