import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CentrosDashboard} from '../../shared/services/saveStateService/StateInterface';

@Component({
  selector: 'app-modal-centros',
  templateUrl: './modal-centros.component.html',
  styleUrls: ['./modal-centros.component.scss']
})
export class ModalCentrosComponent {

  public centros = [];
  public TITLE = 'Informacion del centro';
  public TOTAL_PROJECTS = 'Total de proyectos: ';
  public NAME = 'Nombre del Centro: ';
  public PROJECT = 'Nombre de Proyecto';
  public CLOSE_MODAL = 'Cerrar';
  public NUMBER = 'Número';
  public MESSAGE_NOT_FOUND = 'No hay proyectos relacionados al centro seleccionado';

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: CentrosDashboard,
      private dialogRef: MatDialogRef<ModalCentrosComponent>
  ) {
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

}
