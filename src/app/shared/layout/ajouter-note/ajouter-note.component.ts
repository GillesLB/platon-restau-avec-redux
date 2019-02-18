import { Component, OnInit } from '@angular/core';

import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
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
    {'avis': '😒 Beurk : ', 'note': 1},
    {'avis': '🤨 Bof : ', 'note': 2},
    {'avis': '🙂 Correct : ', 'note': 3},
    {'avis': '😋 Bien : ', 'note': 4},
    {'avis': '😍 Extra : ', 'note': 5}
  ];

  constructor(
    public listeRestaurantsComponent: ListeRestaurantsComponent,
    public restaurantDetailComponent: RestaurantDetailComponent,
  ) { }

  changementEtatBoutonRadio(event) {
    this.nouvelleNote = event.target.value;
  }

  cacherMessageConfirmationEnvoiNote() {
    console.log('1',this.restaurantDetailComponent.confirmationEnvoiNote)
    if (this.restaurantDetailComponent.confirmationEnvoiNote === 'cacher-message-confirmation-envoi-note') {
      this.restaurantDetailComponent.confirmationEnvoiNote = '';
    } else {
      this.restaurantDetailComponent.confirmationEnvoiNote = 'cacher-message-confirmation-envoi-note';
    }
    console.log('2', this.restaurantDetailComponent.confirmationEnvoiNote)
  }

  envoyerNote() {
    this.restaurantDetailComponent.formulaireNote = 'cacher-formulaire-note';
    const noteRestaurant = this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].note;
    if (noteRestaurant) {
      this.nouvelleNote = Math.ceil((noteRestaurant * 1 + this.nouvelleNote * 1) / 2);
    }
    this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].note = this.nouvelleNote;
  }

  ngOnInit() {
  }

}
