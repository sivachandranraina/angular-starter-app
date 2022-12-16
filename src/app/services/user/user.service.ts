import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  authUser(payload: any): Observable<any> {
    const url = `${API_URL}/auth/login`;
    return this.http.post(url, payload);
  }
}

// {
//       username: 'kminchelle',
//       password: '0lelplR',
//       expiresInMins: 60, // optional
//     }
