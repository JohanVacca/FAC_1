import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularProyectoComponent } from './components/formular-proyecto/formular-proyecto.component';

import { FormulacionComponent } from './formulacion.component';
// import { FormFormularComponent } from './create-formulation/formular.component';
// import { FormInstructivosComponent } from './instructivos/instructivos.component';
// import { InformacionGeneralComponent } from './create-formulation/informacion-general/informacion-general.component';
// import { CientificoTecnologicoComponent } from './create-formulation/cientifico-tecnologico/cientifico-tecnologico.component';
// import { DetallesGeneralesComponent } from './create-formulation/detalles-generales/detalles-generales.component';

// import { PresupuestoComponent } from './create-formulation/presupuesto/presupuesto.component';
// import { ListFormulationComponent } from './list-formulation/list-formulation.component';
// import { ProductComponent } from './create-formulation/tabla-producto/table-product.component';
// import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';

const routes: Routes = [
  {
    path: '',
    component: FormulacionComponent,
    children: [{
      path: '',
      component: FormulacionComponent,
    },
    ],


  },
  {
    path: 'formular/:id',
    component: FormularProyectoComponent,
  },];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormulacionRoutingModule {

}



export const routedComponents = [
  FormulacionComponent,
  // FormFormularComponent,
  // FormInstructivosComponent,
  // InformacionGeneralComponent,
  // CientificoTecnologicoComponent,
  // DetallesGeneralesComponent,
  // ProductComponent,
  // PresupuestoComponent,
  // HtmltopdfComponent,
  // ListFormulationComponent

];
