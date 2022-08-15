import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropiedadintHomeComponent } from './propiedadint-home/propiedadint-home.component';

const routes: Routes = [
  {path: '', component: PropiedadintHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropiedadIntRoutingModule { }