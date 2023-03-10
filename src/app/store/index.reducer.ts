import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { cartReducer } from './cart/cart.reducer';
import { authReducer } from './user/user.reducer';

export const reducers = {
  cartState: cartReducer,
  authState: authReducer,
};

// Reset the reducer state on logout
const clearState = (reducer: any) => {
  return function (state: undefined, action: { type: any }) {
    if (action.type === '[Auth User] remove') {
      state = undefined;
    }
    return reducer(state, action);
  };
};

const localStorageSyncReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return localStorageSync({ keys: ['authState'], rehydrate: true })(reducer);
};

export const presistor: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
  clearState,
];
