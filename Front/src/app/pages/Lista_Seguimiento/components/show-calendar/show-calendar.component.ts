import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-show-calendar',
  templateUrl: './show-calendar.component.html',
  styleUrls: ['./show-calendar.component.scss']
})
export class ShowCalendarComponent {

  public SUB_TITLE = 'Seleccione la fecha de cumplimiento para la sub actividad';
  public SAVE_DATE = 'Guardar fecha';
  public CANCEL = 'Cancelar';
  public selectedDate: Date | null;

  constructor(
      public dialogRef: MatDialogRef<ShowCalendarComponent>,
      @Inject(MAT_DIALOG_DATA) public data: ShowCalendarData) { }

  public OnDateChange(date): void {
    this.selectedDate = date;
  }

  public saveDate(): void {
    this.dialogRef.close(this.selectedDate);
  }
}

export interface ShowCalendarData {
  name: string;
}

