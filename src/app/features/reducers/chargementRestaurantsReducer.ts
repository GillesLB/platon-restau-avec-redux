import { INITIAL_STATE } from 'src/app/core/store/INITIAL_STATE';
import { ACTIONS } from 'src/app/core/store/ACTIONS';
import { RestaurantsState } from 'src/app/core/restaurantsState';
import { Action } from 'src/app/core/action';

export function chargementRestaurantsReducer(
    state = INITIAL_STATE,
    action: Action
): RestaurantsState {
    switch (action.type) {
        case ACTIONS.LOADING.GET_RESTAURANT_SUCCESS: {
            // chargé
            return {
                ...state,
                loading: false
            };
        }
        case ACTIONS.LOADING.GET_RESTAURANT_ERROR: {
            // en erreur
            return {
                ...state,
                loading: false,
                error: 'Chargement en erreur.'
            };
        }
        case ACTIONS.LOADING.GET_RESTAURANT_PENDING: {
            // en chargement
            return {
                ...state,
                loading: true
            };
        }
        default: {
            // par défaut, l'état actuel
            return state;
        }
    }
}
