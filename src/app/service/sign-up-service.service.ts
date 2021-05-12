import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  private baseUrl = 'https://ystyneknv5.execute-api.us-east-1.amazonaws.com/signInUp/users';

  constructor(private http: HttpClient) { }

  register(signUp: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, signUp);
  }
}
