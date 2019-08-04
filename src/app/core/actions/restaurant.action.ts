import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/core/actions/ACTIONS';
import { IRestaurant, Restaurant } from 'src/app/core/restaurant';

export class RestaurantAdd implements Action {
    // Type (nom unique écouté par le reducer)
    readonly type = ACTIONS.CRUD.GET_RESTAURANT_ADD;
    // Data
    constructor(public payload: IRestaurant) {}
}

export class RestaurantRead implements Action {
    readonly type = ACTIONS.CRUD.GET_RESTAURANT_READ;
}

export class RestaurantDelete implements Action {
    readonly type = ACTIONS.CRUD.GET_RESTAURANT_DELETE;
    constructor(public payload: Restaurant[]) {}
}

export class CommentAdd implements Action {
    readonly type = ACTIONS.LIST.GET_COMMENT_ADD;
    constructor(public payload: Restaurant[]) {}
}

export class NoteAdd implements Action {
    readonly type = ACTIONS.LIST.GET_NOTE_ADD;
    constructor(public payload: Restaurant[]) {}
}

// Indiquer ceux qui ont besoin d'un payload
export type ActionsRestaurantUnion = RestaurantAdd | RestaurantDelete | CommentAdd | NoteAdd;
