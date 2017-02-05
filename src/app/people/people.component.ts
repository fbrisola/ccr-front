import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PersonService]
})

export class PeopleComponent implements OnInit {
  title = 'Lista de Membros';
  people: Person[];
  selectedPerson: Person;


  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.getPeople();
  }


  onSelect(person: Person): void {
    this.selectedPerson = person;

  }

  getPeople() {
    // Get all people
    this.personService.getPeople()
      .subscribe(
      people => this.people = people, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

}