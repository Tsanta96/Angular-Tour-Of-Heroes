import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

//@Component is a decorator function that specifies the Angular metadata for the component
@Component({
  //The CSS element selector 'app-heroes', matches the name of the HTML element that identifies
  // this component within a parent components template
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

  //Styles and stylesheets identified in @Component metadata are scoped to that 
  // specific component. The heroes.component.css styles apply only to the HeroesComponent 
  // and don't affect the outer HTML or the HTML in any other component.
  // styles: [], // Can define styles inline with this
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //exposing HEROES array for binding
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  //Lifecycle method that is called shortly after creating the component.
  // Good place to put initialization logic.
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      //The subscribe() method passes the emitted array to the callback, which sets the component's
      // heroes property
      .subscribe(heroes => this.heroes = heroes);
  }
}

// Reserve the Constructor for simple initialization such as wiring constructor parameters to properties.
//  The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests 
//  to a remote server as a real data serviice would.
//Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate 
//  time after constructing a HeroesComponent Instance.
