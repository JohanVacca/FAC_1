import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './@core/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./invited/invited.module').then(m => m.InvitedModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/admin/project-setup/project-setup.module').then(m => m.ProjectSetupModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
