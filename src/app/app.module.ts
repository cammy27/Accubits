import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmailComponent} from '../app/login/email.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './login/password/password.component';
import { SubmitComponent } from './login/submit/submit.component';
import { SecureComponent } from './home/secure/secure.component';
import { ProductsComponent } from './home/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmailComponent,
    PasswordComponent,
    SubmitComponent,
    SecureComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
