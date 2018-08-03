import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { FiltersComponent } from './components/filters/filters.component';
import { InfoComponent } from './components/info/info.component';
import { SendMeInfoComponent } from './components/send-me-info/send-me-info.component';
import { EnrollComponent } from './components/enroll/enroll.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { FooterComponent } from './elements/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    FiltersComponent,
    InfoComponent,
    SendMeInfoComponent,
    EnrollComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }