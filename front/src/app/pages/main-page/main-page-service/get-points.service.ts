import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetPointsService {

  constructor(private _http: Http) { }

  public getPoints() {
    return this._http.get('http://localhost:8080/getPoints').pipe(
      map(res => res.json(),
        (err: any) => this.handleError(err)
      )
    );
  };

  public handleError(err: any) {
    return Observable.throw(err || 'ERROR 500');
  }
}
