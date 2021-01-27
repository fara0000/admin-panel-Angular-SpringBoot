import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { getUserName } from '../../model/logic';
import { TokenService } from "../../../services/token-service.service";

@Injectable({
  providedIn: 'root'
})
export class GetPointsService {
  public name: any
  public username: any
  constructor(private _http: Http, private _tokenService: TokenService) {

  }

  public getPoints() {
    this.username = getUserName();

    return this._http.get(`http://localhost:8080/getPoints/${this.username}`).pipe(
      map(res => res.json(),
        (err: any) => this.handleError(err)
      )
    );
  };

  public handleError(err: any) {
    return Observable.throw(err || 'ERROR 500');
  }
}
