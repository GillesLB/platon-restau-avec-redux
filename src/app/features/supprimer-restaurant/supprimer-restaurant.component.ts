import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { restaurants } from 'src/app/core/liste-restaurants';
import { RestaurantDelete, RestaurantRead } from 'src/app/core/actions/restaurant.action';
import { RestaurantsService } from 'src/app/features/services/restaurants.service';
import { Restaurant } from 'src/app/core/restaurant';

@Component({
  selector: 'app-supprimer-restaurant',
  templateUrl: './supprimer-restaurant.component.html',
  styleUrls: ['./supprimer-restaurant.component.css']
})
export class SupprimerRestaurantComponent implements OnInit {

  closeResult: string;

  page = 1;
  pageSize = 7;

  afficherBoutonSupprimer = false;

  listeRestaurants: Restaurant[] = [];

  restaurants = restaurants;
  restaurant$: Observable<object>;

  id: number = null;
  aSupprimer: number[] = [];

  constructor(
    private modalService: NgbModal,
    private restaurantsService: RestaurantsService,
    private store: Store<{restaurant: object}>
  ) {
    this.listeRestaurants = this.restaurantsService.listeRestaurants;
    // this.restaurant$ = store.pipe(select('restaurant'));
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
    // this.store.dispatch(new RestaurantRead());
  }

  ngOnInit() {
    // this.montrerListe();
  }

  cocher(event, check) {
    if (check === true) {
      this.id = event.target.value;
      this.aSupprimer.push(this.id);
      this.afficherBoutonSupprimer = true;
    } else {
      const rangASupprimer = this.aSupprimer.indexOf(this.id);
      this.aSupprimer.splice(rangASupprimer, 1);
      this.id = null;
      this.afficherBoutonSupprimer = false;
    }
  }

  supprimerRestaurant() {
      for (let i = 0; i < this.aSupprimer.length; i++) {
          this.restaurants.splice(this.aSupprimer[i], 1);
      }
      for (let j = 0; j < this.restaurants.length; j++) {
        this.restaurants[j].restaurantId = j;
      }
    // this.store.dispatch(new RestaurantDelete(this.restaurants));
    this.restaurantsService.listeRestaurants = this.restaurants;
    this.afficherBoutonSupprimer = false;
    this.aSupprimer = [];
  }

}
