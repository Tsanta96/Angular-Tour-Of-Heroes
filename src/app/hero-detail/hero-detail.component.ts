import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input and @Output allow Angular to share data between the parent context and child directives
  // or components. An @Input() property is writable while an @Output() property is observable

  //In our case, the hero property must be an input property, annotated with the @Input()
  // decorator, because the external HeroesComponent will bind to it. 

  //This component simply receives a hero object through its hero property and
  // displays it. 
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
