import { LoginService } from './login-page-service/login.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { GetPointsService } from "../main-page/main-page-service/get-points.service";
import {TokenService} from "../../services/token-service.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  username: any;
  password: any;

  constructor(private _tokenService: TokenService, private _loginService: LoginService, private router: Router, private _getPointServer: GetPointsService) { }

  ngOnInit(): void {
  }

  public auth(username: string, password: string): any {
    this.authorization({username, password});
    this.cleanInputValue();
  }

  public authorization(obj: any): any {
    this._loginService.authUser(obj).subscribe(
      (res: any) => {
        this._tokenService.saveToken(res.token);
        this._tokenService.saveUser(res.id);
        this.getMainPage();
      },
      (err: HttpErrorResponse) => console.log(err, 'ERROR TOKEN'),
    );
  }

  public getMainPage() {
    setTimeout(() => this.router.navigate(["/main"]), 1000);
  }

  public cleanInputValue(): void {
    this.username = '';
    this.password = '';
  }
}
