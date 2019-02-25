import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from 'src/app/core/routes';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { PageDefautComponent } from 'src/app/shared/layout/page-defaut/page-defaut.component';
import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { PageNotFoundComponent } from 'src/app/features/page-not-found/page-not-found.component';
import { RestaurantDetailComponent } from './features/restaurant-detail/restaurant-detail.component';
import { BoutonComponent } from './shared/components/bouton/bouton.component';
import { AjouterRestaurantComponent } from './features/ajouter-restaurant/ajouter-restaurant.component';
import { SupprimerRestaurantComponent } from './features/supprimer-restaurant/supprimer-restaurant.component';
import { AjouterNoteComponent } from './shared/layout/ajouter-note/ajouter-note.component';
import { AjouterCommentaireComponent } from './shared/layout/ajouter-commentaire/ajouter-commentaire.component';
import { PaginationService } from './features/pagination.service';
import { PageAccueilComponent } from './features/page-accueil/page-accueil.component';
import { MenuGaucheComponent } from './shared/layout/menu-gauche/menu-gauche.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageDefautComponent,
    ListeRestaurantsComponent,
    PageNotFoundComponent,
    RestaurantDetailComponent,
    BoutonComponent,
    AjouterRestaurantComponent,
    SupprimerRestaurantComponent,
    AjouterNoteComponent,
    AjouterCommentaireComponent,
    PageAccueilComponent,
    MenuGaucheComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ListeRestaurantsComponent,
    PaginationService,
    RestaurantDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
