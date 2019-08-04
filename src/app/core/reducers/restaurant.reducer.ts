import { ACTIONS } from 'src/app/core/actions/ACTIONS';
import { INITIAL_STATE } from 'src/app/core/store/INITIAL_STATE';
import { ActionsRestaurantUnion } from 'src/app/core/actions/restaurant.action';

export function restaurantReducer(state = INITIAL_STATE, action: ActionsRestaurantUnion) {
    switch (action.type) {
        case ACTIONS.CRUD.GET_RESTAURANT_READ:
            return state;
        case ACTIONS.CRUD.GET_RESTAURANT_ADD:
            // Récupération des datas
            const restaurantAAjouter = action.payload;
            return {
                // "clonage" du state
                ...state,
                // modification de la donnée data du state
                // et ajout de la donnée (ici, restaurantAAjouter) à la fin du tableau
                data: [...state, restaurantAAjouter]
                // data: [...state.data, restaurantAAjouter]
            };
        case ACTIONS.CRUD.GET_RESTAURANT_DELETE:
            const restaurantASupprimer = action.payload;
            return {
                data: restaurantASupprimer
            };
        case ACTIONS.LIST.GET_COMMENT_ADD:
            const commentaireAAjouter = action.payload;
            return {
                data: commentaireAAjouter
            };
        case ACTIONS.LIST.GET_NOTE_ADD:
            const noteAAjouter = action.payload;
            return {
                data: noteAAjouter
            };
        default:
            return state;
    }
}
