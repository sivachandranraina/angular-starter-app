import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from '../../model';
import { getUser } from '../../store/user/user.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  tempDetails: boolean = false;
  constructor(private router: Router, private store: Store<AppStore>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.select(getUser).subscribe((data) => {
      data.firstName ? (this.tempDetails = true) : (this.tempDetails = false);
    });
    return this.tempDetails
      ? this.tempDetails
      : this.router.createUrlTree(['/login']);
  }
}
