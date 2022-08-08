import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {InvCenterService} from '../../../shared/services/inv-center2/inv-center.service';
import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { InvEndorsersService } from 'src/app/shared/services/inv-endorsers/inv-endorsers.service';
import { InvestigationProgramService } from 'src/app/shared/services/investigation-program/investigation-program.service';
import { InvestigationSubProgramService } from 'src/app/shared/services/investigation-sub-program/investigation-sub-program.service';
import { InvestigationTypesService } from 'src/app/shared/services/investigation-types/investigation-types.service';
import { InvestigationLinesService } from 'src/app/shared/services/investigation-lines/investigation-lines.service';
import { UsersService } from 'src/app/@core/services/users/users.service';
import {ActivatedRoute} from '@angular/router';
import { CommonSimpleModel } from 'src/app/shared/models/common-simple.model';
import { UserModel } from 'src/app/shared/models/user.model';
import {finalize, map, startWith} from 'rxjs/operators';
import { SaveStateService } from 'src/app/shared/services/saveStateService/save-state.service';
import { StateInterface} from 'src/app/shared/services/saveStateService/StateInterface';
import { NecesidadService } from '../../../shared/services/necesidad-service/necesidad.service';
import { MatStepper } from '@angular/material/stepper';
import {Observable} from 'rxjs';
import { UpdateNececidadesTableServiceService } from 'src/app/shared/services/general/update-nececidades-table-service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocalStorageService } from 'src/app/@core/services';
@Component({
  selector: 'app-necesidades-home',
  templateUrl: './necesidades-home.component.html',
  styleUrls: ['./necesidades-home.component.scss']
})


export class NecesidadesHomeComponent implements OnInit, AfterViewInit {


  constructor(
      private necesidadService: NecesidadService,
      private fb: FormBuilder,
      private investigationLinesService: InvestigationLinesService,
      private investigationProgramService: InvestigationProgramService,
      private investigationSubProgramService: InvestigationSubProgramService,
      private updateNececidadesTableServiceService: UpdateNececidadesTableServiceService,
      private form: FormBuilder,
      private localStorageService:LocalStorageService
  ) {
  }

  public LIST = 'Necesidades';
  public MESSAGE_LIST = 'A continuación podrá crear las necesidades de su unidad';
  public displayedColumns2: string[] = ['selectedValue','name','programa', 'subprograma','lineasinv', 'descripcion', 'porque', 'acciones'];
  public necesidades: any;
  public name = '';
  public programa;
  public descripcion = '';
  public porque = '';
  public subprograma;
  public prioridad;
  public LinsIns;
  public lineasinv;
  public LinesIns= [];
  public ProgamIns= [];
  public ProgamSubIns= [];
  public gestorActiId;
  public centrosForm: FormGroup;
  public selectedValue = [];

  user = localStorage.getItem('user');

  @ViewChild('clasificar') clasificar = new MatSort();
  dataSource = new MatTableDataSource;

  ngOnInit(): void {
    this.builder();
    this.getProgramss();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.clasificar;
    console.log(this.clasificar)};

  optionns = [
    {value: 'option-0', viewValue: '1'},
    {value: 'option-1', viewValue: '2'},
    {value: 'option-2', viewValue: '3'},
    {value: 'option-3', viewValue: '4'},
    {value: 'option-4', viewValue: '5'}
  ];



  public removeNecesidad(id: string): void {
    this.necesidadService.removeUnidad(id)
        .pipe(finalize(() => this.updateNececidadesTableServiceService.updateTable()))
        .subscribe(nuevoCentro => {});
  }

  public addNecesidad(): void {
    const user:UserModel = JSON.parse(localStorage.getItem('user'));
    if (this.name && this.descripcion && this.porque && this.lineasinv && this.programa && this.subprograma && this.selectedValue) {
      this.necesidadService.createNecesidad(this.name, this.descripcion, this.porque, this.lineasinv, this.programa, this.subprograma, this.selectedValue )
          .pipe(finalize(() => this.updateNececidadesTableServiceService.updateTable()))
          .subscribe(nuevoCentro => {
              this.name = '';
              this.descripcion = '';
              this.porque = '';
              this.programa = undefined;
              this.subprograma = undefined;
              this.lineasinv = undefined;
              this.selectedValue = undefined;

          });
    }
  }

  private builder(): void {
    this.centrosForm = this.fb.group({
      name: new FormControl(''),
      descripcion: new FormControl(''),
      porque: new FormControl(''),
      programa: new FormControl(''),
      subprograma: new FormControl(''),
      lineasinv: new FormControl(''),
      selectedValue: new FormControl(''),
    });
  }

  private getProgramss(): void{
    this.investigationProgramService.getAll()
        .subscribe(invPrograms => {
            this.ProgamIns = [];
            invPrograms.map(invProgram => {
              if (invProgram.descr){
                  this.ProgamIns.push(invProgram);
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

/* Getting all the lines of investigation from the database and pushing them to the array LinsIns. */
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

}
