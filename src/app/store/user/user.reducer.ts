import { createReducer, on } from '@ngrx/store';
import { addAuthUser, removeAuthUser } from './user.actions';

export const authReducer = createReducer(
  {},
  on(addAuthUser, (state, data) => {
    return { ...state, ...data };
  }),
  on(removeAuthUser, (_state, _data) => {
    return {};
  })
);
