import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

//The most important @NgModule decorator annotates the top-level AppModule class
//This allows Angular to know how the pieces of your application fit together and
// what other files and libraries the app requires (metadata).

@NgModule({
  //Every component must be declared in exactly one NgModule
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  //contains a list of external modules that the app needs.
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
