import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesRoutingModule } from './unidades-routing.module';
import { UnidadesHomeComponent } from './unidades-home/unidades-home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {FormBuilder, FormGroup, FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [UnidadesHomeComponent],
    imports: [
        CommonModule,
        UnidadesRoutingModule,//import
        MatFormFieldModule,
        MatTableModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        FormsModule,
        MatTooltipModule,
        MatIconModule,
        MatSelectModule,
        MatAutocompleteModule,
    ]
})
export class UnidadesModule { }