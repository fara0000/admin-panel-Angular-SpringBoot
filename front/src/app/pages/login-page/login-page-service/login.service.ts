import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {TokenService} from "../../../services/token-service.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: Http, private _tokenService: TokenService) { }

  public authUser(obj: any): any {
    return this._http.post('http://localhost:8080/login', obj).pipe(
      map(res => res.json(),
  (err: any) => {
          this.handleError(err);
        }
      ),
    );
  }

  isLoggedIn() {
    return this._tokenService.getToken() !== null;
  }

  getUser() {
    return this._tokenService.getUser();
  }

  logOut() {
    this._tokenService.signOut();
  }

  handleError(err: any): any {
    return Observable.throw(err || 'Error 500');
  }
}
