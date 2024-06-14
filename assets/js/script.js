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



/* ----- FONCTION POUR ENLEVER LE MENU BURGER LORSQU'ON CLIQUE
SUR UN DES LIENS, ET RECHANGE LE F-XMARK en F-BARS ----- */

document.addEventListener('DOMContentLoaded', function () {
  // Sélectionnez les éléments nécessaires
  var toggleButton = document.getElementById('toggle');
  var toggleIcon = document.getElementById('icon');
  var navbarLinks = document.querySelector('.navbar__liens');
  var navLinks = navbarLinks.querySelectorAll('a');
  var backToTopButton = document.getElementById('backToTop');

  // Fonction pour mettre à jour l'icône
  function updateToggleIcon() {
    if (toggleButton.checked) {
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-xmark');
    } else {
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-bars');
    }
  }

  // Fonction pour gérer l'affichage de la barre de navigation
  function handleToggle() {
    // Vérifiez si le toggle est coché
    if (toggleButton.checked) {
      // Si le toggle est coché, affichez la barre de navigation en flex
      navbarLinks.style.display = 'flex';
      backToTopButton.style.display = 'none';
    } else {
      // Sinon, masquez la barre de navigation
      navbarLinks.style.display = 'none';
      backToTopButton.style.display = 'block';
    }
    updateToggleIcon();
  }

  // Ajoutez un gestionnaire d'événements de clic au bouton toggle
  toggleButton.addEventListener('change', handleToggle);

  // Ajoutez des gestionnaires d'événements de clic aux liens de navigation
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Masquez la barre de navigation
      navbarLinks.style.display = 'none';
      // Décochez le toggle
      toggleButton.checked = false;
      // Mettez à jour l'icône
      updateToggleIcon();
    });
  });

  // Initialisez l'icône au chargement de la page
  updateToggleIcon();

  // Fonction pour gérer les changements de taille d'écran
  function handleResize() {
    var mediaQuery = window.matchMedia('(max-width: 990px)');
    if (mediaQuery.matches) {
      // Écran de moins de 990px
      // Afficher/Masquer la barre de navigation en fonction du toggle
      handleToggle();
    } else {
      // Écran de plus de 990px
      // Toujours afficher la barre de navigation
      navbarLinks.style.display = 'flex';
    }
  }

  // Ajouter un écouteur pour les changements de taille d'écran
  window.addEventListener('resize', handleResize);

  // Appeler handleResize au chargement de la page
  handleResize();
});




/* ----- FONCTION POUR LE MENU BURGER ----- */

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
sr.reveal(`.competences__liste`, { interval: '100' });
sr.reveal(`.devCard`, { interval: '100' });
sr.reveal(`.liens_travaux`, { origin: 'bottom', interval: '100' });
sr.reveal(`.autresCard`, { interval: '100' });



/* ----- FONCTION POUR ENLEVER LE SCROLL PENDANT APPARITION MENU BURGER ----- */

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('toggle');
  var icon = document.getElementById('icon');

  // Vérifiez si l'élément icône est bien chargé et visible
  console.log('Initial icon class:', icon.className);

  toggle.addEventListener('change', function () {
    console.log('Checkbox state changed, checked:', this.checked);
    if (this.checked) {
      document.body.classList.add('no-scroll');
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
      console.log('Icon changed to :' + icon.className);
    } else {
      document.body.classList.remove('no-scroll');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
      console.log('Icon changed to :' + icon.className);
    }
  });
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
