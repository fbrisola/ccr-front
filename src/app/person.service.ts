import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// Obbservables
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Person } from './person';

@Injectable()
export class PersonService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private peopleUrl = 'http://localhost/api/v1/people' // URL to web api
  
  constructor(private http: Http) { }

  // Fetch all existing people
  getPeople(): Observable<Person[]> {

    // ...using get request
    return this.http.get(this.peopleUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  // Fetch person(id)
  getPerson(id): Observable<Person> {
    // ...using get request
    return this.http.get(`${this.peopleUrl}/${id}`)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

// Update a person
    updatePerson (body: Person): Observable<Person> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.put(`${this.peopleUrl}/${body['id']}`, body, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

// Delete a person
deletePerson(id): Observable<Person> {
  return this.http.delete(`${this.peopleUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if an
}


}
