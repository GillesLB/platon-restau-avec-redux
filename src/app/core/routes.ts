import { Routes } from "@angular/router";
import { PageAccueilComponent } from "../features/page-accueil/page-accueil.component";
import { ListeRestaurantsComponent } from "../features/liste-restaurants/liste-restaurants.component";
import { RestaurantDetailComponent } from "../features/restaurant-detail/restaurant-detail.component";
import { AjouterRestaurantComponent } from "../features/ajouter-restaurant/ajouter-restaurant.component";
import { SupprimerRestaurantComponent } from "../features/supprimer-restaurant/supprimer-restaurant.component";
import { PageNotFoundComponent } from "../features/page-not-found/page-not-found.component";


export const routes: Routes = [
    { path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
    { path: '', component: PageAccueilComponent },
    { path: 'liste', component: ListeRestaurantsComponent },
    { path: 'liste/:restaurantId', component: RestaurantDetailComponent },
    { path: 'ajouter-restaurant', component: AjouterRestaurantComponent },
    { path: 'supprimer-restaurant', component: SupprimerRestaurantComponent },
    { path: '**', component: PageNotFoundComponent }
  ];