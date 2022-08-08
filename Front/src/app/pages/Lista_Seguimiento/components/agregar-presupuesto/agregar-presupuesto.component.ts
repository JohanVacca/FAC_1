import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-presupuesto',
  templateUrl: './agregar-presupuesto.component.html',
  styleUrls: ['./agregar-presupuesto.component.scss']
})
export class AgregarPresupuestoComponent {

  public SUB_TITLE = 'Ingrese el presupuesto ejecutado para ';
  public SAVE_DATE = 'Actualizar presupuesto';
  public MAX = 'Monto máximo: ';
  public CANCEL = 'Cancelar';
  public ERROR_LABEL = 'Por favor ingresar un documento con formato PDF';
  public presupuesto = 0;
  public formatError = false;
  public fileToUpload;

  constructor(
      public dialogRef: MatDialogRef<AgregarPresupuestoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: AgregarPresupuestoInterface) {
  }

  public OnDateChange(presupuesto): void {
    this.presupuesto = presupuesto > this.data.maxLimit ? this.data.maxLimit : presupuesto;
  }

  public saveDate(): void {
    const returnValue = {presupuesto: this.presupuesto, id: this.data.id, factura: this.fileToUpload};
    this.dialogRef.close(returnValue);
  }

  public saveBill(files: FileList): void {
    const fileToUpload = files.item(0);
    if (fileToUpload.type.includes('pdf')) {
      this.fileToUpload = fileToUpload;
      this.formatError = false;
    } else {
      this.formatError = true;
    }
  }
}

export interface AgregarPresupuestoInterface {
  id: string;
  name: string;
  maxLimit: number;
}
