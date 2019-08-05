import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { RestaurantRead } from 'src/app/core/actions/restaurant.action';
import { Restaurant } from 'src/app/core/restaurant';
import { RestaurantsService } from 'src/app/features/services/restaurants.service';


@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit, OnDestroy {

  page = 1;
  pageSize = 7;

  listeRestaurants: Restaurant[];

  restaurantsSubscription: Subscription;

  restaurant$: Observable<object>;

  constructor(
    private restaurantsService: RestaurantsService,
    private store: Store<{restaurant: object}>
  ) {
    // this.restaurant$ = store.pipe(select('restaurant'));
  }

  ngOnInit() {
    // this.restaurantsSubscription = this.restaurantsService.restaurantsSubject.subscribe(
    //   (restaurants: Restaurant[]) => {
    //     this.listeRestaurants = restaurants;
    //   });
    // this.restaurantsService.emitRestaurants();
    this.listeRestaurants = this.restaurantsService.listeRestaurants;
  }

  getRestaurants() {
    this.restaurantsService.getRestaurants();
    console.log('t b 2 : ', this.listeRestaurants);
  }

  montrerListe() {
    // this.store.dispatch(new RestaurantRead());
  }

  ngOnDestroy() {
    // this.restaurantsSubscription.unsubscribe();
  }

}
