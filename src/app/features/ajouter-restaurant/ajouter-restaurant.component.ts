import { Component, OnInit } from '@angular/core';
import { ListeRestaurantsComponent } from '../liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from '../restaurant-detail/restaurant-detail.component';

@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnInit {

  public cacherformulaireNouveauRestaurant: string;
  public cacherMessageConfirmationEnvoi: string;

  constructor(
    public listeRestaurantsComponent: ListeRestaurantsComponent,
    public restaurantDetailComponent: RestaurantDetailComponent
  ) { }

  cacherMessageConfirmationEnvoiRestaurant() {
    this.cacherformulaireNouveauRestaurant = 'cacher-formulaire-envoi-nouveau-restaurant';
    this.cacherMessageConfirmationEnvoi = '';
  }

  onSubmit(value) {
    const nom = value.nom;
    const adresse = value.adresse;
    const dateDerniereVisite = value.dateVisite;
    const note = value.note;
    const restaurantId = this.listeRestaurantsComponent.restaurants.length;
    // tslint:disable-next-line:max-line-length
    this.listeRestaurantsComponent.restaurants.push({'nom': nom, 'adresse': adresse, 'dateDerniereVisite': dateDerniereVisite, 'note': note, 'nombreVisite': null, 'nombreCommentaire': null, 'commentaire': null, 'restaurantId': restaurantId});
  }

  ngOnInit() {
    this.cacherformulaireNouveauRestaurant = '';
    this.cacherMessageConfirmationEnvoi = 'cacher-message-confirmation-envoi';
  }

}
