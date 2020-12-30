import { LoginService } from './login-page-service/login.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  login: any;
  password: any;

  constructor(private _service: LoginService) { }

  ngOnInit(): void {
  }

  public auth(login: string, password: string): any {
    this.authorization({login, password});
    console.log({login, password}, 'log');
    this.cleanInputValue();
  }

  public authorization(obj: any): any {
    this._service.authUser(obj).subscribe(
      (res: any) => res,
      (err: HttpErrorResponse) => console.log(err),
    );
  }

  public cleanInputValue(): void {
    this.login = '';
    this.password = '';
  }
}
