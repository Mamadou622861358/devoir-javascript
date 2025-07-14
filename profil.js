// Fonction d’analyse du profil
function analyserProfil(age, tempsConnexion) {
  let statut, message;

  if (age < 18) {
    statut = tempsConnexion < 2 ? "Jeune léger" : "Jeune intense";
  } else {
    statut = tempsConnexion < 2 ? "Adulte léger" : "Adulte intense";
  }

  switch (statut) {
    case "Jeune léger":
      message = "Salut jeune apprenti ! Avec ton rythme, tu progresses à ton allure. Continue comme ça !";
      break;
    case "Jeune intense":
      message = "Wow jeune passionné ! Ton engagement est impressionnant. N'oublie pas de faire des pauses !";
      break;
    case "Adulte léger":
      message = "Bonjour cher apprenant. Votre progression est constante. Augmentez votre temps si vous le souhaitez.";
      break;
    case "Adulte intense":
      message = "Félicitations pour votre dévouement ! Vous êtes un modèle de persévérance.";
      break;
    default:
      message = "Bienvenue sur notre plateforme d'apprentissage !";
  }

  return { statut, message };
}

// Exécution déclenchée par le clic du bouton
document.getElementById("demarrer").addEventListener("click", () => {
  const age = parseInt(prompt("Quel est votre âge ?"), 10);
  const temps = parseFloat(prompt("Combien d'heures passez-vous par jour ?"));

  if (isNaN(age) || isNaN(temps) || age < 0 || temps < 0) {
    console.error("Valeurs non valides. Veuillez entrer des nombres positifs.");
    return;
  }

  const resultat = analyserProfil(age, temps);
  console.log("➡️ Statut :", resultat.statut);
  console.log("💬 Message :", resultat.message);
});
