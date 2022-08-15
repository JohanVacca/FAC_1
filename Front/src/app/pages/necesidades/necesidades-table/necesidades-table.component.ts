import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UpdateNececidadesTableServiceService } from "src/app/shared/services/general/update-nececidades-table-service.service";
import { NecesidadService } from "src/app/shared/services/necesidad-service/necesidad.service";
import { finalize } from "rxjs/operators";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; //Se importa Formbuilder y Validators para crear formularios y validar campos
import { Necesidad } from "src/app/shared/models/necesidad";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { InvestigationProgramService } from 'src/app/shared/services/investigation-program/investigation-program.service';
import { InvestigationSubProgramService } from 'src/app/shared/services/investigation-sub-program/investigation-sub-program.service';
import { InvestigationLinesService } from 'src/app/shared/services/investigation-lines/investigation-lines.service';
import { Options } from "selenium-webdriver";
import { LocalStorageService } from "src/app/@core/services";

interface Food {
  value: string;
  viewValue: string;
}

interface programaInterfaz {
  value: string;
  viewValue: string;
}
interface subprograma {
  value: string;
  viewValue: string;
}
interface lineasinv {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-necesidades-table",//Exportar componente
  templateUrl: "./necesidades-table.component.html",
  styleUrls: ["./necesidades-table.component.scss"],
})


export class NecesidadesTableComponent implements OnInit, AfterViewInit {

  id: string | null;

  name: string;
  descripcion: string;
  porque: string;
  selectedValue: number;
  lineasinv: string;
  subprograma: string;
  programa: string;

  optionns:Food[] = [
    {value: 'option-0', viewValue: '1'},
    {value: 'option-1', viewValue: '2'},
    {value: 'option-2', viewValue: '3'},
    {value: 'option-3', viewValue: '4'},
    {value: 'option-4', viewValue: '5'}
  ];

  user = localStorage.getItem('user');
  public LinesIns= [];
  public ProgamIns= [];
  public ProgamSubIns= [];
  public LinsIns=[];
  public formNecesidad: FormGroup;

  public displayedColumns2: string[] = [
    "selectedValue",
    "name",
    "programa",
    "subprograma",
    "lineasinv",
    "descripcion",
    "porque",
    "acciones",
  ];

  public necesidades: any;
  public sesion_rol = localStorage.getItem('Role'); //Traemos el rol logeado

  @ViewChild("clasificar") clasificar = new MatSort();
  dataSource = new MatTableDataSource();

  constructor(
    private localStorageService:LocalStorageService,
    private investigationLinesService: InvestigationLinesService,
    private investigationProgramService: InvestigationProgramService,
    private investigationSubProgramService: InvestigationSubProgramService,
    private necesidadService: NecesidadService,
    private updateNececidadesTableServiceService: UpdateNececidadesTableServiceService,
    private fb: FormBuilder,
    private modal:NgbModal,){}

  metodoActualizarNecesidad(){
    const datos = this.formNecesidad.value;
    //console.log(this.formNecesidad.value);

    if (this.id !== null) {
      this.necesidadService.patchNecesidad(this.id, datos).subscribe(data=>{
        //console.log("Editado con éxito");
      }, error =>{
        //console.log("Error al agregar");
        //console.log(error);
      })
      this.updateNececidadesTableServiceService.updateTablenecesitadesObs$.subscribe(
        () => {
          this.getNecesidades();
        }
      );
    }
  }

  openModalEdit(idNecesidad){
    this.id = idNecesidad;
    // console.log("Abajo openModalEdit")
    // console.log(this.ProgamIns)
    //console.log(this.id);
  }

  ngOnInit(): void {
    this.getProgramss();
    this.builder();
    this.getNecesidades();
    this.updateNececidadesTableServiceService.updateTablenecesitadesObs$.subscribe(
      () => {
        this.getNecesidades();
      }
    );
  }

  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public removeNecesidad(id: string): void {
    this.necesidadService
      .removeUnidad(id)
      .pipe(
        finalize(() => this.updateNececidadesTableServiceService.updateTable())
      )
      .subscribe((nuevoCentro) => {});
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.clasificar;
    //console.log(this.clasificar);
  }

  private getNecesidades(): void {
    this.necesidadService.getAll().subscribe((necesidad) => {
      console.log("necesidad >>>", necesidad);
      // @ts-ignore
      this.necesidades = necesidad.necesidades;
      this.dataSource.data = this.necesidades;
    });
  }

  //Obteniendo enlistables
  private getProgramss(): void{
    this.investigationProgramService.getAll()
        .subscribe(invPrograms => {
            this.ProgamIns = [];
            invPrograms.map(invProgram => {
              if (invProgram.descr){
                  this.ProgamIns.push(invProgram);
                  // console.log("Abajo getProgramss")
                  // console.log(this.ProgamIns)
              }
            });
        });

    this.investigationSubProgramService.getAll()
        .subscribe(invSubPrograms => {
            this.ProgamSubIns = [];
            invSubPrograms.map(invSubProgram => {
              if (invSubProgram.descr){
                  this.ProgamSubIns.push(invSubProgram);
              }
            });
        });
    this.investigationLinesService.getAll()
        .subscribe(invLines => {
            this.LinsIns = [];
            invLines.map(invLine => {
              if (invLine.descr){
                  this.LinsIns.push(invLine);
              }
            });
        });
  }
  //Construir formulario, se deben parecer los campos
  private builder(): void {
    this.formNecesidad = this.fb.group({
      name: new FormControl(''),
      descripcion: new FormControl(''),
      porque: new FormControl(''),
      programa: new FormControl(''),
      subprograma: new FormControl(''),
      lineasinv: new FormControl(''),
      selectedValue: new FormControl(''),
    });
  }
}
