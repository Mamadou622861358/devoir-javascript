"use strict";

import { Utilisateur } from './utilisateur.js';

export class Admin extends Utilisateur {
  constructor(nom, email, role) {
    super(nom, email);
    this.role = role;
  }

  afficherRole() {
    console.log(`${this.nom} a le rôle ${this.role}`);
  }
}
