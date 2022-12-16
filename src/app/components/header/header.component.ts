import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/model';
import { getCart } from 'src/app/store/cart/cart.selector';
import { getUser } from 'src/app/store/user/user.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart = this.store.select(getCart);
  userSelector = this.store.select(getUser);
  userDetails$: any = {};
  cartLength: number = 0;

  constructor(private store: Store<AppStore>) {}

  ngOnInit(): void {
    this.cart.subscribe((data) => {
      this.cartLength = data.length;
    });
    this.userSelector.subscribe((data) => {
      this.userDetails$ = data;
    });
  }
}
