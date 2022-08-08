import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConvocatoryService } from '../../admin/convocatory/services/convocatory.service';
import { ProjectService } from 'src/app/shared/services/Proyect/project.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ProyectosComponent, VistaProyectosData } from '../components/proyectos/proyectos.component'

@Component({
  selector: 'app-lista-seguimiento',
  templateUrl: './lista-seguimiento.component.html',
  styleUrls: ['./lista-seguimiento.component.scss']
})
export class ListaSeguimientoComponent implements OnInit {
  temp = [];
  displayedColumns1: string[] = ['name', 'Descripcion', 'acciones'];
  dataSource1;
  constructor(private projectService: ProjectService,
    private router: Router,
    public dialog: MatDialog,
    private convocatoryService: ConvocatoryService) { }

  ngOnInit(): void {
    this.getAllConv();
  }


  getAllConv() {
    this.convocatoryService.getall()
      .subscribe((convocatorias) => {
        this.filtro(convocatorias);
      });
  }

  filtro(convocatorias) {
    let convocatoriasfiltro = convocatorias.filter(r => { return r.isActive === true });
    this.temp = convocatoriasfiltro;
    this.dataSource1 = this.temp;
  }
  view(id) {
    let datos: VistaProyectosData = {
      idConvocatoria: id,
    }
    const dialogRef = this.dialog.open(ProyectosComponent, {
      data: datos
    })
    dialogRef.afterClosed().subscribe(r => {

    })
  }
}
