import { identifierName, NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ConvocatoryService } from './../../../services/convocatory.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../@core/services/auth/auth.service';
import { ConfirmDialogComponent,ConfirmacionDialogData } from '../../../../Dialog/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {EditDialogConComponent,EditarConvDialogData} from './../../../edit-dialog-con/edit-dialog-con.component';
import {ConvoCreateComponent,ConvoCreateData} from './../../../convo-create/convo-create.component';
import { AuthStorageService } from '../../../../../../@core/services/storage/auth-storage/auth-storage.service';

import { GroupCategoryService } from '../../../../../../shared/services/group-category/group-category.service';
import { InvEndorsersService } from '../../../../../../shared/services/inv-endorsers/inv-endorsers.service';
import { InvTeamPersonPositionService } from '../../../../../../shared/services/inv-team-person-position/inv-team-person-position.service';
import { InvestigationLinesService } from '../../../../../../shared/services/investigation-lines/investigation-lines.service';
import { InvestigationProgramService } from '../../../../../../shared/services/investigation-program/investigation-program.service';
import { InvestigationSubProgramService } from '../../../../../../shared/services/investigation-sub-program/investigation-sub-program.service';
import { InvestigationTypesService } from '../../../../../../shared/services/investigation-types/investigation-types.service';
import { ProductTypeService } from '../../../../../../shared/services/product-type/product-type.service';
import { ProjectEntryService } from '../../../../../../shared/services/project-entry/project-entry.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonSimpleModel } from '../../../../../../shared/models/common-simple.model'



export interface ConvocatoriaElement {
  name: string;
  Descripcion: string;
}

export interface Objeto  {
  descr:String;
  Convocatoria: String;
}

@Component({
  selector: 'app-clone-convo',
  templateUrl: './clone-convo.component.html',
  styleUrls: ['./clone-convo.component.scss']
})

export class CloneConvoComponent implements OnInit {

  ngOnInit(): void {
    this.getAll();
  }
  
  objeto: Objeto = {
    'descr':"",
    'Convocatoria':""
  };

  //commonSimpleModel: CommonSimpleModel
  projectEntries: CommonSimpleModel[] = [];

  rows = [];
  temp = [];

  displayedColumns: string[] = ['name', 'Descripción', 'activo'];
  dataSource;

  constructor(
    private convocatoryServece: ConvocatoryService,
    private router: Router,
    public authService: AuthService,
    public dialog: MatDialog,
    private authStorageService: AuthStorageService,
    private groupCategoryService: GroupCategoryService,
    private invEndorsersService: InvEndorsersService,
    private invTeamPersonPositionService: InvTeamPersonPositionService,
    private investigationLinesService: InvestigationLinesService,
    private investigationProgramService: InvestigationProgramService,
    private investigationSubProgramService: InvestigationSubProgramService,
    private investigationTypesService: InvestigationTypesService,
    private productTypeService: ProductTypeService,
    private projectEntryService: ProjectEntryService,
  ) { 
  }

  getAll(){
    this.convocatoryServece.getall()
    .subscribe((convocatorias) => {
      this.temp = convocatorias;
      this.dataSource = this.temp;
    });
  }


  update(id,status,name){
    let encabezado
    let descripcion
    let state
    if (status){
      encabezado= `Desactivar clonacion`
      descripcion= `¿Se encuentra seguro de que quiere Desactivar la clonacion"${name}"?`
      state = false;
    }
    else{
      encabezado =`Activar clonacion`
      descripcion= `¿Se encuentra seguro de que quiere Activar la la clonacion "${name}"?`
      state = true;
    }
    let datos:ConfirmacionDialogData = {
      icono: 'info',
      severidad:'dialog-info',
      encabezado: encabezado,
      descripcion: descripcion
    }
    const dialogRef= this.dialog.open(ConfirmDialogComponent,{
      ariaLabel: `${encabezado} ${name} `,
      role: 'alertdialog',
      autoFocus: false,
      data:datos

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") {
          try{
            this.consultar(id,this.groupCategoryService);
            this.consultar(id,this.invEndorsersService);
            this.consultar(id,this.invTeamPersonPositionService);
            this.consultar(id,this.investigationLinesService);
            this.consultar(id,this.investigationProgramService);
            this.consultar(id,this.investigationSubProgramService);
            this.consultar(id,this.investigationTypesService);
            this.consultar(id,this.productTypeService);
            this.consultar(id,this.projectEntryService);

          }catch (error){
          }
       }
       else{
      }
    });
  }

  agregar(datos,endpoint){
    endpoint.add(datos).subscribe(r=>{
      
    })
  }

  consultar(id,endpoint){
    endpoint.getIdConv(id).subscribe(r=>{ 
      r.forEach(element => { 
        this.objeto.descr = element.descr;
        this.objeto.Convocatoria = this.authStorageService.getConvo();
        this.agregar(this.objeto,endpoint);
      });
    });
  }

}