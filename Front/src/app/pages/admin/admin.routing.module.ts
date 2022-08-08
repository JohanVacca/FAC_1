import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
// import { RecursosComponent } from './recursos/recursos.component';
// import { OpcionesComponent } from './opciones/opciones.component';
// import { OptionFormulationComponent } from './option-formulation/formulation-option.component';
import { ConvocatoryAdminComponent } from './convocatory/convocatory.component';
import { UsersComponent } from './users/users.component';
import { ProjectSetupComponent } from './project-setup/project-setup.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: '',
      redirectTo: 'convocatoria',
      pathMatch: 'full',
    },
    // {
    //   path: 'users',
    //   loadChildren: './users/users.module#UsersModule',
    // },
    // {
    //   path: 'roles-and-positions',
    //   loadChildren: './roles-and-positions/roles-and-positions.module#RolesAndPositionsModule',
    // },
    {
      path: 'project/:id',
      loadChildren: () => import('./project-setup/project-setup.module').then(m => m.ProjectSetupModule),
    },
    // {
    //   path: 'recursos',
    //   component: RecursosComponent,
    // },
    // {
    //   path: 'opciones-formulacion',
    //   component: OptionFormulationComponent,
    // },
    // {
    //   path: 'users',
    //   component: UsersComponent,
    //   pathMatch: 'full',
    // },
    {
      path: 'convocatoria',
      component: ConvocatoryAdminComponent,
      pathMatch: 'full',
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: '',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // declarations: [ConvocatoryAdminComponent],
})
export class AdminRoutingModule {
}

export const routedComponents = [
  AdminComponent
  // RecursosComponent,
  // OpcionesComponent,
  // OptionFormulationComponent,
];
