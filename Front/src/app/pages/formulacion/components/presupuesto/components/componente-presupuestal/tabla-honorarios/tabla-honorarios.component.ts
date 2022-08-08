import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TablaHonoraiosService } from 'src/app/@core/services/tabla-honorarios/tabla-honoraios.service';

@Component({
  selector: 'app-tabla-honorarios',
  templateUrl: './tabla-honorarios.component.html',
  styleUrls: ['./tabla-honorarios.component.scss']
})
export class TablaHonorariosComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['id', 'formacion', 'experiencia', 'tope'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: TablaHonorariosData, private tablaHonorariosService: TablaHonoraiosService,
    public dialogRef: MatDialogRef<TablaHonorariosComponent>) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.tablaHonorariosService.getall().subscribe(r => {
      this.dataSource = r['honorarios'];
    })
  }
  cancelar() {
    this.dialogRef.close();
  }
}
export interface TablaHonorariosData {

}
