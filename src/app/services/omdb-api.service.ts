import { Injectable } from '@angular/core';

// Manually added imports

import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IOMDBResponse } from '../omdbresponse';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private _siteURL="https://www.omdbapi.com/"
  private _key="?apikey=8e949ef&t="
  constructor(private _http:HttpClient) { }

  // Add getMoviedata method
  getMovieData(movieName:string):Observable<IOMDBResponse> // this method returs an observable
  {
    return this._http.get<IOMDBResponse>(this._siteURL+this._key + movieName)
    .pipe
    (
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError) // handle error method below vv
    )
  }

  // Handleerror method
  private handleError(err:HttpErrorResponse)
  {
    console.log('OmdbApiService:' + err.message);
    // previous version return throwError("error : " + err.message);
    return throwError(() => new Error("OmdbApiService:" + err.message))
  }
}
