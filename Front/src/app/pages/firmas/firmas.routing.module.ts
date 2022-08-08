import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirmasHomeComponent} from './firmas-home/firmas-home.component';
import {AgregarFirmaComponent} from './agregar-firma/agregar-firma.component';

const routes: Routes = [
    {
        path: '',
        component: FirmasHomeComponent,
    },
    {
        path: 'agregar-firma',
        component: AgregarFirmaComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FirmasRoutingModule { }
