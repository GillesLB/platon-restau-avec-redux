import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.css']
})
export class AjouterCommentaireComponent implements OnInit {

  constructor(
    public listeRestaurantsComponent: ListeRestaurantsComponent,
    public restaurantDetailComponent: RestaurantDetailComponent,
  ) { }

  cacherMessageConfirmationEnvoiCommentaire() {
    if (this.restaurantDetailComponent.confirmationEnvoiCommentaire === 'cacher-message-confirmation-envoi-commentaire') {
      this.restaurantDetailComponent.confirmationEnvoiCommentaire = '';
    } else {
      this.restaurantDetailComponent.confirmationEnvoiCommentaire = 'cacher-message-confirmation-envoi-commentaire';
    }
  }

  onSubmit(value) {
    const auteur = value.auteur;
    const texte = value.texte;

    this.restaurantDetailComponent.formulaireCommentaire = 'cacher-formulaire-commentaire';
    this.restaurantDetailComponent.confirmationEnvoiCommentaire = '';
    (this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].commentaire).push({'auteur': auteur, 'texte': texte});
    const ajoutNombreCommentaire = (this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].nombreCommentaire) + 1;
    this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].nombreCommentaire = ajoutNombreCommentaire;
  }

  ngOnInit() {
  }

}
