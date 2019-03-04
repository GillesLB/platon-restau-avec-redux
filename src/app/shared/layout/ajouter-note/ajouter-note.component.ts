import { Component, OnInit } from '@angular/core';

import { restaurants } from 'src/app/features/liste-restaurants/liste-restaurants';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';
import { Note } from 'src/app/core/note';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit {

  public nouvelleNote: number;

  public notes: Note[] = [
    {'avis': '😒 Beurk : ', 'note': 1, 'image': 'assets/images/1 etoile.png'},
    {'avis': '🤨 Bof : ', 'note': 2, 'image': 'assets/images/2 etoiles.png'},
    {'avis': '🙂 Correct : ', 'note': 3, 'image': 'assets/images/3 etoiles.png'},
    {'avis': '😋 Bien : ', 'note': 4, 'image': 'assets/images/4 etoiles.png'},
    {'avis': '😍 Extra : ', 'note': 5, 'image': 'assets/images/5 etoiles.png'}
  ];

  constructor(
    public restaurantDetailComponent: RestaurantDetailComponent,
  ) { }

  changementEtatBoutonRadio(event) {
    this.nouvelleNote = event.target.value;
  }

  cacherMessageConfirmationEnvoiNote() {
    if (this.restaurantDetailComponent.confirmationEnvoiNote === 'cacher-message-confirmation-envoi-note') {
      this.restaurantDetailComponent.confirmationEnvoiNote = '';
    } else {
      this.restaurantDetailComponent.confirmationEnvoiNote = 'cacher-message-confirmation-envoi-note';
    }
  }

  envoyerNote() {
    this.restaurantDetailComponent.formulaireNote = 'cacher-formulaire-note';
    const noteRestaurant = restaurants[this.restaurantDetailComponent.id].note;
    if (noteRestaurant) {
      this.nouvelleNote = Math.ceil((noteRestaurant * 1 + this.nouvelleNote * 1) / 2);
    }
    restaurants[this.restaurantDetailComponent.id].note = this.nouvelleNote;
  }

  ngOnInit() {
  }

}
