import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TablaHonoraiosService } from 'src/app/@core/services/tabla-honorarios/tabla-honoraios.service';
import { ConfirmDialogComponent, ConfirmacionDialogData } from '../../admin/Dialog/confirm-dialog/confirm-dialog.component';
import { ActualizarHonorariosComponent, ActualizarHonorariosData } from './components/actualizar-honorarios/actualizar-honorarios.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../@core/services/auth/auth.service';


@Component({
  selector: 'app-honorarios-colciencias',
  templateUrl: './honorarios-colciencias.component.html',
  styleUrls: ['./honorarios-colciencias.component.scss']
})
export class HonorariosColcienciasComponent implements OnInit {
  honorarios: FormGroup;
  displayedColumns: string[] = ['id', 'formacion', 'experiencia', 'tope', 'acciones'];
  activate = true;

  constructor
    (private fb: FormBuilder,
      private tablaHonoraiosService: TablaHonoraiosService,
      public authService: AuthService,
      public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.buildForm();
    this.getAll();
  }
  temp = [];
  dataSource;
  buildForm() {
    this.honorarios = this.fb.group({
      honorarioId: new FormControl(''),
      formacion: new FormControl(''),
      experiencia: new FormControl(''),
      topeMaximo: new FormControl(''),

    });
  }
  agregar() {
    this.activate = false;
    let datos: ConfirmacionDialogData = {
      icono: 'info',
      severidad: 'dialog-info',
      encabezado: 'Id Repetido',
      descripcion: `Id del objeto esta repetido porfavor cambie el id`
    }
    const data = this.honorarios.value;
    this.tablaHonoraiosService.validador(data.honorarioId).subscribe(r => {
      if (r['Validador']) {
        this.tablaHonoraiosService.agregar(data).subscribe(r => {
          this.buildForm();
          this.getAll();
          this.activate = true;
        });
      } else {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          ariaLabel: `Editar`,
          role: 'alertdialog',
          autoFocus: false,
          data: datos
        });
        dialogRef.afterClosed().subscribe(r => {
          this.activate = true;
        });
      }
    });
  }
  getAll() {
    this.tablaHonoraiosService.getall().subscribe(r => {
      this.dataSource = r['honorarios'];
    })
  }
  delet(id) {
    this.tablaHonoraiosService.delete(id).subscribe(r => {
      this.getAll();
    })
  }
  update(data) {
    let datos: ActualizarHonorariosData = {
      _id: data._id,
      id: data.honorarioId,
      formacion: data.formacion,
      experiencia: data.experiencia,
      topeMaximo: data.topeMaximo,
    }
    const dialogRef = this.dialog.open(ActualizarHonorariosComponent, {
      ariaLabel: `Editar Honorario`,
      role: 'alertdialog',
      autoFocus: false,
      data: datos
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getAll()
    });
  }
}
