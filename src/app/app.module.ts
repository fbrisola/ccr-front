import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
