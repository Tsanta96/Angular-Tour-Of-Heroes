import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';


@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent implements OnInit {
  //@Input and @Output allow Angular to share data between the parent context and child directives
  // or components. An @Input() property is writable while an @Output() property is observable

  //In our case, the hero property must be an input property, annotated with the @Input()
  // decorator, because the external HeroesComponent will bind to it.

  //This component simply receives a hero object through its hero property and
  // displays it.
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //The route.snapshot is a static image of the route information shortly after the component was created.
    //The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.

    //Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
