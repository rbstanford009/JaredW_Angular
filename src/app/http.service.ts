import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Movie } from './model/movie';

import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getTrending(): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${environment.api_key}`;

    return this.httpClient.get<any>(url);
  }

  searchMovie(movieName: any): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=${movieName}&page=1&include_adult=true&append_to_response=release_dates`;
    let retVal = this.httpClient.get<any>(url);
    console.log(retVal);
    return retVal;
  }
  /*
  MOVIE
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37

TV SHOW
Action & Adventure  10759
Animation           16
Comedy              35
Crime               80
Documentary         99
Drama               18
Family              10751
Kids                10762
Mystery             9648
News                10763
Reality             10764
Sci-Fi & Fantasy    10765
Soap                10766
Talk                10767
War & Politics      10768
Western             37

   */

 //  searchMovie(movieName: any): Observable<any> {
 // //   return of('foo');
 //    const url = 'https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true';
 //    let obj1 =this.httpClient.request( 'GET',url);
 //
 //    return obj1;
 //  //  const url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.api_key}&language=en-US&query=${movieName}&page=1&include_adult=true`;
 //  // const url = 'https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true';
 //  //   let retVal = this.httpClient.get<any>(url);
 //  //   console.log(retVal);
 //  //   return retVal;
 //  }

  getFavourites(username: any): Observable<Array<Movie>> {
    const url = `http://localhost:3000/${username}`;

    return this.httpClient.get<Array<Movie>>(url);
  }

  addMovieToFavourites(username: any, movie: any): Observable<Movie> {
    const url = `http://localhost:3000/${username}`;

    return this.httpClient.post<Movie>(url, movie);
  }

  removeMovieFromFavourites(username: any, id: any): Observable<any> {
    const url = `http://localhost:3000/${username}/${id}`;

    return this.httpClient.delete(url);
  }

  getGenres(): Observable<any> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.api_key}&language=en-US`;

    return this.httpClient.get(url);
  }


}
