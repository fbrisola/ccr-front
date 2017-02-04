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
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.personService.getPeople().then(people => this.people = people);
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
    
  }

}