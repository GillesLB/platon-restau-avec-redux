import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { RestaurantsService } from 'src/app/features/services/restaurants.service';
import { Restaurant } from 'src/app/core/restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  detailRestaurant = true;
  commentaireEnvoye = false;
  noteEnvoyee = false;
  formulaireNote = false;
  formulaireComm = false;

  id: string;
  listeRestaurants: Restaurant[] = [];

  restaurant$: Observable<object>;

  constructor(
    private route: ActivatedRoute,
    private restaurantsServices: RestaurantsService,
    private store: Store<{restaurant: object}>
  ) {
    this.listeRestaurants = this.restaurantsServices.listeRestaurants;
    // this.restaurant$ = store.pipe(select('restaurant'));
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('restaurantId');
  }

  cacherFiche() {
    this.detailRestaurant = false;
    this.formulaireNote = true;
  }

  montrerFiche() {
    this.detailRestaurant = true;
    this.formulaireNote = false;
  }

}
