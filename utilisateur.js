"use strict";

export class Utilisateur {
  constructor(nom, email) {
    this.nom = nom;
    this.email = email;
  }

  seConnecter() {
    console.log(`${this.nom} est connecté avec l'email ${this.email}`);
  }
}

// Méthode ajoutée au prototype
Utilisateur.prototype.deconnecter = function () {
  console.log(`${this.nom} s'est déconnecté`);
};
