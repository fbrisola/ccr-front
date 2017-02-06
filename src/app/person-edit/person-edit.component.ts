import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/operator/finally';
import 'rxjs/add/operator/finally';

import { PeopleComponent } from '../people/people.component';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
  providers: [PersonService]
})
export class PersonEditComponent implements OnInit {
  title = 'Editar membro';

  @Input()
  person: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    this.route.params
      .switchMap((params: Params) => this.personService.getPerson(+params['id']))
      .subscribe(person => this.person = person);
  }

  save(): void {
    this.personService.updatePerson(this.person)
    .subscribe(person => this.person = person);
    this.router.navigateByUrl('people');
  }

  goBack(): void {
    this.location.back();
  }

}
