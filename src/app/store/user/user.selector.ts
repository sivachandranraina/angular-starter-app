import { createSelector } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { AppStore } from '../../model';

export const extractedState = (state: AppStore) => state.authState;

export const getUser = createSelector(extractedState, (authState: User) => {
  return authState;
});
