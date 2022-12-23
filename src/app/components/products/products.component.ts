import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { addToCart } from 'src/app/store/cart/cart.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }

  addToCart(data: Product) {
    this.store.dispatch(addToCart({ payload: data }));
  }
}
