// ==============================================
// 1. querySelector & forEach
// ==============================================

// Sélectionne tous les boutons avec la classe 'action-btn'
const buttons = document.querySelectorAll('.action-btn');
// Sélectionne l'élément pour afficher les messages de clic
const clickMessage = document.getElementById('click-message');

// Pour chaque bouton, ajoute un écouteur d'événement
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Affiche un message avec le numéro du bouton cliqué
        clickMessage.textContent = `Bouton ${index + 1} cliqué !`;
        // Change la couleur du message aléatoirement
        clickMessage.style.color = getRandomColor();
    });
});

// ==============================================
// 2. Gestion des différents événements
// ==============================================

// --------- mouseover/mouseout ---------
const hoverBlock = document.getElementById('hover-block');
const hoverStatus = document.getElementById('hover-status');

// Quand la souris entre dans le bloc
hoverBlock.addEventListener('mouseover', () => {
    hoverBlock.textContent = "Souris sur moi !";
    hoverBlock.style.backgroundColor = '#e74c3c'; // Rouge
    hoverStatus.textContent = "Statut: souris dessus";
});

// Quand la souris quitte le bloc
hoverBlock.addEventListener('mouseout', () => {
    hoverBlock.textContent = "Passez la souris sur moi !";
    hoverBlock.style.backgroundColor = ''; // Retour à la couleur par défaut
    hoverStatus.textContent = "Statut: souris en dehors";
});

// --------- keypress ---------
const keyDisplay = document.getElementById('key-display');

// Quand une touche est pressée
document.addEventListener('keypress', (e) => {
    keyDisplay.textContent = `Touche pressée: ${e.key} (Code: ${e.keyCode})`;
});

// --------- scroll ---------
const header = document.querySelector('header');

// Au défilement de la page
window.addEventListener('scroll', () => {
    // Si on a défilé de plus de 100px
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#2c3e50'; // Noir bleuté
    } else {
        header.style.backgroundColor = ''; // Couleur par défaut
    }
});

// --------- load ---------
// Quand la page est complètement chargée
window.addEventListener('load', () => {
    alert('La page est complètement chargée !');
});

// --------- submit ---------
const form = document.getElementById('main-form');
const formOutput = document.getElementById('form-output');

// À la soumission du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // Récupère les valeurs des champs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Affiche les données du formulaire
    formOutput.innerHTML = `
        <p>Formulaire soumis avec succès !</p>
        <p>Nom d'utilisateur: ${username}</p>
        <p>Email: ${email}</p>
    `;
    
    // Applique des styles à la sortie
    formOutput.style.marginTop = '1rem';
    formOutput.style.padding = '1rem';
    formOutput.style.backgroundColor = '#f8f9fa';
    formOutput.style.borderRadius = '4px';
    
    form.reset(); // Réinitialise le formulaire
});

// ==============================================
// 3. addEventListener vs onclick
// ==============================================
const submitBtn = document.getElementById('submit-btn');

// Méthode recommandée (addEventListener)
submitBtn.addEventListener('click', () => {
    console.log('Bouton cliqué (addEventListener)');
});

// Méthode alternative (onclick)
submitBtn.onclick = function() {
    console.log('Bouton cliqué (onclick)');
};

// ==============================================
// 4. stopPropagation et removeEventListener
// ==============================================
const parentBox = document.getElementById('parent-box');
const childBox = document.getElementById('child-box');
const propagationMessage = document.getElementById('propagation-message');

// Clic sur la zone parente
parentBox.addEventListener('click', () => {
    propagationMessage.textContent = "Zone parente cliquée";
    propagationMessage.style.color = '#9b59b6'; // Violet
});

// Clic sur la zone enfant
childBox.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche la propagation vers le parent
    propagationMessage.textContent = "Zone enfant cliquée (propagation stoppée)";
    propagationMessage.style.color = '#e74c3c'; // Rouge
});

// --------- removeEventListener ---------
// Crée un bouton temporaire
const tempButton = document.createElement('button');
tempButton.textContent = "Bouton temporaire";
tempButton.className = "action-btn";
document.querySelector('.button-section').appendChild(tempButton);

// Fonction de gestion du clic
const tempHandler = () => {
    alert("Ce bouton ne fonctionnera qu'une fois !");
    // Supprime l'écouteur après le premier clic
    tempButton.removeEventListener('click', tempHandler);
};

// Ajoute l'écouteur d'événement
tempButton.addEventListener('click', tempHandler);

// ==============================================
// 5. Le BOM (window, location, innerWidth, etc.)
// ==============================================
const screenSizeDisplay = document.getElementById('screen-size');

// Met à jour l'affichage de la taille de l'écran
function updateScreenSize() {
    screenSizeDisplay.textContent = `Taille de l'écran: ${window.innerWidth}px × ${window.innerHeight}px`;
}

// Appel initial et écouteur de redimensionnement
updateScreenSize();
window.addEventListener('resize', updateScreenSize);

// ==============================================
// 6. setProperty
// ==============================================
// Change la couleur du thème
function changeThemeColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
}

// Change la couleur toutes les 5 secondes (démonstration)
setInterval(() => {
    changeThemeColor(getRandomColor());
}, 5000);

// ==============================================
// Fonction utilitaire
// ==============================================
// Génère une couleur hexadécimale aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}