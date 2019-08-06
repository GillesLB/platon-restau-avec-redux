import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { restaurants } from 'src/app/core/liste-restaurants';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';
import { ICommentaire, Commentaire } from 'src/app/core/commentaire';
import { CommentAdd } from 'src/app/core/actions/restaurant.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.css']
})
export class AjouterCommentaireComponent implements OnInit {

  restaurants = restaurants;
  commentaireAAjouter: Commentaire;
  restaurant$: Observable<object>;

  commentaireForm: FormGroup;

  AUTEUR_REGEX = '^[a-zA-Z0-9_-]+$';

  ngOnInit() {
  }

  constructor(
    public restaurantDetailComponent: RestaurantDetailComponent,
    private store: Store<{restaurant: object}>
  ) {
    this.restaurant$ = store.pipe(select('restaurant'));
  }

  initForm() {
    this.commentaireForm = new FormGroup({
      auteur: new FormControl('', [Validators.required, Validators.pattern(this.AUTEUR_REGEX)]),
      texte: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const auteur = this.commentaireForm.get('auteur').value;
    const texte = this.commentaireForm.get('texte').value;

    (restaurants[this.restaurantDetailComponent.id].commentaire).push({'auteur': auteur, 'texte': texte});
    const ajoutNombreCommentaire = (restaurants[this.restaurantDetailComponent.id].nombreCommentaire) + 1;
    restaurants[this.restaurantDetailComponent.id].nombreCommentaire = ajoutNombreCommentaire;
    // this.store.dispatch(new CommentAdd(this.restaurants));
  }

}
