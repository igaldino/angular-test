import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarbonHomeComponent } from './carbon-home/carbon-home.component';
import { CarbonIbmHomeComponent } from './carbon-ibm-home/carbon-ibm-home.component';

const routes: Routes = [
  { path: 'carbon-home', component: CarbonHomeComponent },
  { path: 'carbon-ibm-home', component: CarbonIbmHomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'carbon-home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
