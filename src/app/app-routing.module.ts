import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MyAccountComponent } from './my-account/my-account.component';
import { DestPackagesComponent } from './dest-packages/dest-packages.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent },
  { path: 'myAcc', component: MyAccountComponent },
  { path: 'destPack', component: DestPackagesComponent },
  {path: 'nav-bar', component: NavBarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  BrowserModule,
  FontAwesomeModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
