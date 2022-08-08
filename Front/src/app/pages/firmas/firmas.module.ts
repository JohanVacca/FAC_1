import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirmasHomeComponent} from './firmas-home/firmas-home.component';
import {AgregarFirmaComponent} from './agregar-firma/agregar-firma.component';
import {FirmasRoutingModule} from './firmas.routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { ListaProyectosModalComponent } from './lista-proyectos-modal/lista-proyectos-modal.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatCardModule,
        FirmasRoutingModule,
        FormsModule,
        SharedModule,
        MatTableModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    declarations: [FirmasHomeComponent, AgregarFirmaComponent, ListaProyectosModalComponent],
})
export class FirmasModule {
}
