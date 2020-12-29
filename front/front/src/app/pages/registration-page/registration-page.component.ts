import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RegistrationService } from './registration-page-service/registration.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
  }

  public sendNewUser(obj: any): any {
    this._service.addNewUser(obj).subscribe(
      (res: any) => res,
      (err: HttpErrorResponse) => console.log(err),
    );
  }
}
