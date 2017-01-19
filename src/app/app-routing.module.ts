import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { AddressesComponent } from './addresses/addresses.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'addresses', component: AddressesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
