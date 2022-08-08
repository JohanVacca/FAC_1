import { NgModule } from '@angular/core';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

// import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule, routedComponents } from './admin.routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { RolesService } from '../../@core/data/rol.service';
import { RecursosService } from '../../@core/data/recursos.service';
import { OpcionesService } from '../../@core/data/opciones.service';
// import { TreeModule } from 'angular-tree-component';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { ToasterModule } from 'angular2-toaster';
// import { CreateProductTableComponent } from './option-formulation/create-product-table/create-product-table.component';
// import { CreateRubroTableComponent } from './option-formulation/create-rubro-table/create-rubro-table.component';
// import { CreateLineComponent } from './option-formulation/create-line/create-line.component';
// import { ModalLineComponent } from '../modal-components/modal-linea/modal-line.component';
// import { ModalOneTextfieldComponent } from '../modal-components/modal-one-textfield/modal-one-textfield.component';
// import { ModalCreateUserComponent } from '../modal-components/modal-create-user/modal-create-user.component';
// import { DataTablesModule } from 'angular-datatables';
import { ConvocatoryAdminComponent } from './convocatory/convocatory.component';
// import { ModalUpdateComponent } from '../modal-components/modal-name-description/modal-update.component';
import {MatTableModule} from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ConfirmDialogComponent } from './Dialog/confirm-dialog/confirm-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditDialogComponent } from './users/edit-dialog/edit-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EditDialogConComponent } from './convocatory/edit-dialog-con/edit-dialog-con.component';
import { ConvoCreateComponent } from './convocatory/convo-create/convo-create.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ConvoNewComponent } from './convocatory/convo-create/components/convo-new/convo-new.component';
import { CloneConvoComponent } from './convocatory/convo-create/components/clone-convo/clone-convo.component'
import {MatTooltipModule} from '@angular/material/tooltip';
import { SucessDialogComponent } from './Dialog/sucess-dialog/sucess-dialog.component';
import { HonorariosColcienciasComponent } from './honorarios-colciencias/honorarios-colciencias.component';
import { ActualizarHonorariosComponent } from './honorarios-colciencias/components/actualizar-honorarios/actualizar-honorarios.component';



@NgModule({
  imports: [
    // ThemeModule,
    AdminRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,
    //ConvoNewComponent
    
    MatAutocompleteModule,
    MatTooltipModule
    // Ng2SmartTableModule,
    // TreeModule,
    // NgxPaginationModule,
    // ToasterModule.forRoot(),
    // DataTablesModule,
  ],
  declarations: [
    ...routedComponents,

    // ModalLineComponent,
    // ModalCreateUserComponent,
    // ModalOneTextfieldComponent,
    // CreateProductTableComponent,
    // CreateRubroTableComponent,
    // CreateLineComponent,
    ConvocatoryAdminComponent,
    UsersComponent,
    ConfirmDialogComponent,
    EditDialogComponent,
    EditDialogConComponent,
    ConvoCreateComponent,
    ConvoNewComponent,
    CloneConvoComponent,
    SucessDialogComponent,
    HonorariosColcienciasComponent,
    ActualizarHonorariosComponent,
    // ModalUpdateComponent,
  ],
  providers: [
    SmartTableService,
    RolesService,
    RecursosService,
    OpcionesService,
    ConvoNewComponent,
    CloneConvoComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
    // ModalLineComponent,
    // ModalCreateUserComponent,
    // ModalOneTextfieldComponent,
    // ModalUpdateComponent,
  ],
})
export class AdminModule { }
