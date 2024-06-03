/* ----- FONCTION POUR COPIER LE DISCORD ----- */

function copierTexte() {
  /* Sélectionne l'élément contenant le texte à copier */
  var texteACopier = "quentin.bto";
  /* Crée un élément temporaire pour copier le texte */
  var tempInput = document.createElement("textarea");
  tempInput.value = texteACopier;
  document.body.appendChild(tempInput);
  /* Sélectionne le texte dans l'élément temporaire */
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Pour les navigateurs mobiles
  /* Copie le texte dans le presse-papiers */
  document.execCommand("copy");
  /* Supprime l'élément temporaire */
  document.body.removeChild(tempInput);
  /* Affiche un message pour indiquer que le texte a été copié */
  var popup = document.getElementById('copy-popup');
  popup.style.display = 'block';
  popup.classList.add('show');
  setTimeout(function () {
    popup.style.display = 'none';
  }, 2500);
}


document.addEventListener('DOMContentLoaded', function () {
  // Sélectionnez le bouton toggle
  var toggleButton = document.getElementById('toggle');

  // Ajoutez un gestionnaire d'événements de clic au bouton toggle
  toggleButton.addEventListener('click', function () {
    // Sélectionnez la barre de navigation
    var navbarLinks = document.querySelector('.navbar__liens');

    // Vérifiez si le toggle est coché
    if (toggleButton.checked) {
      // Si le toggle est coché, affichez la barre de navigation en flex
      navbarLinks.style.display = 'flex';
    } else {
      // Sinon, masquez la barre de navigation
      navbarLinks.style.display = 'none';
    }
  });
});

// Sélectionnez tous les liens de la barre de navigation
var navLinks = document.querySelectorAll('.navbar__liens a');

// Ajoutez un gestionnaire d'événements de clic à chaque lien
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    // Vérifiez la largeur de la fenêtre
    if (window.innerWidth <= 990) {
      // Masquez la barre de navigation en modifiant le style
      document.querySelector('.navbar__liens').style.display = 'none';

      // Décochez le toggle
      document.getElementById('toggle').checked = false;
    }
  });
});




/* ----- FONCTION AFFICHAGE BOUTON 'BACK TO TOP' ----- */

function fadeInDivOnScroll() {
  var divElement = document.getElementById('backToTop');
  var scrollThreshold = 150; // Nombre de pixels à faire défiler avant que la div ne commence à apparaître

  function handleScroll() {
    var scrollPosition = window.pageYOffset;
    if (scrollPosition > scrollThreshold) {
      var opacity = (scrollPosition - scrollThreshold) / 30; // Contrôle de l'opacité en fonction de la position de défilement
      divElement.style.opacity = opacity;
    } else {
      divElement.style.opacity = 0;
    }
  }

  window.addEventListener('scroll', handleScroll);
}

document.addEventListener('DOMContentLoaded', fadeInDivOnScroll);



/* ----- FONCTION POUR AFFICHER LA COULEUR DE LA NAVBAR APRES SCROLL ----- */

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var distanceFromTop = navbar.offsetTop;
  var scrollThreshold = 150; //Défilement nécessaire avant d'afficher la couleur (en pixels)

  if (window.pageYOffset > distanceFromTop + scrollThreshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ----- FONCTION POUR L'ANIMATION LORS DU REVEAL ----- */

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 100,
  reset: false
});

sr.reveal(`.apropos__contenu`, { origin: 'left' });
sr.reveal(`.apropos__photo`, { origin: 'right' });
sr.reveal(`.divSkills1 , .divSkills2`, { interval: '100' });
sr.reveal(`.devCard`, { interval: '100' });
sr.reveal(`.liens_travaux`, { origin: 'bottom', interval: '100' });
sr.reveal(`.autresCard`, { interval: '100' });


/* ----- FONCTION POUR ENLEVER LE SCROLL PENDANT APPARITION MENU BURGER ----- */

document.getElementById('toggle').addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});


/* ----- FONCTION POUR LE SCROLL SMOOTH ----- */

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
