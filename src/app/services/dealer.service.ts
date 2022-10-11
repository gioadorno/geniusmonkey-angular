import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Dealer, Deck } from '../Dealer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token 8e03b399-3b81-11ed-812e-00be4349ca1c`,
  })
}

@Injectable({
  providedIn: 'root'
})
export class DealerService {
  private apiUrl = `https://dealer-5wb4b3itbq-uc.a.run.app/dealers/`;
  id!: string
  dealer!: Dealer[];
  deck!: Deck[];

  constructor(private http:HttpClient) { }

  getDealers(): Observable<Dealer[]> {
    return this.http.get<Dealer[]>(this.apiUrl, httpOptions);
  }

  getDeck(): Observable<Deck[]> {
    const url = `${this.apiUrl}8eca01b9-3b81-11ed-812e-00be4349ca1c/shuffle/`
    return this.http.put<Deck[]>(url, httpOptions);
  }
}
