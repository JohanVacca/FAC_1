import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sucess-dialog',
  templateUrl: './sucess-dialog.component.html',
  styleUrls: ['./sucess-dialog.component.scss']
})
export class SucessDialogComponent{

  constructor( @Inject(MAT_DIALOG_DATA) public data: SucessDialogData) {

  }


 }
export interface SucessDialogData {
  icono: string;
  severidad?:string;
  encabezado?: string;
  descripcion?: string;
  botonAceptarLabel?: string;
  botonCancelarLabel?: string;
}

