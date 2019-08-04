import { Routes } from '@angular/router';

import { PageAccueilComponent } from 'src/app/features/page-accueil/page-accueil.component';
import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';
import { AjouterRestaurantComponent } from 'src/app/features/ajouter-restaurant/ajouter-restaurant.component';
import { SupprimerRestaurantComponent } from 'src/app/features/supprimer-restaurant/supprimer-restaurant.component';
import { PageNotFoundComponent } from 'src/app/features/page-not-found/page-not-found.component';
import { CarteRestaurantsComponent } from 'src/app/features/carte-restaurants/carte-restaurants.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'liste', component: ListeRestaurantsComponent },
  { path: 'liste/:restaurantId', component: RestaurantDetailComponent },
  { path: 'ajouter-restaurant', component: AjouterRestaurantComponent },
  { path: 'supprimer-restaurant', component: SupprimerRestaurantComponent },
  { path: 'carte-restaurants', component: CarteRestaurantsComponent },
  { path: '**', component: PageNotFoundComponent }
];
