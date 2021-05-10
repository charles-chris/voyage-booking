import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  AOS  from 'aos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signIn } from 'src/app/modal/signIn';
import { signUp } from 'src/app/modal/signUp';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder
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
    console.log(this.signInModel);
  }
  onSubmitSignUp() {    
    console.log(this.signUpModel);
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
