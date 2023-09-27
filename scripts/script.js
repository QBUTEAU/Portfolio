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
    setTimeout(function(){
      popup.style.display = 'none';
    }, 2500);
      
}


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

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var distanceFromTop = navbar.offsetTop;
  var scrollThreshold = 360; //Défilement nécessaire avant d'afficher la couleur (en pixels)
  
  if (window.pageYOffset > distanceFromTop + scrollThreshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
