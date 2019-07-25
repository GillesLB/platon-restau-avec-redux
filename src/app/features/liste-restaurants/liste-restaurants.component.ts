import { Component, OnInit } from '@angular/core';

import { Store, select, reduceState } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { RestaurantRead } from 'src/app/core/actions/restaurant.action';


@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit {

  page = 1;
  pageSize = 7;

  restaurant$: Observable<object>;

  constructor(
    private store: Store<{restaurant: object}>
  ) {
    this.restaurant$ = store.pipe(select('restaurant'));
  }

  montrerListe() {
    this.store.dispatch(new RestaurantRead());
  }

  ngOnInit() {
    this.montrerListe();
  }

}
