import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { AddressesComponent } from './addresses/addresses.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'addresses', component: AddressesComponent },
    { path: 'people/new', component: PersonNewComponent },
    { path: 'edit/:id', component: PersonEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
