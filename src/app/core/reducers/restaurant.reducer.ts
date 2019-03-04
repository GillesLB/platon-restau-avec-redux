import { Action } from '@ngrx/store';

import { INITIAL_STATE } from 'src/app/core/store/INITIAL_STATE';
import { ACTIONS } from 'src/app/core/actions/ACTIONS';
import { restaurants } from 'src/app/features/liste-restaurants/liste-restaurants';
import { AjouterRestaurantComponent } from 'src/app/features/ajouter-restaurant/ajouter-restaurant.component';

console.log('A: ', AjouterRestaurantComponent);

export function restaurantReducer(state = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case ACTIONS.CRUD.GET_RESTAURANT_READ:
            return {
                ...state,
                data: state.data = restaurants
            };
        case ACTIONS.CRUD.GET_RESTAURANT_ADD:
            return {
                // "clonage" du state
                ...state,
                // modification de la donnée data du state
                // et ajout de la donnée (ici, restaurantAAjouter) à la fin du tableau
                data: [...state.data, AjouterRestaurantComponent.restaurantAAjouter]
            };
        case ACTIONS.CRUD.GET_RESTAURANT_DELETE:
            const top: any[] = [];
            for (let i = 0; i < restaurants.length; i++) {
                if (restaurants[i].note > 3) {
                    top.push(restaurants[i]);
                }
            }
            return {
                ...state,
                data: state.data = top
            };
        default:
            return state;
    }
}
