import { LoginService } from './login-page-service/login.service';
import { Component, OnInit } from '@angular/core';
import { saveUserName } from '../model/logic'
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
  error: any;
  username: any;
  password: any;

  constructor(private _tokenService: TokenService, private _loginService: LoginService, private router: Router, private _getPointServer: GetPointsService) { }

  ngOnInit(): void {
  }

  public auth(username: string, password: string): any {
    this.authorization({username, password});

  }

  public authorization(obj: any): any {
    this._loginService.authUser(obj).subscribe(
      (res: any) => {
        this._tokenService.saveToken(res.token);
        this._tokenService.saveUser(this.username);
        saveUserName(this.username);
        this.cleanInputValue();
        this.getMainPage();
      },
      (err: any) => {
        this.error = err._body;
        this.cleanInputValue();
      },
    );
  }

  public getMainPage() {
    setTimeout(() => this.router.navigate(["/lab4/main"]), 1000);
  }

  public cleanInputValue(): void {
    this.username = '';
    this.password = '';
  }
}
