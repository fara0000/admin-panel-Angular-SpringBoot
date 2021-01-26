import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import {LoginService} from "../pages/login-page/login-page-service/login.service";

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

  constructor(private _loginService: LoginService, private _router: Router) { }

  canActivate(): boolean {
    if (this._loginService.isLoggedIn()) {
      this._router.navigate(['/main'])
      return false
    } else {
      return true
    }
  }
}
