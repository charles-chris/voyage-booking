import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private baseUrl = 'https://ystyneknv5.execute-api.us-east-1.amazonaws.com/authUser/userdetail';
  constructor(private http: HttpClient) { }
  update(updateDetail:object): Observable<any> {
    return this.http.patch(`${this.baseUrl}`, updateDetail);
  }
}
