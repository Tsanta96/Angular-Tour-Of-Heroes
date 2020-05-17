import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//@Component is a decorator function that specifies the Angular metadata for the component
@Component({
  //The CSS element selector 'app-heroes', matches the name of the HTML element that identifies
  // this component within a parent components template
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //Adding a hero property of type Hero to the HeroesComponent for a hero named "Windstorm."
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { 
    
  }

  //Lifecycle method that is called shortly after creating the component.
  // Good place to put initialization logic.
  ngOnInit() {
  }

}
