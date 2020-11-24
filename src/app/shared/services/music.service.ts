import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Music} from '../interfaces/music';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private readonly _backendURL: any;

  constructor(private _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  getAll(): Observable<Music[]> {
    return this._http.get<Music[]>(this._backendURL.allMusics)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  getByTitle(title: string): Observable<Music[]> {
    return this._http.get<Music[]>(this._backendURL.musicByTitle.replace(':title', title))
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  getByAlbum(album: string): Observable<Music[]> {
    return this._http.get<Music[]>(this._backendURL.musicByAlbum.replace(':album', album))
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

}
