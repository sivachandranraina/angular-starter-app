import { createAction, props } from '@ngrx/store';

export const addToCart = createAction('[Cart] add', props<{ payload: any }>());
