import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {
  title = 'Novo membro';

  constructor() { }

  ngOnInit() {
  }

}
