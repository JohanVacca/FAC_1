import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnidadesHomeComponent} from './unidades-home/unidades-home.component';

const routes: Routes = [
  {
    path: '',
    component: UnidadesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesRoutingModule { }
 