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
import { AppStore } from 'src/app/model';
import { getUser } from 'src/app/store/user/user.selector';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  tempDetails: boolean = false;
  constructor(private store: Store<AppStore>, private router: Router) {}
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
    return this.tempDetails ? this.router.createUrlTree(['/']) : true;
  }
}
