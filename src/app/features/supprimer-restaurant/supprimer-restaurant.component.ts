import { Component, OnInit } from '@angular/core';

import { restaurants } from 'src/app/features/liste-restaurants/liste-restaurants';

@Component({
  selector: 'app-supprimer-restaurant',
  templateUrl: './supprimer-restaurant.component.html',
  styleUrls: ['./supprimer-restaurant.component.css']
})
export class SupprimerRestaurantComponent implements OnInit {

  page = 1;
  pageSize = 5;
  restaurants = restaurants;

  indexPage: number[] = [];
  finBoucle = 0;
  id: number = null;
  aSupprimer: number[] = [];

  supprimerSelection = 'cacher-bouton-supprimer';
  cacherMessageConfirmationSuppression = 'cacher-message-confirmation-suppression';
  cacherPagination = '';
  cacherTableauRestaurantsVisibles = '';
  restaurantsVisibles = [];

  constructor() { }

  ngOnInit() { }

  cacherMessageConfirmationSuppressionRestaurant() {
    this.cacherTableauRestaurantsVisibles = 'cacher-tableau-restaurants';
    this.cacherMessageConfirmationSuppression = '';
  }

  cocher(event, check) {
    if (check === true) {
      this.id = event.target.value;
      this.aSupprimer.push(this.id);
      this.supprimerSelection = '';
    } else {
      const rangASupprimer = this.aSupprimer.indexOf(this.id);
      this.aSupprimer.splice(rangASupprimer, 1);
      this.id = null;
      this.supprimerSelection = 'cacher-bouton-supprimer';
    }
    console.log('A supp : ', this.aSupprimer);
  }

  supprimerRestaurant() {
    if (window.confirm('Etes vous sur de vouloir supprimer ce(s) restaurant(s) ?')) {
      for (let i = 0; i < this.aSupprimer.length; i++) {
        this.restaurants.splice(this.aSupprimer[i], 1);
      }
    }
    this.supprimerSelection = 'cacher-bouton-supprimer';
    this.cacherPagination = 'cacher-pagination';
    this.cacherMessageConfirmationSuppressionRestaurant();
  }

}
