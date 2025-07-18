"use strict";

import { utilisateurObj } from './objetUtilisateur.js';
import { Utilisateur } from './utilisateur.js';
import { Admin } from './admin.js';

// 1. Objet simple
utilisateurObj.sePresenter();

// 2. Classe Utilisateur
const user1 = new Utilisateur("Abdoulaye", "abdoulaye@gmail.com");
user1.seConnecter();
user1.deconnecter();

// 3. Admin hérite de Utilisateur
const admin1 = new Admin("Bobo", "bobo@gmail.com", "superadmin");
admin1.seConnecter();
admin1.afficherRole();

// 4. Drag & Drop
const userCard = document.getElementById("userCard");
const dropZone = document.getElementById("dropZone");

userCard.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", userCard.id);
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // autoriser le drop
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const dragged = document.getElementById(id);
  dropZone.appendChild(dragged);
});

// 5. Try/Catch - erreur volontaire
try {
  JSON.parse('{ nom: "erreur" }'); // mauvais JSON
} catch (err) {
  console.error("Erreur JSON :", err.message);
}

// 6. Test console.assert()
console.assert(user1 instanceof Utilisateur, "user1 doit être une instance de Utilisateur");
console.assert(admin1 instanceof Admin, "admin1 doit être une instance de Admin");
