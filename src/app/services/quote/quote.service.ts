import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<any> {
    const url = `${API_URL}/quotes/random`;
    return this.http.get<any>(url);
  }
}
