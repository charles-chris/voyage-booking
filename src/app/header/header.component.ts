import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from 'src/app/service/auth-service.service';
import {  CookieService  } from 'ngx-cookie-service';  
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('stickyMenu',{ static: true }) menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  log:boolean;
  user:string;
  constructor(  private auth: AuthServiceService ,
    private cookie:CookieService,
    private router:Router,
    private flash:FlashMessagesService
       ) { }

  ngOnInit() {
  this.log = this.cookie.get('isLoggedIn')==='true';
  console.log(this.auth.login());
  if(this.log)
  {
    this.user = this.cookie.get('Username');
  }
  }
  onLogout()
  {
    this.cookie.set('isLoggedIn','false');
    this.cookie.delete('Username');
    this.cookie.delete('Password');
    this.router.navigate['/home'];
    window.location.reload();
    this.flash.show('Logged Out Successfully', {
      cssClass: 'alert-success', timeout: 4000
    });
    
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 50) {
       let element = document.getElementById('navbar');
       element.classList.add('floatingNav');
       element.classList.add('scrolled');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('floatingNav'); 
        element.classList.remove('scrolled');
     }
  }
}
