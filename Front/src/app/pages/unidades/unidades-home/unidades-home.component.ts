import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InvCenterService } from '../../../shared/services/inv-center2/inv-center.service';
import { UsersService } from '../../admin/users/services/users.service';
import { finalize, map, startWith, debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UnidadService } from '../../../shared/services/unidad-service/unidad.service';

@Component({
  selector: 'app-unidades-home',
  templateUrl: './unidades-home.component.html',
  styleUrls: ['./unidades-home.component.scss']
})

export class UnidadesHomeComponent implements OnInit {

  public LIST = 'Listado de Unidades';
  public MESSAGE_LIST = 'A continuación se muestra el Listado de las Unidades activas o disponibles';
  public displayedColumns1: string[] = ['name', 'ubicacion', 'rResponsable', 'comandante', 'acciones'];
  public unidades = [];
  public Comandantes = [];
  public Responsables = [];
  public name = '';
  public ubicacion = '';
  public rResponsable;
  public comandante;
  public centrosForm: FormGroup;

  constructor(
    private unidadService: UnidadService,
    private fb: FormBuilder,
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.builder();
    this.getUnidades();
    this.getUsers();
  }



  public removeUnidad(id: string): void {
    this.unidadService.removeUnidad(id)
      .pipe(finalize(() => this.getUnidades()))
      .subscribe(nuevoCentro => { });
  }

  public addUnidad(): void {
    if (this.name && this.ubicacion && this.rResponsable && this.comandante) {
      this.unidadService.createUnidad(this.name, this.ubicacion, this.rResponsable._id, this.comandante._id)
        .pipe(finalize(() => this.getUnidades()))
        .subscribe(nuevoCentro => {
          this.name = '';
          this.ubicacion = '';
          this.rResponsable = undefined;
          this.comandante = undefined;
        });
    }
  }

  private builder(): void {
    this.centrosForm = this.fb.group({
      name: new FormControl(''),
      ubicacion: new FormControl(''),
      rResponsable: new FormControl(''),
      comandante: new FormControl(''),
    });
  }

  private getUnidades(): void {
    this.unidadService.getAll()
      .subscribe(unidad => {
        console.log('unidad >>>', unidad);
        // @ts-ignore
        this.unidades = unidad.unidades;
      });
  }

  private getUsers(): void {
    this.usersService.getAllFilterUnidad()
      .subscribe(users => {
        this.Responsables = [];
        users.map(user => {
          if (user.role.name === 'Responsable') {
            this.Responsables.push(user);
          }
          if (user.role.name === 'Comandante') {
            this.Comandantes.push(user);
          }
        });
      });
  }


}
