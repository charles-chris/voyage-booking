import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent }
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
