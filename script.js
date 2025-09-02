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
    
    ///?? Ajoutez un écouteur d'événement sur le défilement pour appeler la fonction scrollActive
    window.addEventListener("scroll", scrollActive);

    //?? Assurez-vous que la fonction scrollActive est appelée une fois au chargement de la page
    scrollActive();

    ///?? Déclaration des variables pour le changement de thème
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


    ///?? Fonction de défilement horizontal
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
    

    // Compte à rebours pour me contacter
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




///?? Sélection de tous les liens de navigation
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



// Counter
document.addEventListener("DOMContentLoaded", () => {
    const instagramFollowers = 11 700; // Abonnés Instagram
    const tiktokFollowers = 138 000; // Abonnés TikTok
  
    const instagramCount = document.getElementById("instagramCount");
    const tiktokCount = document.getElementById("tiktokCount");
    let animationTriggered = false; // Variable pour vérifier si l'animation a déjà été lancée
  
    const animateCount = (element, target) => {
      let count = 0;
      const step = Math.ceil(target / 100); // Nombre d'incréments pour atteindre la cible
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target; // Arrêter l'incrément à la cible
          clearInterval(interval);
          element.textContent = `${count.toLocaleString()} abonnés`; // Ajouter "abonnés"
        } else {
          element.textContent = count.toLocaleString(); // Afficher le nombre actuel
        }
      }, 25); // Intervalle entre chaque incrément
    };
  
    const handleScroll = () => {
      const counters = document.querySelectorAll(".counter"); // Sélecteur pour toutes les sections de compteur
      let allCountersVisible = true; // Pour vérifier si tous les compteurs sont visibles
  
      counters.forEach(counter => {
        const counterTop = counter.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Vérifier si la section de compteur est visible dans la fenêtre
        if (counterTop > windowHeight || counterTop < 0) {
          allCountersVisible = false; // Si un compteur est hors de la fenêtre, arrêter l'animation
        }
      });
  
      // Lancer l'animation si tous les compteurs sont visibles et si elle n'a pas déjà été lancée
      if (allCountersVisible && !animationTriggered) {
        animationTriggered = true; // Empêche de rejouer l'animation
        animateCount(instagramCount, instagramFollowers);
        animateCount(tiktokCount, tiktokFollowers);
      }
    };
  
    // Ajouter un écouteur pour le défilement
    window.addEventListener("scroll", handleScroll);
  });
  

  
/// Souris en pause durant le déroulement
  document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('mouseover', () => {
        slider.classList.add('paused');
    });

    slider.addEventListener('mouseout', () => {
        slider.classList.remove('paused');
    });
});


/// Animation du mot "Bienvenue"
  document.addEventListener("DOMContentLoaded", function () {
    const text = "Bienvenue !";
    const typedTextElement = document.querySelector(".typedText");
    let i = 0;

    function typeText() {
        if (i < text.length) {
            typedTextElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeText, 200); // Vitesse de frappe (200ms par caractère)
        }
    }

    typeText();
});


/// Fil conducteur
const filConducteur = document.getElementById('fil-conducteur');
const section = document.getElementById('Parcoursscolaire'); // Section contenant la barre et les blocs

let reverse = false; // Indique si le fil doit faire le chemin inverse

// Fonction de gestion du défilement
function handleScroll() {
  // Obtenir les dimensions de la section
  const sectionTop = section.getBoundingClientRect().top;
  const sectionHeight = section.offsetHeight;
  const windowHeight = window.innerHeight;

  // Vérifier si la section est visible
  if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
    // Facteur pour accélérer le défilement (ex. 2.8 pour très rapide)
    const accelerationFactor = 2.8;

    // Calculer la progression relative à la section visible
    let progress = Math.min(
      Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0),
      1
    );

    // Appliquer le facteur d'accélération
    progress = Math.min(progress * accelerationFactor, 1);

    // Inverser la progression si nécessaire
    if (reverse) {
      progress = 1 - progress; // Inverser le sens du fil
    }

    // Mettre à jour la largeur de la barre
    filConducteur.style.width = `${progress * 100}%`;

    // Basculer la direction quand on atteint 0% ou 100%
    if (progress === 1 && !reverse) {
      reverse = true; // Inverser la direction
    } else if (progress === 0 && reverse) {
      reverse = false; // Revenir à l'avancement normal
    }
  } else {
    // Réinitialiser la barre si la section n'est pas visible
    filConducteur.style.width = '0';
    reverse = false; // Revenir à l'état normal
  }
}


// Ajouter un écouteur pour le défilement
window.addEventListener('scroll', handleScroll);

// Animation blocs
const blocs = document.querySelectorAll('.bloc');

// Fonction d'activation des blocs
function activateBlocs() {
  blocs.forEach((bloc) => {
    const blocTop = bloc.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Ajouter la classe active si le bloc est visible
    if (blocTop < windowHeight * 0.8) {
      bloc.classList.add('active');
    }
  });
}

// Écouter l'événement de défilement
window.addEventListener('scroll', activateBlocs);


/// Mon année 2024/2025
const points = document.querySelectorAll(".timeline-point");
const tooltip = document.querySelector(".tooltip");
const tooltipTitle = document.querySelector(".tooltip-title");
const tooltipDescription = document.querySelector(".tooltip-description");
const timelineSection = document.querySelector(".timeline-section"); // Cible la section contenant la timeline

// Fonction pour afficher la tooltip
points.forEach(point => {
    point.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
        tooltipTitle.textContent = point.getAttribute("data-title");
        tooltipDescription.textContent = point.getAttribute("data-description");

        const rect = point.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;

        tooltip.style.left = `${rect.left + rect.width / 2 - tooltipWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltipHeight - 10}px`;
    });

    point.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});

// Fonction pour déclencher l'animation des points et des dates
const animateTimeline = () => {
    points.forEach((point, index) => {
        setTimeout(() => {
            point.classList.add("visible"); // Affiche les points
            const date = document.querySelectorAll(".timeline-date")[index]; // Sélectionne la date correspondante
            if (date) {
                date.classList.add("visible"); // Affiche la date
            }
        }, index * 1000); // 0ms, 1000ms, 2000ms, 3000ms
    });
};

// Observer pour détecter lorsque la section devient visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Si la section est visible
            animateTimeline(); // Lance l'animation des points et dates
            observer.disconnect(); // Déconnecte l'observer après l'animation
        }
    });
}, {
    threshold: 0.5 // Quand 50% de la section est visible, l'animation démarre
});

// Observer la section de la timeline
observer.observe(timelineSection);

