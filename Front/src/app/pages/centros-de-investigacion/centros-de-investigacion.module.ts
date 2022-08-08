import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CentrosDeInvestigacionRoutingModule} from './centros-de-investigacion-routing.module';
import {CentrosDeInvestigacionHomeComponent} from './centros-de-investigacion-home/centros-de-investigacion-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ModalCentrosComponent } from './modal-centros/modal-centros.component';


@NgModule({
    declarations: [CentrosDeInvestigacionHomeComponent, ModalCentrosComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        CentrosDeInvestigacionRoutingModule,
        FormsModule,
        SharedModule,
        MatTableModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatCardModule,
        ReactiveFormsModule,
        MatSelectModule
    ]
})
export class CentrosDeInvestigacionModule {
}
