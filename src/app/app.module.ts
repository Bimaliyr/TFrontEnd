import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    NavComponent,
    HomeComponent,
    CustomerHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: "login", component: LogInComponent },
      { path: "home", component: HomeComponent },
      { path: "signup", component: SignUpComponent },
      { path: "customerhome", component: CustomerHomeComponent }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
