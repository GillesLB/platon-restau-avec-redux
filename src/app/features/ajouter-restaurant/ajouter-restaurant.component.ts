import { Component, OnInit, Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { restaurants } from 'src/app/features/liste-restaurants/liste-restaurants';
import { ListeRestaurantsComponent } from '../liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from '../restaurant-detail/restaurant-detail.component';
import { RestaurantAdd } from 'src/app/core/actions/restaurant.action';

@Injectable()

@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnInit {

  restaurantAAjouter = {};
  restaurant$: Observable<object>;
  
  public cacherformulaireNouveauRestaurant: string;
  public cacherMessageConfirmationEnvoi: string;

  constructor(
    public listeRestaurantsComponent: ListeRestaurantsComponent,
    public restaurantDetailComponent: RestaurantDetailComponent,
    private store: Store<{restaurant: object}>
  ) {
    this.restaurant$ = store.pipe(select('restaurant'));
   }

  cacherMessageConfirmationEnvoiRestaurant() {
    this.cacherformulaireNouveauRestaurant = 'cacher-formulaire-envoi-nouveau-restaurant';
    this.cacherMessageConfirmationEnvoi = '';
  }

  onSubmit(value) {
    const nom = value.nom;
    const adresse = value.adresse;
    const dateDerniereVisite = value.dateVisite;
    const note = value.note;
    const restaurantId = restaurants.length;
    // tslint:disable-next-line:max-line-length
    // restaurants.push({'check': false, 'nom': nom, 'adresse': adresse, 'dateDerniereVisite': dateDerniereVisite, 'note': note, 'nombreVisite': null, 'nombreCommentaire': null, 'commentaire': null, 'restaurantId': restaurantId});
    this.restaurantAAjouter = {'check': false, 'nom': nom, 'adresse': adresse, 'dateDerniereVisite': dateDerniereVisite, 'note': note, 'nombreVisite': null, 'nombreCommentaire': null, 'commentaire': null, 'restaurantId': restaurantId};
    console.log('RAA : ', this.restaurantAAjouter);
    return this.restaurantAAjouter;
  }

  ajouterRestaurant() {
    this.store.dispatch(new RestaurantAdd());
  }

  ngOnInit() {
    this.cacherformulaireNouveauRestaurant = '';
    this.cacherMessageConfirmationEnvoi = 'cacher-message-confirmation-envoi';
  }

}
