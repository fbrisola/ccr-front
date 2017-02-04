import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Person } from './person';
import { PEOPLE } from './mock-people';

@Injectable()
export class PersonService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private peopleUrl = 'api/people';  // URL to web api

  constructor(
    private http: Http
  ) { }

  getPeople(): Promise<Person[]> {
    return this.http.get(this.peopleUrl)
      .toPromise()
      .then(response => response.json().data as Person[])
      .catch(this.handleError);
  }

  getPerson(id: number): Promise<Person> {
    const url = `${this.peopleUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Person)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
