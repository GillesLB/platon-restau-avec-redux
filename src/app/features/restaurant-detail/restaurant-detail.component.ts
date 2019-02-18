import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListeRestaurantsComponent } from '../liste-restaurants/liste-restaurants.component';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public formulaireCommentaire: string;
  public formulaireNote: string;
  public confirmationEnvoiCommentaire: string;
  public confirmationEnvoiNote: string;
  public id: string;

  public restaurant = this.restaurantsLRC.restaurants;

  constructor(
    public restaurantsLRC: ListeRestaurantsComponent,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('restaurantId');
    this.formulaireCommentaire = 'cacher-formulaire-commentaire';
    this.formulaireNote = 'cacher-formulaire-note';
    this.confirmationEnvoiCommentaire = 'cacher-message-confirmation-envoi-commentaire';
    this.confirmationEnvoiNote = 'cacher-message-confirmation-envoi-note';
  }

  cacherVisibleNote() {
    if (this.formulaireNote === 'cacher-formulaire-note') {
      this.formulaireNote = '';
    } else {
      this.formulaireNote = 'cacher-formulaire-note';
    }
    this.confirmationEnvoiNote = 'cacher-message-confirmation-envoi-note';
    this.confirmationEnvoiCommentaire = 'cacher-message-confirmation-envoi-commentaire';
  }

  cacherVisibleCommentaire() {
    if (this.formulaireCommentaire === 'cacher-formulaire-commentaire') {
      this.formulaireCommentaire = '';
    } else {
      this.formulaireCommentaire = 'cacher-formulaire-commentaire';
    }
    this.confirmationEnvoiNote = 'cacher-message-confirmation-envoi-note';
    this.confirmationEnvoiCommentaire = 'cacher-message-confirmation-envoi-commentaire';
  }

}
