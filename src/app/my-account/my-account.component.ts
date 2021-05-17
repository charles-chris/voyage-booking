import { Component, OnInit } from '@angular/core';
import {UserDetailService} from 'src/app/service/user-detail.service';
import { CookieService } from 'ngx-cookie-service';
import { update } from 'src/app/modal/update';
import {UpdateService} from 'src/app/service/update.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  Username:string;
  Email:string;
  Firstname:string;
  City:string;
  Address:string;
  StateIn:string;
  Zip:string;
  Level:string;
  constructor(private userDetail:UserDetailService,
    private cookie:CookieService,
    private updateSer:UpdateService,
    private flashMessage:FlashMessagesService) { }
    updateModel;
  ngOnInit() {
    this.Username = this.cookie.get('Username');
    
    this.userDetail.getUser(this.Username)
          .subscribe(result => {
            this.Email = result['Email'];
            this.Firstname = result['Firstname'];
            this.City=result['City'];
            this.StateIn=result['StateIn'];
            this.Zip=result['Zip'];
            this.Address=result['Address'];
            if(result['Level']=='Admin')
            {
              this.Level = 'Admin';
            }
            else
            {
              this.Level = 'User';
            }
          }),error => console.log("Error in cookie"); 
          this.updateModel = new update("","","","","","","");
  let btn = document.getElementById("profileImage");
  btn.addEventListener("click",(e:Event)=> document.getElementById("#imageUpload"));
  }

  OnSubmitUpdate()
  {
    this.Firstname = (< HTMLInputElement >document.getElementById("fname")).value;
    this.Email = (< HTMLInputElement >document.getElementById("email")).value;
    this.StateIn = (< HTMLInputElement >document.getElementById("state")).value;
    this.Address = (< HTMLInputElement >document.getElementById("adr")).value;
    this.City = (< HTMLInputElement >document.getElementById("city")).value;
    this.Zip = (< HTMLInputElement >document.getElementById("zip")).value;
    this.updateModel = new update(this.Username,this.Email,this.Firstname,this.Address,this.StateIn,this.Zip,this.City);
    console.log(this.updateModel)
    this.updateSer.update(this.updateModel)
      .subscribe(res => {
        if(res['statusCode'] == 300)
        {
          console.log(res['Message'])
          this.flashMessage.show(res['Message'], {
            cssClass: 'alert-success', timeout: 4000
          });
          
        }
      }),error => 
      this.flashMessage.show('Not Updated ', {
        cssClass: 'alert-danger', timeout: 4000
      });
  }
  
  
}
