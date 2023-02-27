
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import {Movie} from "../moviesonline/movie";
import {Observable, of} from "rxjs";

import { HttpClient } from '@angular/common/http';
import {HttpService} from "../../../http.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  public movies: Movie[] = [];
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(

    private httpService: HttpService,
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true';
    this.httpClient.get(url).subscribe(console.log);

  }
  ngOnInit(): void {
    this.getMovies();
    //   this.getMoviesMany();
    /*

    */
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(
      // route to protected/dashboard, if login was successfull
      tap(() => this.router.navigate(['../../protected/dashboard']))
    ).subscribe();
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


  }


  getGenres(): Observable<any> {

    return this.httpService.getGenres();
  }


  searchMovie(name: string): Observable<any> | null {

    let test = this.httpService.searchMovie(name);
    //   test.pipe().
    return null;
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(s: string) {

  }

}


