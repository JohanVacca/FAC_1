import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { finalize } from "rxjs/operators";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; //Se importa Formbuilder y Validators para crear formularios y validar campos
import { Necesidad } from "src/app/shared/models/necesidad";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Options } from "selenium-webdriver";
import { LocalStorageService } from "src/app/@core/services";
import { PropiedadintService } from "src/app/shared/services/propiedadint-service/propiedadint.service";
import { UpdateNececidadesTableServiceService } from "src/app/shared/services/general/update-nececidades-table-service.service";

@Component({
  selector: 'app-propiedadint-table',
  templateUrl: './propiedadint-table.component.html',
  styleUrls: ['./propiedadint-table.component.scss']
})
export class PropiedadintTableComponent implements OnInit, AfterViewInit {
  public sesion_rol = localStorage.getItem('Role'); //Traemos el rol logeado
  user = localStorage.getItem('user');
  public formNecesidad: FormGroup;
  public Propiedades = [];
  @ViewChild("clasificar") clasificar = new MatSort();
  dataSource = new MatTableDataSource();
  public displayedColumns2: string[] = [
    "proyecto",
    "subactividad",
    "descripcion",
    "acciones",
  ];

  constructor(
    private localStorageService:LocalStorageService,
    private propiedadintService: PropiedadintService,
    private updateNececidadesTableServiceService: UpdateNececidadesTableServiceService,
    private fb: FormBuilder,
    private modal:NgbModal,){}

  ngOnInit(): void {
    this.obtenerPropiedades();
    this.builder();
    this.updateNececidadesTableServiceService.updateTablenecesitadesObs$.subscribe(
      () => {
        this.obtenerPropiedades();
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.clasificar;
    //console.log(this.clasificar);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Obteniendo enlistables
  private obtenerPropiedades(): void{
    this.propiedadintService.getAll().subscribe((propiedades:any[]) => {
      this.Propiedades = [];
      propiedades.map(propiedad => {
        this.Propiedades.push(propiedad);
        //console.log(this.Propiedades)
        this.dataSource.data = this.Propiedades;
      });
  });
  }

  public removePropiedad(id: string): void {
    this.propiedadintService
      .removePropiedad(id)
      .pipe(
        finalize(() => this.updateNececidadesTableServiceService.updateTable())
      )
      .subscribe((nuevoCentro) => {});
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
