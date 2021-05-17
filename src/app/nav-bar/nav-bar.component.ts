import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from 'src/app/service/auth-service.service';
import {  CookieService  } from 'ngx-cookie-service';  
import { FlashMessagesService } from 'angular2-flash-messages';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('stickyMenu',{ static: false }) menuElement: ElementRef;
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


