import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { getUserName } from '../../model/logic';
import { TokenService } from "../../../services/token-service.service";
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteAllPointsService {
  private username: string;

  constructor(private _http: Http) {
    this.username = '';
  }

  public dropAllPoints() {
    this.username = getUserName();

    return this._http.delete(`http://localhost:31440/lab4/dropTable/${this.username}`).pipe(
      map(res => res,
        (error: any) => this.handleError(error)
      )
    );
  };

  public handleError(err: any) {
    return Observable.throw(err || 'ERROR 500');
  }
}
