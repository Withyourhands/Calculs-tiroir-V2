  // Fonction pour basculer entre le mode sombre et le mode clair
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

// Fonction pour gérer le clic sur le slider
function handleSliderClick() {
  var slider = document.getElementById("slider");
  slider.classList.toggle("active");
  toggleDarkMode();
}

// Attacher l'événement de clic au slider
var slider = document.getElementById("slider");
slider.addEventListener("click", handleSliderClick);

function calculer() {
  // Obtenir les entrées de l'utilisateur du tableau N°1
  var hauteur = parseFloat(document.getElementById("hauteur").value);
  var largeur = parseFloat(document.getElementById("largeur").value);
  var profondeur = parseFloat(document.getElementById("profondeur").value);
  var epaisseurBois = parseFloat(document.getElementById("epaisseurBois").value);

  // Obtenir les entrées de l'utilisateur du tableau N°2
  var nombreTiroirs = parseInt(document.getElementById("nombreTiroirs").value);
  var espaceTiroirs = parseFloat(document.getElementById("espaceTiroirs").value);
  var espaceFond = parseFloat(document.getElementById("espaceFond").value);
  var espaceHaut = parseFloat(document.getElementById("espaceHaut").value);
  var espaceFacade = parseFloat(document.getElementById("espaceFacade").value);
  var epaisseurBois2 = parseFloat(document.getElementById("epaisseurBois2").value);
  var epaisseurGlissieres = parseFloat(document.getElementById("epaisseurGlissieres").value);
  var espaceSousTiroir = parseFloat(document.getElementById("espaceSousTiroir").value);
  var epaisseurFacade = parseFloat(document.getElementById("epaisseurFacade").value);
  var tiroirApplique = document.getElementById("tiroirApplique").checked;
  var tiroirEncastre = document.getElementById("tiroirEncastre").checked;

  // Calculer la hauteur des faces avant et arrière
  var hauteurFaces;
  if (nombreTiroirs === 1) {
    hauteurFaces = hauteur - espaceHaut - espaceSousTiroir;
  } else if (nombreTiroirs === 2) {
    hauteurFaces = (hauteur - espaceTiroirs - espaceSousTiroir - espaceHaut) / 2;
  } else if (nombreTiroirs === 3) {
    hauteurFaces = (hauteur - (2 * espaceTiroirs) - espaceSousTiroir - espaceHaut) / 3;
  } else if (nombreTiroirs === 4) {
    hauteurFaces = (hauteur - (3 * espaceTiroirs) - espaceSousTiroir - espaceHaut) / 4;
  }
  document.getElementById("resultatHauteurFaces").textContent = hauteurFaces.toFixed(2);

  // Calculer la largeur des faces avant et arrière
  var largeurFaces = largeur - (2 * epaisseurGlissieres) - (2 * epaisseurBois2);
  document.getElementById("resultatLargeurFaces").textContent = largeurFaces.toFixed(2);

  // Calculer la hauteur des côtés
  var hauteurCotes = hauteurFaces;
  document.getElementById("resultatHauteurCotes").textContent = hauteurCotes.toFixed(2);

  // Calculer la largeur des côtés
  var largeurCotes;
  if (tiroirEncastre) {
    largeurCotes = profondeur - espaceFond - epaisseurFacade;
  } else if (tiroirApplique) {
    largeurCotes = profondeur - espaceFond;
  }
  document.getElementById("resultatLargeurCotes").textContent = largeurCotes.toFixed(2);

  // Calculer la hauteur de la façade
var hauteurFacade;

if (tiroirEncastre) {
  if (nombreTiroirs === 1) {
    hauteurFacade = hauteur - (2 * espaceFacade);
  } else if (nombreTiroirs === 2) {
    hauteurFacade = (hauteur - 3 * espaceFacade) / 2;
  } else if (nombreTiroirs === 3) {
    hauteurFacade = (hauteur - 4 * espaceFacade) / 3;
  } else if (nombreTiroirs === 4) {
    hauteurFacade = (hauteur - 5 * espaceFacade) / 4;
  }
} else if (tiroirApplique) {
  if (nombreTiroirs === 1) {
    hauteurFacade = hauteur + (2 * epaisseurBois);
  } else if (nombreTiroirs === 2) {
    hauteurFacade = (hauteur + (epaisseurBois * 2) - (6)) / 2; // Remplacez ceci par votre calcul spécifique
  } else if (nombreTiroirs === 3) {
    hauteurFacade = (hauteur + (epaisseurBois * 2) - (9)) / 3; // Remplacez ceci par votre calcul spécifique
  } else if (nombreTiroirs === 4) {
    hauteurFacade = (hauteur + (epaisseurBois * 2) - (12)) / 4; // Remplacez ceci par votre calcul spécifique
  }
}

document.getElementById("resultatHauteurFacade").textContent = hauteurFacade.toFixed(2);

  // Calculer le nombre pour chaque élément en fonction du nombre de tiroirs
  var nombreFaces = 2 * nombreTiroirs;
  var nombreCotes = 2 * nombreTiroirs;
  var nombreFacade = nombreTiroirs;
  var nombreFond = nombreTiroirs;

  // Afficher les résultats dans les cellules correspondantes du tableau
  document.getElementById("resultatNombreFaces").textContent = nombreFaces.toFixed(0);
  document.getElementById("resultatNombreCotes").textContent = nombreCotes.toFixed(0);
  document.getElementById("resultatNombreFacade").textContent = nombreFacade.toFixed(0);
  document.getElementById("resultatNombreFond").textContent = nombreFond.toFixed(0);


  // Calculer la largeur de la façade
  var largeurFacade;
  if (tiroirEncastre) {
    largeurFacade = largeur - (2 * espaceFacade);
  } else if (tiroirApplique) {
    largeurFacade = largeur + (2 * epaisseurBois);
  }
  document.getElementById("resultatLargeurFacade").textContent = largeurFacade.toFixed(2);

  // Calculer la hauteur du fond
  var hauteurFond = largeurFaces + 10;
  document.getElementById("resultatHauteurFond").textContent = hauteurFond.toFixed(2);

  // Calculer la largeur du fond
  var largeurFond = largeurCotes - (2 * epaisseurBois2) + 10;
  document.getElementById("resultatLargeurFond").textContent = largeurFond.toFixed(2);
}

