import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/core/actions/ACTIONS';

export class RestaurantAdd implements Action {
    readonly type = ACTIONS.CRUD.GET_RESTAURANT_ADD;
}

export class RestaurantRead implements Action {
    readonly type = ACTIONS.CRUD.GET_RESTAURANT_READ;
}

export class RestaurantDelete implements Action {
    readonly type = ACTIONS.CRUD.GET_RESTAURANT_DELETE;
}

export class CommentAdd implements Action {
    readonly type = ACTIONS.LIST.GET_COMMENT_ADD;
}

export class NoteAdd implements Action {
    readonly type = ACTIONS.LIST.GET_NOTE_ADD;
}
