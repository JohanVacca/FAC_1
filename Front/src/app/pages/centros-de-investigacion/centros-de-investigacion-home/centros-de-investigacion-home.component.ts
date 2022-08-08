import {Component, OnInit} from '@angular/core';
import {InvCenterService} from '../../../shared/services/inv-center2/inv-center.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {UsersService} from '../../admin/users/services/users.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalCentrosComponent} from '../modal-centros/modal-centros.component';

@Component({
    selector: 'app-centros-de-investigacion-home',
    templateUrl: './centros-de-investigacion-home.component.html',
    styleUrls: ['./centros-de-investigacion-home.component.scss']
})
export class CentrosDeInvestigacionHomeComponent implements OnInit {

    public LIST = 'Listado de centros de investigación';
    public MESSAGE_LIST = 'A continuación se muestra el Listado de centros de investigación';
    public displayedColumns1: string[] = ['name', 'jefe', 'acciones'];
    public centrosDeInvestigacion = [];
    public jefesDeCentro = [];
    public name = '';
    public jefe;
    public centrosForm: FormGroup;

    constructor(
        private invCenterService: InvCenterService,
        private fb: FormBuilder,
        private dialog: MatDialog,
        private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.builder();
        this.getCenters();
        this.getUsers();
    }

    public setName(name: string): void {
        this.name = name;
    }

    public eliminarCentro(id: string): void {
        this.invCenterService.removeCenter(id)
            .pipe(finalize(() => this.getCenters()))
            .subscribe(nuevoCentro => {
            });
    }

    public editarCentro(centroSeleccionado): void {
        const data = {
            centro: this.centrosDeInvestigacion,
            jefes: this.jefesDeCentro,
            ...centroSeleccionado
        };
        this.dialog.open(ModalCentrosComponent, {data})
            .afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    public agregarCentro(): void {
        if (this.name && this.jefe) {
            this.invCenterService.crearCentro(this.name, this.jefe)
                .pipe(finalize(() => this.getCenters()))
                .subscribe(nuevoCentro => {
                    this.jefe = undefined;
                    this.name = '';
                });
        }
    }

    private builder(): void {
        this.centrosForm = this.fb.group({
            name: new FormControl(''),
            jefe: new FormControl(''),
        });
    }

    private getCenters(): void {
        this.invCenterService.getAll()
            .subscribe(centros => {
                // @ts-ignore
                this.centrosDeInvestigacion = centros.invCenters;
            });
    }

    private getUsers(): void {
        this.usersService.getAll()
            .subscribe(users => {
                this.jefesDeCentro = [];
                users.map(user => {
                    if (user.role.name === 'Jefe De Centro') {
                        this.jefesDeCentro.push(user);
                    }
                });
            });
    }
}
