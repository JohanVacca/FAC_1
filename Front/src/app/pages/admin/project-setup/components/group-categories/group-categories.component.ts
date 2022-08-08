import { Component, OnInit } from '@angular/core';
import { GroupCategoryService } from '../../../../../shared/services/group-category/group-category.service'
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
  selector: 'app-group-categories',
  templateUrl: './group-categories.component.html',
  styleUrls: ['../../project-setup.component.scss']
})
export class GroupCategoriesComponent implements OnInit {
  addentries: FormGroup;
  Convocatoria: string;
  projectEntries: CommonSimpleModel[] = [];

  displayedColumns: string[] = ['position', 'name'];

  constructor(
    private groupCategoryService: GroupCategoryService,
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
    this.groupCategoryService.getIdConv(this.Convocatoria).subscribe(r => {
      this.projectEntries = r
    })
  }

  onProductTypeDeleted(item) {
    let datos: ConfirmacionDialogData = {
      icono: 'info',
      severidad: 'dialog-info',
      encabezado: 'Eliminar Categoria',
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
        this.groupCategoryService.delete(item).subscribe((result) => {
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
    this.groupCategoryService.add(dato).subscribe(r => {
      this.getAll();
      this.buildForm();
    })
  }

}
