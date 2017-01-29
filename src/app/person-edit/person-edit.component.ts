import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PeopleComponent } from '../people/people.component';
import { Person } from '../person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  title = 'Editar membro';

  @Input()
  person: Person;

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
