import { INITIAL_STATE } from 'src/app/core/store/INITIAL_STATE';
import { ACTIONS } from 'src/app/core/store/ACTIONS';
import { RestaurantsState } from 'src/app/core/restaurantsState';
import { Action } from 'src/app/core/action';

export function CRUDReducer(
    state = INITIAL_STATE,
    action: Action
): RestaurantsState {
    switch (action.type) {
        case ACTIONS.CRUD.GET_RESTAURANT_ADD: {
            // ajouter
            return {
                ...state,
                loading: false
            };
        }
        case ACTIONS.CRUD.GET_RESTAURANT_DELETE: {
            // supprimer
            return {
                ...state,
                loading: false,
            };
        }
        case ACTIONS.CRUD.GET_RESTAURANT_READ: {
            // consulter
            return {
                ...state,
                loading: false
            };
        }
        default: {
            // par défaut, l'état actuel
            return state;
        }
    }
}
