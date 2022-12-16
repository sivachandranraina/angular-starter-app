import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/model';
import { UserService } from 'src/app/services/user/user.service';
import { addAuthUser } from 'src/app/store/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private store: Store<AppStore>,
    private router: Router,
    private fb: FormBuilder
  ) {}
  loader: boolean = false;

  loginForm = this.fb.group({
    username: ['kminchelle', Validators.required],
    password: ['0lelplR', Validators.required],
  });

  ngOnInit(): void {}

  login = () => {
    this.loader = true;
    this.userService.authUser(this.loginForm.value).subscribe((data) => {
      this.store.dispatch(addAuthUser(data));
      this.loader = false;
      this.router.navigateByUrl('/');
    });
  };
}
