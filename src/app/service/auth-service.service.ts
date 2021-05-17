import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';  
import {  CookieService  } from 'ngx-cookie-service';  
import { signIn } from '../modal/signIn';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private route:Router;
  isloggedin:boolean;  
  name:string;
  constructor(private http: HttpClient,
  private auth:CookieService) { }
  checkLogValues(value: signIn): boolean {  
    this.isloggedin = this.auth.get('isLoggedIn')==='true';
    console.log(this.isloggedin);
    if (this.isloggedin) {   
        // alert('Login valid');
        this.name = value.Username;
        return true;  
    } 
    else 
    {  
        return false;  
    }  
  }
  login()
  {
    if(this.isloggedin)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  userName()
  {
    if(this.isloggedin)
    {
      return this.name;
    }
  }
}
