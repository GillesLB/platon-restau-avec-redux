import { Component, OnInit } from '@angular/core';

import { restaurants } from 'src/app/core/liste-restaurants';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';
import { Note } from 'src/app/core/note';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { NoteAdd } from 'src/app/core/actions/restaurant.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit {

  nouvelleNote: number;
  restaurants = restaurants;
  noteAAjouter: number;
  restaurant$: Observable<object>;
  formulaireCommentaire = 'cacher-formulaire-commentaire';

  public notes: Note[] = [
    {'avis': '😒 Beurk : ', 'note': 1},
    {'avis': '🤨 Bof : ', 'note': 2},
    {'avis': '🙂 Correct : ', 'note': 3},
    {'avis': '😋 Bien : ', 'note': 4},
    {'avis': '😍 Extra : ', 'note': 5}
  ];

  constructor(
    public restaurantDetailComponent: RestaurantDetailComponent,
    private router: Router,
    private store: Store<{restaurant: object}>
  ) {
    // this.restaurant$ = store.pipe(select('restaurant'));
  }

  changementEtatBoutonRadio(event) {
    this.nouvelleNote = event.target.value;
  }

  envoyerNote() {
    const noteRestaurant = restaurants[this.restaurantDetailComponent.id].note;
    if (noteRestaurant) {
      this.nouvelleNote = Math.ceil((noteRestaurant * 1 + this.nouvelleNote * 1) / 2);
    }
    restaurants[this.restaurantDetailComponent.id].note = this.nouvelleNote;
    // this.store.dispatch(new NoteAdd(this.restaurants));
    this.router.navigate(['liste']);
  }

  ngOnInit() {
  }

}
