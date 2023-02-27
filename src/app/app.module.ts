import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { JwtModule } from '@auth0/angular-jwt';
//

import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from "@angular/material/toolbar";
import {DashboardComponent} from "./public/components/dashboard/dashboard.component";
//

// specify the key where the token is stored in the local storage
export const LOCALSTORAGE_TOKEN_KEY = 'stanford';

// specify tokenGetter for the angular jwt package
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Import our Routes for this module
    AppRoutingModule,
    // Angular Material Imports
    MatSnackBarModule,
    // Jwt Helper Module Import
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000', 'localhost:8080']
      }
    }),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
