import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulacionRoutingModule, routedComponents } from './formulacion-routing.module';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { AnexoComponent } from './components/anexo/anexo.component';
import { CientificoTecnologicoComponent } from './components/cientifico-tecnologico/cientifico-tecnologico.component';
import { CreateProyectComponent } from './components/create-proyect/create-proyect.component';
import { DetallesGeneralesComponent } from './components/detalles-generales/detalles-generales.component';
import { InformacionGeneralComponent } from './components/informacion-general/informacion-general.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { FormularProyectoComponent } from './components/formular-proyecto/formular-proyecto.component';
import { AdminModule } from '../admin/admin.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { GruposComponent } from './components/cientifico-tecnologico/components/grupos/grupos.component';
import { EquipoInvestigacionComponent } from './components/cientifico-tecnologico/components/equipo-investigacion/equipo-investigacion.component';
import { ProductosEsperadosComponent } from './components/presupuesto/components/productos-esperados/productos-esperados.component';
import { ComponentePresupuestalComponent } from './components/presupuesto/components/componente-presupuestal/componente-presupuestal.component';
import { ObjetivosComponent } from './components/detalles-generales/components/objetivos/objetivos.component';
import { InformacionComponent } from './components/detalles-generales/components/informacion/informacion.component';
import { ResumenComponent } from './components/detalles-generales/components/resumen/resumen.component';
import { MarcoConceptualComponent } from './components/detalles-generales/components/marco-conceptual/marco-conceptual.component';
import { EstadoArteComponent } from './components/detalles-generales/components/estado-arte/estado-arte.component';
import { ResultadosEsperadosComponent } from './components/detalles-generales/components/resultados-esperados/resultados-esperados.component';
import { ResultadosPreviosComponent } from './components/detalles-generales/components/resultados-previos/resultados-previos.component';
import { BibliografiaComponent } from './components/detalles-generales/components/bibliografia/bibliografia.component';
import { MetodologiaComponent } from './components/detalles-generales/components/metodologia/metodologia.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DialogAgregarComponent } from './components/presupuesto/components/componente-presupuestal/dialog-agregar/dialog-agregar.component';
import { AddDetalleRubroComponent } from './components/presupuesto/components/componente-presupuestal/add-detalle-rubro/add-detalle-rubro.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TablaHonorariosComponent } from './components/presupuesto/components/componente-presupuestal/tabla-honorarios/tabla-honorarios.component';
import { RegistrarGrupoComponent } from './components/cientifico-tecnologico/components/grupos/registrar-grupo/registrar-grupo.component';
import { RegistrarPersonaComponent } from './components/cientifico-tecnologico/components/equipo-investigacion/registrar-persona/registrar-persona.component';
import { AgregarProductoComponent } from './components/presupuesto/components/productos-esperados/agregar-producto/agregar-producto.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CronogramaComponent } from './components/presupuesto/components/cronograma/cronograma.component';
import { VistaFormulacionComponent } from './components/vista-formulacion/vista-formulacion.component';
import { DetalleRubroComponent } from './components/presupuesto/components/componente-presupuestal/detalle-rubro/detalle-rubro.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ComplementosComponent } from './components/detalles-generales/components/complementos/complementos.component';
import { AddComplementsComponent } from './components/detalles-generales/components/complementos/add-complements/add-complements.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AgregarActividadComponent } from './components/presupuesto/components/cronograma/agregar-actividad/agregar-actividad.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {SharedModule} from '../../shared/shared.module';
import { PlanteamientoDeProblemaComponent } from './components/detalles-generales/components/planteamiento-de-problema/planteamiento-de-problema.component';
import { EvaluateProjectComponent } from './components/evaluate-project/evaluate-project.component';
import { RiesgosComponent } from './components/detalles-generales/components/riesgos/riesgos.component';
import { AgregarInvestigadorComponent } from './components/cientifico-tecnologico/components/equipo-investigacion/agregar-investigador/agregar-investigador.component';


@NgModule({
    imports: [
        FormulacionRoutingModule,
        MatDialogModule,
        FormsModule,
        CommonModule,
        MatSlideToggleModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        ReactiveFormsModule,
        AdminModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatSelectModule,
        MatTabsModule,
        MatToolbarModule,
        CKEditorModule,
        ScrollingModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        SharedModule,
    ],
  declarations: [
    ...routedComponents,
    AnexoComponent,
    CientificoTecnologicoComponent,
    CreateProyectComponent,
    DetallesGeneralesComponent,
    InformacionGeneralComponent,
    PresupuestoComponent,
    FormularProyectoComponent,
    GruposComponent,
    EquipoInvestigacionComponent,
    ProductosEsperadosComponent,
    ComponentePresupuestalComponent,
    ObjetivosComponent,
    InformacionComponent,
    ResumenComponent,
    MarcoConceptualComponent,
    EstadoArteComponent,
    ResultadosEsperadosComponent,
    ResultadosPreviosComponent,
    BibliografiaComponent,
    MetodologiaComponent,
    DialogAgregarComponent,
    AddDetalleRubroComponent,
    TablaHonorariosComponent,
    RegistrarGrupoComponent,
    RegistrarPersonaComponent,
    AgregarProductoComponent,
    CronogramaComponent,
    VistaFormulacionComponent,
    DetalleRubroComponent,
    ComplementosComponent,
    AddComplementsComponent,
    AgregarActividadComponent,
    PlanteamientoDeProblemaComponent,
    EvaluateProjectComponent,
    RiesgosComponent,
    AgregarInvestigadorComponent
  ],
  entryComponents: [],
  providers: []
})
export class FormulacionModule { }