// Sélectionner le bouton de calcul
var calculateButton = document.getElementById("calculate-button");

// Attacher l'événement de clic au bouton de calcul
calculateButton.addEventListener("click", calculer);

// Sélectionner le conteneur du menu
var menuContainer = document.querySelector('.menu');

// Fonction pour mettre à jour la classe du conteneur du menu
function updateMenuClass() {
  if (window.pageYOffset > menuContainer.offsetTop) {
    menuContainer.classList.add('fixed-menu');
  } else {
    menuContainer.classList.remove('fixed-menu');
  }
}

// Écouter l'événement de défilement et appeler la fonction de mise à jour
window.addEventListener('scroll', updateMenuClass);

window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo-fixed');
  var scrollTop = window.scrollY;

  if (scrollTop > 0) {
    logo.style.opacity = '0';
  } else {
    logo.style.opacity = '1';
  }
});

window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo-fixed');
  var slider = document.getElementById('slider');
  var scrollTop = window.scrollY;

  if (scrollTop > 0) {
    logo.classList.add('hide');
    slider.classList.add('hide');
  } else {
    logo.classList.remove('hide');
    slider.classList.remove('hide');
  }
});

// Sélectionnez le bouton d'impression
const printButton = document.getElementById('print-button');

// Ajoutez un gestionnaire d'événement pour le clic sur le bouton d'impression
printButton.addEventListener('click', () => {
  // Appelez la fonction d'impression du navigateur
  window.print();
});

// Fonction pour gérer l'événement d'impression
function beforePrintHandler() {
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
    tables[i].style.pageBreakInside = 'avoid';
  }
}

// Attacher un gestionnaire d'événement pour avant l'impression
if (window.matchMedia) {
  var mediaQueryList = window.matchMedia('print');
  mediaQueryList.addListener(function(mql) {
    if (mql.matches) {
      beforePrintHandler();
    }
  });
}

// Attacher un événement d'impression
window.onbeforeprint = beforePrintHandler;



