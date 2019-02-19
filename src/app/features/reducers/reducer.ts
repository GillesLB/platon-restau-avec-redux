import { combineReducers, createStore } from 'redux';

import { chargementRestaurantsReducer } from 'src/app/features/reducers/chargementRestaurantsReducer';
import { CRUDReducer } from 'src/app/features/reducers/CRUDReducer';


const reducer = combineReducers({
    chargementRestaurantsReducer,
    CRUDReducer
});

const store = createStore(reducer);
