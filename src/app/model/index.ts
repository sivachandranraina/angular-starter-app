import { Product } from './product.model';
import { User } from './user.model';

export interface AppStore {
  cartState: Product[];
  authState: User;
}
