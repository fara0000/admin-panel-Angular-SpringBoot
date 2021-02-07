import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RegistrationService } from './registration-page-service/registration.service';
import {LoginService} from "../login-page/login-page-service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent implements OnInit {
  error: any;
  username: any;
  password: any;

  constructor(private _service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  public register(username: string, password: string): any {
    this.sendNewUser({username, password});
    this.cleanInputValue();
  }

  public sendNewUser(obj: any): any {
    this._service.addNewUser(obj).subscribe(
      (res: any) => {
        console.log(res, 'res');
        this.getLoginPage();
      },
          (err: any) => this.error = err._body,
    );
  }

  public getLoginPage() {
    setTimeout(() => this.router.navigate(["/lab4/login"]), 1000);
  }

  public cleanInputValue(): void {
    this.username = '';
    this.password = '';
  }
}
