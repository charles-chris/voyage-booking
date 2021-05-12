import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {SignUpServiceService} from 'src/app/service/sign-up-service.service';
import {SignInService} from 'src/app/service/sign-in.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    GalleryComponent,
    DestinationsComponent,
    UserComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    SignUpServiceService,
    SignInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
