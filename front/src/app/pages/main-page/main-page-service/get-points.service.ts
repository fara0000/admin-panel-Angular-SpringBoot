import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetPointsService {
  public id: string | null
  constructor(private _http: Http) {
    console.log(localStorage.getItem("userId"), 'ls');
    this.id = localStorage.getItem("userId")
  }

  public getPoints() {
    return this._http.get(`http://localhost:8080/getPoints/${this.id}`).pipe(
      map(res => res.json(),
        (err: any) => this.handleError(err)
      )
    );
  };

  public handleError(err: any) {
    return Observable.throw(err || 'ERROR 500');
  }
}
