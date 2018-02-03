import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as API from '../../config/api_key';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath: string = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  public getLatestMovies() {
    return this.http.get(`${this.baseApiPath}/movie/popular?api_key=${API.KEY}`);
  }

  public getMovieDetails(movieId) {
    return this.http.get(`${this.baseApiPath}/movie/${movieId}?api_key=${API.KEY}`);
  }
}
