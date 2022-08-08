import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectSetupComponent } from './project-setup.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectSetupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectSetupRoutingModule { }
