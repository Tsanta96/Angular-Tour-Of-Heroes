import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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
  //Adding a hero property of type Hero to the HeroesComponent for a hero named "Windstorm."
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //exposing HEROES array for binding
  heroes = HEROES;

  constructor() { 
    
  }

  //Lifecycle method that is called shortly after creating the component.
  // Good place to put initialization logic.
  ngOnInit() {
  }

}
