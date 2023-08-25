import { Component } from '@angular/core';
import { IOMDBResponse } from '../../omdbresponse'; // going up two levels with "../../"
import { OmdbApiService } from '../../services/omdb-api.service'; 
import { IOMDBResponse2 } from '../../omdbresponse2';
@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent { // constructor
  // Within SearchtitleComponent class declare movieData of type IOMDBResponse, and errorMessage of type any
  title = 'Movie Finder';
  movieData:IOMDBResponse2 | undefined; // explaining that we'll get a response or we won't (undefined)
  currentPage = '1';
  maxPages = '0';
  errorMessage:any;

  // More properties (slide 9, week8)


  // In constructor, create private property _obdbService of type OmdbApiService
  constructor(private _omdbService:OmdbApiService) { }

  // Copied getMovieDetails() from app.component.ts into searchtitle.component.ts
  // getMovieDetails(movieName:string): boolean {
  //   this._omdbService.getMovieData(movieName).subscribe // subscribing to the returned observable: this will start the observable
  //   ( movieData => {
  //     this.movieData=movieData;
  //     console.log("Director name : " + this.movieData.Director);
  //   }
  //   )
  //   return false;
  // }

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMoviesData(movieName,this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  getPreviousPage(movieName:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }

  getNextPage(movieName:string): boolean {
    this.currentPage++;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }
}
