import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";
import {Service} from "../interfaces/service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service{

  private readonly _backendURL: any;

  constructor(private _http: HttpClient) {
    super();
    this._backendURL = {};

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  create(user: User): Observable<any> {
    return this._http.post<User>(this._backendURL.createUser, user, super._header())
      .pipe()
  }
}
