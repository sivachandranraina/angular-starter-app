import { createSelector } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { AppStore } from '../../model';

export const extractedState = (state: AppStore) => state.cartState;

export const getCart = createSelector(
  extractedState,
  (cartState: Product[]) => {
    return cartState;
  }
);
