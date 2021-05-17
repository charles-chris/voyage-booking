import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  private baseUrl = 'https://ystyneknv5.execute-api.us-east-1.amazonaws.com/authUser/userdetail';
  constructor(private http: HttpClient) { }
  getUser(Username: String): Observable<any> {
    return this.http.get(`${this.baseUrl}?Username=${Username}`);
  }
  
}
