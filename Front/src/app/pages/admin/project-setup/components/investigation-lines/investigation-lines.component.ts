import { Component, OnInit } from '@angular/core';
import { InvestigationLinesService } from '../../../../../shared/services/investigation-lines/investigation-lines.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonSimpleModel } from '../../../../../shared/models/common-simple.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfirmDialogComponent, ConfirmacionDialogData } from '../../../Dialog/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export interface Datos {
  descr: string;
  Convocatoria: String;
}

@Component({
  selector: 'app-investigation-lines',
  templateUrl: './investigation-lines.component.html',
  styleUrls: ['../../project-setup.component.scss']
})
export class InvestigationLinesComponent implements OnInit {
  addentries: FormGroup;
  Convocatoria: string;
  projectEntries: CommonSimpleModel[] = [];

  displayedColumns: string[] = ['position', 'name'];

  constructor(
    private investigationLinesService: InvestigationLinesService,
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
    this.buildForm();
  }

  private buildForm() {
    this.addentries = this.fb.group({
      descr: new FormControl('', [Validators.required]),
      Convocatoria: new FormControl(''),

    });
  }
  getAll() {
    let cv = this.rutaActiva.snapshot.params;
    this.Convocatoria = cv.id;
    this.investigationLinesService.getIdConv(this.Convocatoria).subscribe(r => {
      this.projectEntries = r
    })

  }
  onProductTypeDeleted(item) {
    let datos: ConfirmacionDialogData = {
      icono: 'info',
      severidad: 'dialog-info',
      encabezado: 'Eliminar Linea de investigacion',
      descripcion: `¿Esta seguro que desea eliminar este item?`
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      ariaLabel: `Confirmar eliminación`,
      role: 'alertdialog',
      autoFocus: false,
      data: datos

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") {
        this.investigationLinesService.delete(item).subscribe((result) => {
          this.getAll();
        });
      } else {

      }
    });
  }
  agregar() {
    const datos = this.addentries.value;
    var dato = {
      descr: datos.descr,
      Convocatoria: this.Convocatoria
    }
    this.investigationLinesService.add(dato).subscribe(r => {
      this.getAll();
      this.buildForm();
    })
  }

}
