import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InstructionalComponent} from './instructional/instructional.component';
import {HonorariosColcienciasComponent} from './admin/honorarios-colciencias/honorarios-colciencias.component';
import {EvaluacionComponent} from './evaluacion/evaluacion.component';
import {UsersComponent} from './admin/users/users.component';
import {AuthGuardService} from '../@core/services/guards/auth-guard.service';
import {ListaSeguimientoComponent} from './Lista_Seguimiento/lista-seguimiento/lista-seguimiento.component';
import {SeguimientoComponent} from './Lista_Seguimiento/components/seguimiento/seguimiento.component';
import {ReportesComponent} from './Lista_Seguimiento/components/reportes/reportes.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'admin',
                loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'reporte/:id',
                component: ReportesComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'formulacion',
                loadChildren: () => import('./formulacion/formulacion.module').then(m => m.FormulacionModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'instructional',
                component: InstructionalComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'adminusers',
                component: UsersComponent,
                pathMatch: 'full',
                canActivate: [AuthGuardService]
            },
            {
                path: 'seguimiento',
                component: ListaSeguimientoComponent,
                pathMatch: 'full',
                canActivate: [AuthGuardService]
            },
            {
                path: 'honorarios',
                component: HonorariosColcienciasComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'evaluacion',
                component: EvaluacionComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'seguimientoproject/:id',
                component: SeguimientoComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'firmas',
                loadChildren: () => import('./firmas/firmas.module').then(m => m.FirmasModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'centros-de-investigacion',
                loadChildren: () => import('./centros-de-investigacion/centros-de-investigacion.module').then(m => m.CentrosDeInvestigacionModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'unidades',
                loadChildren: () => import('./unidades/unidades.module').then(m => m.UnidadesModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'necesidades',//Ejemplo ruta
                loadChildren: () => import('./necesidades/necesidades.module').then(m => m.NecesidadesModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'propiedad-intelectual',//propiedad-intelectual route
                loadChildren: () => import('./propiedadint/propiedadint.module').then(m => m.PropiedadintModule),
                canActivate: [AuthGuardService]
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}

export const routedComponents = [];

