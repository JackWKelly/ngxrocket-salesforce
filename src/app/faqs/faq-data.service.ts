import { Injectable } from '@angular/core';
import { FaqsModule } from './faqs.module';
import { Record, Data, Faq } from '@app/models/faqQuery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: FaqsModule
})
export class FaqDataService {

  constructor(private http: HttpClient) { }

  getFaqs(name: String): Observable<Data> {
    let apiUrl = `http://localhost:3000/api/db/getfaqs?name=${name}`;
    return this.http.get<Data>(apiUrl, httpOptions);
  };

}
