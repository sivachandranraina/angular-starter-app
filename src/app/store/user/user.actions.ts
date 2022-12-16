import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export const addAuthUser = createAction(
  '[Auth User] add',
  props<{ data: User }>()
);

export const removeAuthUser = createAction('[Auth User] remove');
