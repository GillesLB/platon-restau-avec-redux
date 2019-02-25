import { Component, OnInit } from '@angular/core';

import { restaurants } from 'src/app/core/liste-restaurants';

@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit {

  page = 1;
  pageSize = 5;
  restaurants = restaurants;


  constructor() { }

  ngOnInit() { }

}
