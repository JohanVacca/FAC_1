import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TablaHonoraiosService } from 'src/app/@core/services/tabla-honorarios/tabla-honoraios.service';

@Component({
  selector: 'app-actualizar-honorarios',
  templateUrl: './actualizar-honorarios.component.html',
  styleUrls: ['./actualizar-honorarios.component.scss']
})
export class ActualizarHonorariosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ActualizarHonorariosData,
    public form: FormBuilder,
    private tablaHonoraiosService: TablaHonoraiosService) { }

  updateHonorario: FormGroup;
  ngOnInit(): void {
    this.buildform();
  }

  buildform() {
    this.updateHonorario = this.form.group({
      honorarioId: new FormControl(this.data.id),
      formacion: new FormControl(this.data.formacion),
      experiencia: new FormControl(this.data.experiencia),
      topeMaximo: new FormControl(this.data.topeMaximo),
    })
  }

  onSubmit() {
    let datos = this.updateHonorario.value;
    let id = this.data._id;
    this.tablaHonoraiosService.update(id, datos).subscribe(r => {
      
    })
  }
}
export interface ActualizarHonorariosData {
  _id: string;
  id: number;
  formacion: string;
  experiencia: string;
  topeMaximo: number;
}
