import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'CCR Admin v0.0';
  peopleCount: number;
  people: Person[];

  constructor ( private personService: PersonService ) { }

  ngOnInit(): void {
    this.countMembers();
  }

countMembers(): void {
  this.personService.getPeople()
  .subscribe (
    people => this.people = people,
    err => {
      console.log(err)
    },
    () => this.peopleCount = this.people.length
  );
}

}
