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

  public moviesReturn: Movie[] = [];

  public moviesReturnCount: number = 0;

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {

    //   this.getMovies();
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

  getMoviesx(): void {
    console.log(this.movies);

    this.httpService.searchMovie("BAD")
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



  searchMovie(name: string, dateReleased: string) {

    console.log('----------PRE TEST-------------');
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true';
    this.httpClient.get(url).subscribe(console.log);
    let simpleTest = this.httpClient.get(url); //.subscribe(console.log);
    console.log(this.movies);

    this.httpService.searchMovie(name)
      .pipe(
        map(data => Object.keys(data).map(key => data[key]))
      )
      .subscribe((movies: Movie[]) => this.movies = movies);

    console.log(this.movies);

    console.log('----------PRE-------------');

    //   test.pipe().
    let t99:Movie[] = [];

    for( let il1 =0; il1 <20; il1++) {
      let nowMov:Movie = new Movie(1,'','','',0);
      let  testxxxs = 'tt';
      nowMov.title = testxxxs;
      nowMov.release_date = testxxxs;
      t99.push(nowMov);
    }

    let test99 = Array.from(this.movies);
    let t88:Movie =test99[1];
    console.log(t88);
    this.moviesReturn.push(t88)
    let nums:number[] = [1,2,3,3];
    console.log(nums[0]);
    console.log(nums[1]);
    console.log(nums[2]);
    console.log(nums[3]);
    let test;
    let count =0;
    let movieData = this.movies.entries();
    let nowMovie;
    let Moviex;
    this.movies.forEach((element) => {
      console.log('----------RBS1-------------' + element.title + '  ');
    });
    for (let test1 of this.movies) {


      console.log(test1);
      console.log('----------DUMP-------------' + count + '  ');
      if (count == 1) {

        this.moviesReturnCount = 0;

     //   this.moviesReturn.push(test1)
        // nowMovie = Movie;
        // nowMovie.
        console.log('----------DUMP2-------------' + count + '  ' + this.moviesReturn.length);
      }
      count++;
    }

    console.log('----------POST-------------');
    //  searchMovie(name: string): Movie[] {   return this.movies;

  }
}
