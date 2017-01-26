import { Component, OnInit } from '@angular/core';

import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  title = 'Novo membro';
  constructor() { }

  ngOnInit() {
  }

}
