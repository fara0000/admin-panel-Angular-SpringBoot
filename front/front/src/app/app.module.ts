import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MainService } from './pages/main-page/main-page-service/main.service';
import { LoginService } from './pages/login-page/login-page-service/login.service';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { RegistrationService } from './pages/registration-page/registration-page-service/registration.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    HttpModule,
    FormsModule,
    ButtonModule,
    BrowserModule,
    InputTextModule,
    AppRoutingModule,
    InputNumberModule,
  ],
  providers: [
    MainService,
    LoginService,
    RegistrationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
