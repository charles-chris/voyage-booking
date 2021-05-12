import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private baseUrl = 'https://ystyneknv5.execute-api.us-east-1.amazonaws.com/signInUp/users';
  constructor(private http: HttpClient) { }
  logIn(Username: string,Password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?Username=${Username}&Password=${Password}`);
  }
}
