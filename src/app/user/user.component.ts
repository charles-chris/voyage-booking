import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  AOS  from 'aos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signIn } from 'src/app/modal/signIn';
import { signUp } from 'src/app/modal/signUp';
import {SignUpServiceService} from 'src/app/service/sign-up-service.service';
import { SignInService } from '../service/sign-in.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    isLoggedIn: boolean = false;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private signUpServiceService : SignUpServiceService,
    private signInService : SignInService,
    private flashMessage : FlashMessagesService
  ) {}
  signInModel;
  signUpModel;
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Firstname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$_!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
      
      
      
  });
    AOS.init();
    this.signInModel = new signIn("","");
    this.signUpModel = new signUp("","","","");

  }
  onSubmitSignIn() {    
    this.signInService.logIn(this.signInModel.Username,this.signInModel.Password)
      .subscribe(res => {
        if(res['statusCode'] == 200)
        {
          console.log(res['Message']);
          this.flashMessage.show(res['Message'], {
            cssClass: 'alert-success', timeout: 4000,
          }
          );
          this.isLoggedIn = true;
          this.router.navigate(['/']);
        }
        if(res['statusCode'] == 201)
        {
          console.log(res['Message']);
          this.flashMessage.show(res['Message'], {
            cssClass: 'alert-danger', timeout: 4000
          });
          this.isLoggedIn = false;
        }
        if(res['statusCode'] == 202)
        {
          console.log(res['Message']);
          this.flashMessage.show(res['Message'], {
            cssClass: 'alert-danger', timeout: 4000
          });
          this.isLoggedIn = false;
        }
      }),error => 
      this.flashMessage.show('You are not registered ', {
        cssClass: 'alert-danger', timeout: 4000
      });
      console.log("error")
  }
  /*onSubmitSignUp() {    
    this.signUpServiceService.register(this.signUpModel)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.order = new Order();
    //this.gotoList();
    console.log("Success");
  }*/
  onSubmitSignUp() {
    this.signUpServiceService.register(this.signUpModel)
      .subscribe(res => {
        const container = document.querySelector(".contain");
        if(res['statusCode'] == 100)
        {
          console.log(res['Message'])
          this.flashMessage.show('You are now registered Successfully', {
            cssClass: 'alert-success', timeout: 4000
          });
          container.classList.remove("sign-up-mode");
        }
      }),error => 
      this.flashMessage.show('You are not registered ', {
        cssClass: 'alert-danger', timeout: 4000
      });
      console.log("error")
  }
  get f() { return this.registerForm.controls; }

  back(){
    console.log("Back");
    this.router.navigate(['/']);
  }
  ngAfterViewInit(){
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".contain");
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
  });
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
  });
  }
  
}
