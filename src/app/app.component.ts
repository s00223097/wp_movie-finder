import { Component } from '@angular/core';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Finder';
  movieData:IOMDBResponse | undefined; // explaining that we'll get a response or we won't (undefined)
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService) { }

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe // subscribing to the returned observable: this will start the observable
    ( (movieData: IOMDBResponse | undefined) => {
      this.movieData=movieData;
      console.log("Director name : " + this.movieData.Director);
    }
    )
    return false;
  }
}
