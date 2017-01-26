import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
  title = 'Membros';
  people: Person[];
  selectedPerson: Person;


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.people = PEOPLE;
  }

}

const PEOPLE: Person[] = [
  { id: 1, name: 'Fernando', lastname: 'Brisola Batista', birthdate: '03/12/1969', cel: '+55 11 99291-3413', email: 'fbrisola@gmail.com' },
  { id: 2, name: 'Celia Magda', lastname: 'Moreira Marques Brisola Batista', birthdate: '08/07/1971', cel: '+55 11 99433-0180', email: 'celiammarques@gmail.com' },
  { id: 3, name: 'Raphael', lastname: 'Moreira Marques Brisola Batista', birthdate: '07/04/2005', cel: '+55 11 55555-5555', email: 'raphaelmmbb@gmail.com' },
  { id: 4, name: 'Daniel', lastname: 'Moreira Marques Brisola Batista', birthdate: '09/04/2009', cel: '+55 11 55555-5555', email: 'daniel@daniel.com' },
  { id: 5, name: 'Fernanda', lastname: 'Moreira Marques Brisola Batista', birthdate: '05/06/2012', cel: '+55 11 55555-5555', email: 'fernanda@fernanda.com' }
]