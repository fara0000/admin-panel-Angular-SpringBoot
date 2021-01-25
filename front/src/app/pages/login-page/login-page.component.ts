import { LoginService } from './login-page-service/login.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { GetPointsService } from "../main-page/main-page-service/get-points.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  username: any;
  password: any;

  constructor(private _loginService: LoginService, private router: Router, private _getPointServer: GetPointsService) { }

  ngOnInit(): void {
  }

  public auth(username: string, password: string): any {
    this.authorization({username, password});
    this.cleanInputValue();
  }

  public authorization(obj: any): any {
    this._loginService.authUser(obj).subscribe(
      (res: any) => {
        this.setToken(res.token);
        this.setUserId(res.id);
        return res;
      },
      (err: HttpErrorResponse) => console.log(err, 'ERROR TOKEN'),
    );
  }

  public setToken(token: any) {
    localStorage.setItem("token", token);
  }

  public setUserId(id: any) {
    localStorage.setItem("userId", id);
    this.getMainPage();
  }

  public getMainPage() {
    setTimeout(() => this.router.navigate(["/main"]), 1000);
  }

  public cleanInputValue(): void {
    this.username = '';
    this.password = '';
  }
}
