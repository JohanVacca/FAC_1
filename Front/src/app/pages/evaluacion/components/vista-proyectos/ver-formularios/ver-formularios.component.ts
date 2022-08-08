import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../../../../shared/services/Proyect/project.service';
import { Router } from '@angular/router';
import { ConvocatoryService } from '../../../../admin/convocatory/services/convocatory.service';
import { InstructivosService } from '../../../../../@core/services/instructivos/FormIns.service';
import { VerIntructiveComponent, VerIntructiveData } from '../../../../../pages/instructional/ver-intructive/ver-intructive.component';

@Component({
  selector: 'app-ver-formularios',
  templateUrl: './ver-formularios.component.html',
  styleUrls: ['./ver-formularios.component.scss']
})
export class VerFormulariosComponent implements OnInit {

 
  dataSource;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: VerFormulariosData,
              private instructivosService:InstructivosService,
              private router: Router,
              public dialog: MatDialog,
              private convocatoryService: ConvocatoryService) 
  { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.instructivosService.getIdProyect(this.data.idForm).subscribe( res => {
      this.dataSource = res;
    })
  }

  ver(url, Nombre) {
    let datos: VerIntructiveData = {
      url: url,
      Nombre: Nombre
    }
    const dialogRef = this.dialog.open(VerIntructiveComponent, {
      ariaLabel: `Editar`,
      role: 'alertdialog',
      autoFocus: false,
      data: datos
    });
  }

}

export interface VerFormulariosData{
  idForm: string;
}
