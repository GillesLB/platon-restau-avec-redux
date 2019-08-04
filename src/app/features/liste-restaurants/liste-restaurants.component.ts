import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as firebase from 'firebase';
import { RestaurantRead } from 'src/app/core/actions/restaurant.action';


@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit {

  page = 1;
  pageSize = 7;
bla;
  restaurant$: Observable<object>;

  constructor(
    private store: Store<{restaurant: object}>
  ) {
    this.restaurant$ = store.pipe(select('restaurant'));
    this.restaurant$.subscribe((x) => this.bla = x);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.bla.data);
  }

  montrerListe() {
    this.store.dispatch(new RestaurantRead());
  }

  ngOnInit() {
    this.montrerListe();
  }

}
