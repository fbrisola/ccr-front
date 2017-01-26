import { Component, OnInit } from '@angular/core';

import { PeopleComponent } from '../people/people.component';
import { Person } from '../person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  title = 'Editar membro';

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
