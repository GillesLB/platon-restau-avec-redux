import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { restaurants } from 'src/app/core/liste-restaurants';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';
import { ICommentaire, Commentaire } from 'src/app/core/commentaire';
import { CommentAdd } from 'src/app/core/actions/restaurant.action';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.css']
})
export class AjouterCommentaireComponent implements OnInit {

  restaurants = restaurants;
  commentaireAAjouter: Commentaire;
  restaurant$: Observable<object>;

  constructor(
    public restaurantDetailComponent: RestaurantDetailComponent,
    private store: Store<{restaurant: object}>
  ) {
    this.restaurant$ = store.pipe(select('restaurant'));
  }

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
    (restaurants[this.restaurantDetailComponent.id].commentaire).push({'auteur': auteur, 'texte': texte});
    const ajoutNombreCommentaire = (restaurants[this.restaurantDetailComponent.id].nombreCommentaire) + 1;
    restaurants[this.restaurantDetailComponent.id].nombreCommentaire = ajoutNombreCommentaire;
    this.store.dispatch(new CommentAdd(this.restaurants));
  }

  ngOnInit() {
  }

}
