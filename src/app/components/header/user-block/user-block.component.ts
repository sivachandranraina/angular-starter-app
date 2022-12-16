import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/model';
import { removeAuthUser } from 'src/app/store/user/user.actions';
import { getUser } from 'src/app/store/user/user.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
})
export class UserBlockComponent implements OnInit {
  userSelector = this.store.select(getUser);
  userDetails$: any = {};
  constructor(private store: Store<AppStore>, private router: Router) {
    this.userSelector.subscribe((data) => {
      this.userDetails$ = data;
    });
  }

  ngOnInit(): void {}

  logout = () => {
    this.store.dispatch(removeAuthUser());
    this.router.navigateByUrl('/login');
  };
}
