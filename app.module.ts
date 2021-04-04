import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {PeronDataService} from '../app/service/peron-data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { LoginComponent } from './layout/login/login.component';
import { UserWindowComponent } from './layout/user-window/user-window.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    UserWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [PeronDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
