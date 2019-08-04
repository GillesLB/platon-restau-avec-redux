import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public cacherFiche: string;
  public formulaireCommentaire: string;
  public formulaireNote: string;
  public confirmationEnvoiCommentaire: string;
  public confirmationEnvoiNote: string;
  public id: string;

  restaurant$: Observable<object>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{restaurant: object}>
  ) {
    this.restaurant$ = store.pipe(select('restaurant'));
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('restaurantId');
    this.cacherFiche = '';
    this.formulaireCommentaire = 'cacher-formulaire-commentaire';
    this.formulaireNote = 'cacher-formulaire-note';
    this.confirmationEnvoiCommentaire = 'cacher-message-confirmation-envoi-commentaire';
    this.confirmationEnvoiNote = 'cacher-message-confirmation-envoi-note';
  }

  cacherFicheRestaurant() {
    if (this.cacherFiche === 'cacher-fiche') {
      this.cacherFiche = '';
    } else {
      this.cacherFiche = 'cacher-fiche';
    }
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
