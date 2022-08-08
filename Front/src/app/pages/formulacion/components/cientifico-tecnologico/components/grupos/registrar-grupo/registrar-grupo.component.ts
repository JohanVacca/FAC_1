import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupCategoryService } from '../../../../../../../shared/services/group-category/group-category.service'
import { CommonSimpleModel } from '../../../../../../../shared/models/common-simple.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {SaveStateService} from '../../../../../../../shared/services/saveStateService/save-state.service';
import {Grupo, StateInterface} from '../../../../../../../shared/services/saveStateService/StateInterface';

@Component({
  selector: 'app-registrar-grupo',
  templateUrl: './registrar-grupo.component.html',
  styleUrls: ['../../../cientifico-tecnologico.component.scss']
})
export class RegistrarGrupoComponent implements OnInit {

  groupCats: CommonSimpleModel[] = [];
  Convocatoria: string;
  registroGrupo: FormGroup;
  private state: StateInterface;
  public showErrorGroupCode = false;
  public errorMessageGroupCode = 'Ya existe un grupo con el código ingresado por favor cambielo';

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: RegistrarGrupoData,
      private groupCategoryService: GroupCategoryService,
      public form: FormBuilder,
      public dialogRef: MatDialogRef<RegistrarGrupoComponent>,
      private saveStateService: SaveStateService
  ) { }

  ngOnInit(): void {
    this.builder();
    this.getAll();
    this.state = this.saveStateService.getState();
    const listaDeGrupos = this.state?.segundoPaso?.listaDeGrupos ? this.state.segundoPaso.listaDeGrupos : [];
    const equipoDeInvestigacion = this.state?.segundoPaso?.equipoDeInvestigacion ? this.state.segundoPaso.equipoDeInvestigacion : [];
    this.state = {
      ...this.saveStateService.getState(),
      segundoPaso: {
        listaDeGrupos,
        equipoDeInvestigacion
      }
    };
    this.Convocatoria = this.data.idCon;
  }

  builder() {
    if (this.data.actualizar) {
      this.registroGrupo = this.form.group({
        nombreGrupo: new FormControl(this.data.nombreGrupo, [Validators.required]),
        codigo: new FormControl(this.data.codigoGrupo, [Validators.required]),
        categoria: new FormControl(this.data.categoria, [Validators.required]),
        lider: new FormControl(this.data.categoria, [Validators.required]),
        antiguedad: new FormControl(this.data.antiguedad, [Validators.required]),
        entidad: new FormControl(this.data.entidad, [Validators.required])
      });
    } else {
      this.registroGrupo = this.form.group({
        nombreGrupo: new FormControl('', [Validators.required]),
        codigo: new FormControl('', [Validators.required]),
        categoria: new FormControl('', [Validators.required]),
        lider: new FormControl('', [Validators.required]),
        antiguedad: new FormControl('', [Validators.required]),
        entidad: new FormControl('', [Validators.required])
      });
    }
  }

  updateGrupo() {
    const storagelist = JSON.parse(localStorage.getItem('grupos'));
    const filtrogrupo = storagelist.filter(r => r.nombreGrupo != this.data.nombreGrupo);
    filtrogrupo.push(this.registroGrupo.value);
    const listaDeGrupos = this.state.segundoPaso.listaDeGrupos.map(grupo => {

    });

    this.updateState();
    localStorage.setItem('grupos', JSON.stringify(filtrogrupo));
    this.dialogRef.close(this.state);
  }

  getAll() {
    this.groupCategoryService.getIdConv(this.data.idCon).subscribe(r => {
      this.groupCats = r;
    });
  }

  guardarGrupo() {
      let listGroup = JSON.parse(localStorage.getItem('grupos'));
      if (listGroup == null) { listGroup = []; }
      listGroup.push(this.registroGrupo.value);
      localStorage.setItem('grupos', JSON.stringify(listGroup));


      const {antiguedad, categoria, codigo, entidad, nombreGrupo, lider} = this.registroGrupo.value;
      const numero = this.state.segundoPaso.listaDeGrupos.length + 1;
      const nuevoGrupo: Grupo = {
        numero,
        nombreGrupo,
        lider,
        codigo,
        categoria,
        antiguedad,
        entidad
      };
      this.state.segundoPaso.listaDeGrupos.push(nuevoGrupo);
      this.updateState();
      this.dialogRef.close(this.state);
  }

  public validateGroupCode(code): void {
    this.showErrorGroupCode = Boolean(this.state.segundoPaso.listaDeGrupos.find( group => group.codigo.toString() === code));
  }

  private updateState(): void {
    this.state = {
      ...this.saveStateService.getState(),
      segundoPaso: this.state.segundoPaso
    };
    this.saveStateService.setState(this.state);
  }
}
export interface RegistrarGrupoData {
  actualizar: boolean;
  idCon?: string;
  nombreGrupo?: string;
  codigoGrupo?: number;
  categoria?: string;
  antiguedad?: number;
  entidad?: string;
}
