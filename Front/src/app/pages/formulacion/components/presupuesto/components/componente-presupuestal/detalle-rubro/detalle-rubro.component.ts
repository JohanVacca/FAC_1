import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TablaHonorariosComponent } from '../tabla-honorarios/tabla-honorarios.component';
import { TablaHonoraiosService } from 'src/app/@core/services/tabla-honorarios/tabla-honoraios.service';

export interface Sumas {
  sumaT: number,
  suma: number[];
}

export interface PeriodicElement {
  id: Number,
  institucion: string;
  efectivo: number;
  especie: number;
}

@Component({
  selector: 'app-detalle-rubro',
  templateUrl: './detalle-rubro.component.html',
  styleUrls: ['./detalle-rubro.component.scss']
})
export class DetalleRubroComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DetalleRubroData,
              public dialog: MatDialog,
              private tablaHonorariosService: TablaHonoraiosService,
  ) { }

  sisInfo = 4;
  sisNum = 123;
  Complet = false;

  Perfil;
  entid;
  aux;
  val = false;
  Entidad = [];
  dataSourceRubro = [];
  entidadesAux = [];
  ArraySumas: Sumas;
  // dataSourceRubro = ELEMENT_DATA;
  displayedColumnsRubro: string[] = ["NombreRubro",'Descripcion','rubros'];


  ngOnInit(): void {
    this.dataSourceRubro = JSON.parse(localStorage.getItem("AgregarDetallesRubros"))
    if(this.data.MosC){
      this.dataSourceRubro = this.data.Rubro;
    }
    this.dataSourceRubro.forEach(element => {
      if(element.idRubro == this.data.id){
        this.aux = element
      }
    });
    this.Entidad = JSON.parse(localStorage.getItem("Entidades"));
    if(this.Entidad != null){
      this.Entidad.forEach(element => {
        this.entidadesAux.push(element.Institucion);
      });
    }
    if(this.aux.NombreRubro == "Personal Cientifico"){
      this.val = true;
    }
    this.Perfil = this.aux;
    this.entid = this.entidadesAux;
    this.dataSourceRubro = this.aux.EntidadesCostos;
    this.sumas(this.dataSourceRubro)
  }

  sumas(datos){
    let aux = []
    let suma;
    let sumaT = 0;
    datos.forEach(element => {
      suma = parseInt(element.efectivo) + parseInt(element.especie);
      sumaT = sumaT + parseInt(suma);
      aux.push(suma);
    });
    this.ArraySumas =({
      sumaT:sumaT,
      suma:aux
    })
  }



}

export interface DetalleRubroData {
  id: string;
  MosC?: boolean,
  Rubro?: any[]
}
