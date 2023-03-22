import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import {Observable} from "rxjs";
import {HttpService} from "../../http.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Movie} from "../../moviesonline/movie";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private moviesUrl = 'api/movies';  // URL to web api      // https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true

  public movies: Movie[] = [];
  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
    //   this.getMoviesMany();
    /*

    */
  }
  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.router.navigate(['../../']);
  }

  getGenres(): Observable<any> {

    return this.httpService.getGenres();
  }

  getMovies(): void {
    console.log(this.movies);

    this.httpService.searchMovie("Beast")
      .pipe(
        map(data => Object.keys(data).map(key => data[key]))
      )
      .subscribe((movies: Movie[]) => this.movies = movies);

    console.log(this.movies);

    console.log('----------PRE-------------');
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true';
    this.httpClient.get(url).subscribe(console.log);
    let simpleTest = this.httpClient.get(url); //.subscribe(console.log);

    console.log(simpleTest);


  }



  searchMovie(name: string): Movie[] {


    console.log(this.movies);

    this.httpService.searchMovie(name)
      .pipe(
        map(data => Object.keys(data).map(key => data[key]))
      )
      .subscribe((movies: Movie[]) => this.movies = movies);

    console.log(this.movies);

    console.log('----------PRE-------------');
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true';
    this.httpClient.get(url).subscribe(console.log);
    let simpleTest = this.httpClient.get(url); //.subscribe(console.log);

    console.log(simpleTest);
    //   test.pipe().

    let test;
    let count =0;
    let movieData = this.movies.entries();
    for(let test1 of movieData) {
      console.log(test1);
      console.log('----------DUMP-------------'+count);
      if(count == 1) {
        test = test1;
      }
      count++;
    }

    console.log('----------POST-------------');
    return this.movies;
  }
}
