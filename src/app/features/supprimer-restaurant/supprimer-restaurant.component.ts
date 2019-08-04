import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { restaurants } from 'src/app/core/liste-restaurants';
import { RestaurantDelete, RestaurantRead } from 'src/app/core/actions/restaurant.action';

@Component({
  selector: 'app-supprimer-restaurant',
  templateUrl: './supprimer-restaurant.component.html',
  styleUrls: ['./supprimer-restaurant.component.css']
})
export class SupprimerRestaurantComponent implements OnInit {

  closeResult: string;

  page = 1;
  pageSize = 8;
  restaurants = restaurants;
  restaurant$: Observable<object>;

  id: number = null;
  aSupprimer: number[] = [];

  supprimerSelection = 'cacher-bouton-supprimer';
  cacherMessageConfirmationSuppression = 'cacher-message-confirmation-suppression';
  cacherPagination = '';
  cacherTableauRestaurantsVisibles = '';

  constructor(
    private modalService: NgbModal,
    private store: Store<{restaurant: object}>
  ) {
    this.restaurant$ = store.pipe(select('restaurant'));
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  montrerListe() {
    this.store.dispatch(new RestaurantRead());
  }

  ngOnInit() {
    this.montrerListe();
  }

  cacherMessageConfirmationSuppressionRestaurant() {
    this.cacherTableauRestaurantsVisibles = 'cacher-tableau-restaurants';
    this.cacherMessageConfirmationSuppression = '';
    this.cacherPagination = 'cacher-pagination';
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
  }

  supprimerRestaurant() {
      for (let i = 0; i < this.aSupprimer.length; i++) {
          this.restaurants.splice(this.aSupprimer[i], 1);
      }
      for (let j = 0; j < this.restaurants.length; j++) {
        this.restaurants[j].restaurantId = j;
      }
    this.store.dispatch(new RestaurantDelete(this.restaurants));
    this.supprimerSelection = 'cacher-bouton-supprimer';
    this.cacherMessageConfirmationSuppressionRestaurant();
    this.aSupprimer = [];
  }

}
