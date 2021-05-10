import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('stickyMenu',{ static: true }) menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
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
