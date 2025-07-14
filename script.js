// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments du DOM pour le profil utilisateur
    const userProfile = document.getElementById('userProfile'); // Conteneur principal du profil
    const userName = document.getElementById('userName'); // Élément du nom
    const userEmail = document.getElementById('userEmail'); // Élément de l'email
    const userPhone = document.getElementById('userPhone'); // Élément du téléphone
    const userAddress = document.getElementById('userAddress'); // Élément de l'adresse
    const userRole = document.getElementById('userRole'); // Élément du rôle
    const userJoinDate = document.getElementById('userJoinDate'); // Date d'inscription

    // Récupération des éléments du formulaire d'édition
    const editForm = document.getElementById('editForm'); // Conteneur du formulaire
    const profileForm = document.getElementById('profileForm'); // Formulaire lui-même
    const editName = document.getElementById('editName'); // Champ du nom
    const editEmail = document.getElementById('editEmail'); // Champ de l'email
    const editPhone = document.getElementById('editPhone'); // Champ du téléphone
    const editAddress = document.getElementById('editAddress'); // Champ de l'adresse
    const editRole = document.getElementById('editRole'); // Sélecteur de rôle

    // Récupération des boutons
    const editBtn = document.getElementById('editBtn'); // Bouton Modifier
    const cancelBtn = document.getElementById('cancelBtn'); // Bouton Annuler

    // Données initiales de l'utilisateur (simulées)
    const userData = {
        name: 'Alpha Sylla',
        email: 'alpha@gmail.com',
        phone: '621456789',
        address: 'Labé',
        role: 'Membre standard',
        joinDate: '15/01/2023'
    };
    
    // Affichage initial des données utilisateur
    displayUserData(userData);
    
    // Écouteur d'événement pour le bouton Modifier
    editBtn.addEventListener('click', function() {
        userProfile.classList.add('hidden'); // Cache le profil
        editForm.classList.remove('hidden'); // Affiche le formulaire
        
        // Pré-remplissage du formulaire avec les données actuelles
        editName.value = userData.name;
        editEmail.value = userData.email;
        editPhone.value = userData.phone;
        editAddress.value = userData.address;
        editRole.value = userData.role;
    });
    
    // Écouteur d'événement pour la soumission du formulaire
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        
        // Mise à jour des données utilisateur avec les nouvelles valeurs
        userData.name = editName.value;
        userData.email = editEmail.value;
        userData.phone = editPhone.value;
        userData.address = editAddress.value;
        userData.role = editRole.value;
       
        // Mise à jour de l'affichage avec les nouvelles données
        displayUserData(userData);
        
        // Retour à l'affichage du profil
        editForm.classList.add('hidden');
        userProfile.classList.remove('hidden');
    });
    
    // Écouteur d'événement pour le bouton Annuler
    cancelBtn.addEventListener('click', function() {
        editForm.classList.add('hidden'); // Cache le formulaire
        userProfile.classList.remove('hidden'); // Affiche le profil
    });
    
    // Fonction pour afficher les données utilisateur
    function displayUserData(data) {
        userName.textContent = data.name; // Met à jour le nom
        userEmail.textContent = data.email; // Met à jour l'email
        userPhone.textContent = data.phone; // Met à jour le téléphone
        userAddress.textContent = data.address; // Met à jour l'adresse
        userRole.textContent = data.role; // Met à jour le rôle
        userJoinDate.textContent = data.joinDate; // Met à jour la date
        
        // Réinitialisation des classes de rôle
        userRole.className = 'role';
        
        // Ajout de classes spécifiques selon le rôle
        if (data.role === 'Membre premium') {
            userRole.classList.add('premium'); // Classe pour le style premium
        } else if (data.role === 'Administrateur') {
            userRole.classList.add('admin'); // Classe pour le style admin
        }
    }
    
    // Création dynamique de styles supplémentaires
    const style = document.createElement('style');
    style.textContent = `
        .role.premium {
            background-color: #f39c12; /* Couleur orange pour premium */
        }
        .role.admin {
            background-color: #e74c3c; /* Couleur rouge pour admin */
        }
    `;
    document.head.appendChild(style); // Ajout des styles au document
});