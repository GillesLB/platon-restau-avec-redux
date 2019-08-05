import { Component, OnInit } from '@angular/core';

// librairie pour cartes interactives
import * as L from 'leaflet';

import { Restaurant } from 'src/app/core/restaurant';
import { RestaurantsService } from 'src/app/features/services/restaurants.service';

@Component({
  selector: 'app-carte-restaurants',
  templateUrl: './carte-restaurants.component.html',
  styleUrls: ['./carte-restaurants.component.css']
})
export class CarteRestaurantsComponent implements OnInit {

  listeRestaurants: Restaurant[] = [];
  nombreRestaurants: number;

  constructor(
    private restaurantsService: RestaurantsService,
  ) {
    this.listeRestaurants = this.restaurantsService.listeRestaurants;
  }

  ngOnInit() {
    this.nombreRestaurants = this.listeRestaurants.length;

    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myplatonrestau = L.map('platonrestau').setView([47.207527, -1.546276], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Platon Restau'
    }).addTo(myplatonrestau);

    const myIcon = L.icon({iconUrl: 'assets/images/marker-icon-laposte.png'});
    const myIconDefault = L.icon({iconUrl: 'assets/images/marker-icon-blue.png'});

    L.marker([47.207527, -1.546276], {icon: myIcon}).bindPopup('CSMSI - Atlantica').addTo(myplatonrestau).openPopup();
    this.bouclerRestaurants(myIconDefault, myplatonrestau);
  }

  bouclerRestaurants(myIcon, myplatonrestau) {
    for (let i = 0; i < this.listeRestaurants.length; i++) {
      L.marker([this.listeRestaurants[i].latitude, this.listeRestaurants[i].longitude], {icon: myIcon})
        .bindPopup(this.listeRestaurants[i].nom).addTo(myplatonrestau);
    }
  }

}
