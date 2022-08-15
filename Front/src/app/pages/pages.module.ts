import {NgModule} from '@angular/core';
import {PagesRoutingModule, routedComponents} from './pages-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {InstructionalComponent} from './instructional/instructional.component';
import {MatMenuModule} from '@angular/material/menu';
import {NavPerfilComponent} from './nav-perfil/nav-perfil.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CreateIntructionalComponent} from './instructional/create-intructional/create-intructional.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InstructivosService} from '../@core/services/instructivos/instructivos.service';
import {VerIntructiveComponent} from './instructional/ver-intructive/ver-intructive.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {EvaluacionComponent} from './evaluacion/evaluacion.component';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {VistaProyectosComponent} from './evaluacion/components/vista-proyectos/vista-proyectos.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {VerFormulariosComponent} from './evaluacion/components/vista-proyectos/ver-formularios/ver-formularios.component';
import {ListaSeguimientoComponent} from './Lista_Seguimiento/lista-seguimiento/lista-seguimiento.component';
import {ProyectosComponent} from './Lista_Seguimiento/components/proyectos/proyectos.component';
import {SeguimientoComponent} from './Lista_Seguimiento/components/seguimiento/seguimiento.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CronogramaNewComponent} from './Lista_Seguimiento/components/cronograma-new/cronograma-new.component';
import {SeguimientoRubroComponent} from './Lista_Seguimiento/components/seguimiento-rubro/seguimiento-rubro.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ReportesComponent} from './Lista_Seguimiento/components/reportes/reportes.component';
import {ShowCalendarComponent} from './Lista_Seguimiento/components/show-calendar/show-calendar.component';
import {AgregarPresupuestoComponent} from './Lista_Seguimiento/components/agregar-presupuesto/agregar-presupuesto.component';
import {SharedModule} from '../shared/shared.module';
import { ModalInvestigadorComponent } from './modal-investigador/modal-investigador.component';
import { ModalCentrosComponent } from './modal-centros/modal-centros.component';
import { ModalViewDocumentsRubroComponent } from './Lista_Seguimiento/components/modal-view-documents-rubro/modal-view-documents-rubro.component';
import { EstadisticasComponent } from './Lista_Seguimiento/components/estadisticas/estadisticas.component';
import {ChartsModule} from 'ng2-charts';
import { NecesidadesModule } from './necesidades/necesidades.module';
import { PropiedadintModule } from './propiedadint/propiedadint.module';

const PAGES_COMPONENTS = [
    PagesComponent,
];

@NgModule({
    imports: [
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        PagesRoutingModule,
        MatSidenavModule,
        MatIconModule,
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        RouterModule,
        MatMenuModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MatTabsModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        SharedModule,
        ChartsModule
    ],
    providers: [
        InstructivosService
    ],
    declarations: [
        ...routedComponents,
        ...PAGES_COMPONENTS,
        InstructionalComponent,
        NavPerfilComponent,
        CreateIntructionalComponent,
        VerIntructiveComponent,
        EvaluacionComponent,
        VistaProyectosComponent,
        VerFormulariosComponent,
        ListaSeguimientoComponent,
        ProyectosComponent,
        SeguimientoComponent,
        CronogramaNewComponent,//Declarando tabla de cronograma
        SeguimientoRubroComponent,
        ReportesComponent,
        ShowCalendarComponent,
        AgregarPresupuestoComponent,
        ModalInvestigadorComponent,
        ModalCentrosComponent,
        ModalViewDocumentsRubroComponent,
        EstadisticasComponent,

    ], exports:[CronogramaNewComponent] //Exporta cronograma
})
export class PagesModule {
}
