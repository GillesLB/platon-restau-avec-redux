import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes } from 'src/app/core/routes';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { PageDefautComponent } from 'src/app/shared/layout/page-defaut/page-defaut.component';
import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { PageNotFoundComponent } from 'src/app/features/page-not-found/page-not-found.component';
import { RestaurantDetailComponent } from './features/restaurant-detail/restaurant-detail.component';
import { AjouterRestaurantComponent } from './features/ajouter-restaurant/ajouter-restaurant.component';
import { SupprimerRestaurantComponent } from './features/supprimer-restaurant/supprimer-restaurant.component';
import { AjouterNoteComponent } from './shared/layout/ajouter-note/ajouter-note.component';
import { AjouterCommentaireComponent } from './shared/layout/ajouter-commentaire/ajouter-commentaire.component';
import { PaginationService } from './features/pagination.service';
import { PageAccueilComponent } from './features/page-accueil/page-accueil.component';
import { MenuGaucheComponent } from './shared/layout/menu-gauche/menu-gauche.component';
import { restaurantReducer } from './core/reducers/restaurant.reducer';
import { environment } from 'src/environments/environment.prod';
import { MomentModule } from 'ngx-moment';
import { TabsetComponent } from './shared/layout/tabset/tabset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageDefautComponent,
    ListeRestaurantsComponent,
    PageNotFoundComponent,
    RestaurantDetailComponent,
    AjouterRestaurantComponent,
    SupprimerRestaurantComponent,
    AjouterNoteComponent,
    AjouterCommentaireComponent,
    PageAccueilComponent,
    MenuGaucheComponent,
    TabsetComponent,
  ],
  exports: [
    RouterModule
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({restaurant: restaurantReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpModule,
    HttpClientModule,
    FormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: [
    ListeRestaurantsComponent,
    PaginationService,
    RestaurantDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
