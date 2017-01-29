import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})

export class AppComponent implements OnInit {
  title = 'CCR Admin v0.0';
  people: Person[];
  peopleCount: number;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.personService.getPeople()
    .then(people => this.peopleCount = people.length)
  }
}
