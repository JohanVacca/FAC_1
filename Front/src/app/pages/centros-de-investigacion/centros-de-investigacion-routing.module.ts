import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CentrosDeInvestigacionHomeComponent} from './centros-de-investigacion-home/centros-de-investigacion-home.component';

const routes: Routes = [
  {
    path: '',
    component: CentrosDeInvestigacionHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentrosDeInvestigacionRoutingModule { }
