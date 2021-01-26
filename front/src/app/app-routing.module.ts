import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import {AuthGuard} from "./guard/guard";

const routes: Routes = [
  { path: 'lab4/login', component: LoginPageComponent },
  { path: 'lab4/registration', component: RegistrationPageComponent },
  { path: 'lab4/main', component: MainPageComponent, canActivate: [AuthGuard]},
  { path: '',   redirectTo: '/lab4/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginPageComponent, RegistrationPageComponent, MainPageComponent ];
