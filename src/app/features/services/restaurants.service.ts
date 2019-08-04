import { Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import * as firebase from 'firebase';
// c'est une déclaration d'objet, ce qui est différent d'un import de package
import Datasnapshot = firebase.database.DataSnapshot;
import { Restaurant } from 'src/app/core/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService implements OnInit {

  listeRestaurants: Restaurant[] = [];

  restaurantsSubject = new Subject<Restaurant[]>();

  constructor() {
    this.getRestaurants();
  }

  ngOnInit() {

  }

  emitRestaurants() {
    this.restaurantsSubject.next(this.listeRestaurants);
  }

  getRestaurants() {
    firebase.database().ref('/posts')
      .on('value', (data: Datasnapshot) => {
        this.listeRestaurants = data.val()
          ? data.val()
          : [];
        this.emitRestaurants();
      });
  }

  saveRestaurants() {
    firebase.database().ref('/posts').set(this.listeRestaurants);
  }

}
