import { Injectable } from '@angular/core';


import { Person } from './person';
import { PEOPLE } from './mock-people';

@Injectable()
export class PersonService {

  constructor() { }

  getPeople(): Promise<Person[]> {
    return Promise.resolve(PEOPLE);
  }

  getPerson(id: number): Promise<Person> {
    return this.getPeople()
      .then(people => people.find(person => person.id === id));
  }

}
