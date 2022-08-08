import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NecesidadesHomeComponent } from './necesidades-home/necesidades-home.component';

const routes: Routes = [
  {path: '', component: NecesidadesHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NecesidadesRoutingModule { }
