import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { restaurants } from 'src/app/core/liste-restaurants';
import { RestaurantAdd } from 'src/app/core/actions/restaurant.action';
import { IRestaurant, Restaurant } from 'src/app/core/restaurant';

@Injectable()

@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnInit {

  NOM_REGEX = '^[a-zA-Z0-9_]+$';
  ADRESSE_REGEX = '^[a-zA-Z0-9_]+$';
  NOMBRE_REGEX = '^[0-9,.-]+$';

  listeNotes = ['', '1', '2', '3', '4', '5'];

  restaurant$: Observable<object>;

  formulaireAjouter = true;

  ajouterRestaurantForm: FormGroup;

  constructor(
    private store: Store<{restaurant: object}>
  ) {
    this.initForm();
    this.restaurant$ = store.pipe(select('restaurant'));
  }

  ngOnInit() {
  }

  initForm() {
    this.ajouterRestaurantForm = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern(this.NOM_REGEX)]),
      adresse: new FormControl('', [Validators.required, Validators.pattern(this.ADRESSE_REGEX)]),
      dateDerniereVisite: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required, Validators.pattern(this.NOMBRE_REGEX)]),
      longitude: new FormControl('', [Validators.required, Validators.pattern(this.NOMBRE_REGEX)]),
    });
    console.log('AjouterForm : ', this.ajouterRestaurantForm.value);
  }

  envoyerFormulaire() {
    const check = false;
    const nom = this.ajouterRestaurantForm.get('nom').value;
    const adresse = this.ajouterRestaurantForm.get('adresse').value;
    const dateDerniereVisite = this.ajouterRestaurantForm.get('dateDerniereVisite').value;
    const note = this.ajouterRestaurantForm.get('note').value;
    const nombreVisite = 1;
    const nombreCommentaire = null;
    const commentaire = null;
    const restaurantId = restaurants.length;
    const latitude = this.ajouterRestaurantForm.get('latitude').value;
    const longitude = this.ajouterRestaurantForm.get('longitude').value;
    // tslint:disable-next-line:max-line-length
    const restaurantAAjouter = new Restaurant(check, nom, adresse, dateDerniereVisite, note, nombreVisite, latitude, longitude, nombreCommentaire, commentaire, restaurantId);
    console.log('!! : ', this.ajouterRestaurantForm.value);
    this.store.dispatch(new RestaurantAdd(restaurantAAjouter));
  }

  cacherFormulaire() {
    // this.formulaireAjouter = !this.formulaireAjouter;
  }

}
