import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressesComponent } from './addresses/addresses.component';
import { PeopleComponent } from './people/people.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddressesComponent,
    PeopleComponent,
    PersonEditComponent,
    PersonNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
