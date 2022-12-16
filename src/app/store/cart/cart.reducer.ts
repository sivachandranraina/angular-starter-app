import { createReducer, on } from '@ngrx/store';
import { addToCart } from './cart.actions';
import { Product } from 'src/app/model/product.model';

const initialState: Product[] = [];
export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { payload }) => {
    if (state.find(({ id }) => payload.id == id)) return state;
    else return [...state, payload];
  })
);
