document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll(".section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function scrollActive() {
        const scrollY = window.scrollY + 50; // Ajustement si nécessaire

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50; // Ajustez la valeur de décalage si nécessaire
            const sectionId = current.getAttribute("id");

            // Si la section est visible dans la fenêtre d'affichage
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Ajouter la classe 'active-link' au lien correspondant
                document.querySelector(".nav-menu a[href*=" + sectionId + "]")?.classList.add("active-link");
            } else {
                // Supprimer la classe 'active-link' pour les liens non actifs
                document.querySelector(".nav-menu a[href*=" + sectionId + "]")?.classList.remove("active-link");
            }
        });
    }

    // Ajoutez un écouteur d'événement sur le défilement pour appeler la fonction scrollActive
    window.addEventListener("scroll", scrollActive);

    // Assurez-vous que la fonction scrollActive est appelée une fois au chargement de la page
    scrollActive();



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

    leftBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = screenshots.length - 1;
        }
        updateCarousel();
    });

    rightBtn.addEventListener('click', function () {
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

function closeWelcomeMessage() {
    document.getElementById('welcome-message').style.display = 'none';
}


function openModal(projectId) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");

    // Affiche la modale
    modal.style.display = "block";

    switch (projectId) {
        case 1:
            modalImg.src = "Couverture-v6Protect-1.png";
            modalTitle.textContent = "Alternance";
            break;
        case 2:
            modalImg.src = "Couverture-Soan-1.png";
            modalTitle.textContent = "Stage chez Soan";
            break;

    }
}

const closeModalBtn = document.getElementsByClassName("close")[0];
closeModalBtn.onclick = function () {
    document.getElementById("myModal").style.display = "none";
}

