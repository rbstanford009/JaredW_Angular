import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie login';
  login = true;

  isLoggedIn() {

    return this.login;
  }

  logout() {
    this.login = false;

  }
}
