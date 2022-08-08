import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructivosService } from 'src/app/@core/services/instructivos/instructivos.service';
import { CreateIntructionalComponent, CreateIntructionalData } from './create-intructional/create-intructional.component';
import { VerIntructiveComponent, VerIntructiveData } from './ver-intructive/ver-intructive.component';
import { CommonSimpleModel } from '../../shared/models/common-simple.model';
import { SucessDialogComponent, SucessDialogData } from '../admin/Dialog/sucess-dialog/sucess-dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { AuthStorageService } from '../../@core/services/storage/auth-storage/auth-storage.service';
import { formatDate } from '@angular/common';
import { Modificar } from 'src/app/shared/models/instructivo.model';
import { ConfirmDialogComponent,ConfirmacionDialogData } from './../admin/Dialog/confirm-dialog/confirm-dialog.component';
import { Console } from 'console';

@Component({
  selector: 'app-instructional',
  templateUrl: './instructional.component.html',
  styleUrls: ['./instructional.component.scss']
})

export class InstructionalComponent implements OnInit {

  instructives;
  admin;

  length;
  pageSize = 3;
  indice;
  size;
  
  pageSizeOptions: number[] = [3, 5, 10];

  ngOnInit(): void {

    this.validarRol();
    //this.getPuente222();
    this.getCount()
    this.getAll13(1,this.pageSize);
  }
  validarRol() {
    let rol = localStorage.getItem("Role");
    if (rol == "Administrador") {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }
  constructor(public dialog: MatDialog, private instructivosService: InstructivosService,
    private authStorageService: AuthStorageService,) { }


  getPuente(e: PageEvent){
    this.pageSize = e.pageSize;
    this.indice = e.pageIndex + 1;
    this.getAll13(this.indice,this.pageSize);
  }
  
  getAll13(e,s) {
    let objeto = e + '-' + s;
    this.instructivosService.getall13(objeto).subscribe(data => {
       this.filtro(data);
    })
  }
  filtro(instructivos) {
    let instructivosfiltro = instructivos.filter(c => { return c.Estado == 1 });
    this.instructives = instructivosfiltro;
  }
  ver(url, Nombre) {
    let datos: VerIntructiveData = {
      url: Nombre,
      Nombre: url
    }
    const dialogRef = this.dialog.open(VerIntructiveComponent, {
      ariaLabel: `Editar`,
      role: 'alertdialog',
      autoFocus: false,
      data: datos
    });
  }
  deleteIns(id,name) {
    let datos:ConfirmacionDialogData = {
      icono: 'info',
      severidad:'dialog-info',
      encabezado: 'Eliminar Instructivo',
      descripcion: `¿Se encuentra seguro de que quiere eliminar la ${name}?`
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      ariaLabel:  `Confirmar eliminación`,
      role: 'alertdialog',
      autoFocus: false,
      data:datos
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result == "true"){
        let usuario = this.authStorageService.getUserId();
        let fechaModificacion = formatDate(new Date(), 'dd/MM/yyyy', 'en');


        let modificar: Modificar = {
          FBorrado: fechaModificacion,
          UserBorradir: usuario,
          Estado: 2,
        }
        this.instructivosService.updatefile(id, modificar)
          .subscribe((res) => {
        });
        this.getAll13(this.indice,this.pageSize)
      }else{
        this.getAll13(this.indice,this.pageSize)
      }
    }); 
  }
  editarIns(object) {
    let datos: CreateIntructionalData = {
      id: object._id,
      codigo: object.Codigo,
      titulo: object.Titulo,
      objetivo: object.Objetivo,
      file: object.NombreArchivo,
      creacion: false
    }
    const dialogRef = this.dialog.open(CreateIntructionalComponent, {
      ariaLabel: `Editar`,
      role: 'alertdialog',
      autoFocus: false,
      data: datos
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != "true") {
        let datossucess: SucessDialogData = {
          icono: 'done',
          severidad: 'dialog-sucess',
          descripcion:`El Proceso para actualizar ${object.Codigo} no ha sido actualizado`
        }
        const dialogRef = this.dialog.open(SucessDialogComponent, {
          ariaLabel: ` ${object.Codigo} Error`,
          role: 'alertdialog',
          autoFocus: false,
          data: datossucess
        });
      }
      else {
        this.getAll13(this.indice,this.pageSize)
        //inicio dialog sucess
        let datossucess: SucessDialogData = {
          icono: 'done',
          severidad: 'dialog-sucess',
          descripcion:`El Proceso para actualizar ${object.Codigo} se ha completado Satisfactoriamente`

        }
        const dialogRef = this.dialog.open(SucessDialogComponent, {
          ariaLabel: ` ${object} Satisfactoriamente`,
          role: 'alertdialog',
          autoFocus: false,
          data: datossucess
        });
        dialogRef.afterClosed().subscribe(result => {
          this.getAll13(this.indice,this.pageSize)
        });
        //fin del dialog sucess 
      }
    });

  }
  openDialog() {
    let datos: CreateIntructionalData = {
      creacion: true
    }
    const dialogRef = this.dialog.open(CreateIntructionalComponent, {
      ariaLabel: `Editar`,
      role: 'alertdialog',
      autoFocus: false,
      data: datos
    });
    dialogRef.afterClosed().subscribe(r => {
      this.getAll13(this.indice,this.pageSize);
      if (r != 'true') {
        this.getAll13(this.indice,this.pageSize)
      }
      else {
        this.getAll13(this.indice,this.pageSize)
        let datossucess: SucessDialogData = {
          icono: 'done',
          severidad: 'dialog-sucess',
          encabezado: `Creacion del instructivo`,
          descripcion: `La creacion del instructivo se ha completado Satisfactoriamente`
        }
        const dialogRef = this.dialog.open(SucessDialogComponent, {
          ariaLabel: `La creaciondel intructivo Satisfactoriamente`,
          role: 'alertdialog',
          autoFocus: false,
          data: datossucess
        });
        dialogRef.afterClosed().subscribe(result => {
          this.getAll13(this.indice,this.pageSize)
        });
      }
    })
  }

  getCount() {
    this.instructivosService.getCount().subscribe(data => {
      this.length = data;
    });
  }
}
