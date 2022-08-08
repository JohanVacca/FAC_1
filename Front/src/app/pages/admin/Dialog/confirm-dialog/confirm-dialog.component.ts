import { Component,Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data:ConfirmacionDialogData) {

  }


 }
export interface ConfirmacionDialogData {
  icono: string;
  severidad?:string;
  encabezado?: string;
  descripcion?: string;
  botonAceptarLabel?: string;
  botonCancelarLabel?: string;
}
