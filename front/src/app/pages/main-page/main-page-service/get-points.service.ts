import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TokenService } from "../../../services/token-service.service";

@Injectable({
  providedIn: 'root'
})
export class GetPointsService {
  // public id: string | null
  constructor(private _http: Http, private _tokenService: TokenService) {
    // this.id = this._tokenService.getUser();
    // console.log(this._tokenService.getUser());
  }

  public getPoints() {
    return this._http.get(`http://localhost:31440/lab4/getPoints`).pipe(
      map(res => res.json(),
        (err: any) => this.handleError(err)
      )
    );
  };

  public handleError(err: any) {
    return Observable.throw(err || 'ERROR 500');
  }
}
