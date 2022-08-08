import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RegistrarPersonaComponent} from './registrar-persona/registrar-persona.component';
import {EquipoInvestigacion} from './registrar-persona/registrar-persona.component';
import {ActivatedRoute} from '@angular/router';
import {SaveStateService} from '../../../../../../shared/services/saveStateService/save-state.service';
import {StateInterface} from '../../../../../../shared/services/saveStateService/StateInterface';

@Component({
    selector: 'app-equipo-investigacion',
    templateUrl: './equipo-investigacion.component.html',
    styleUrls: ['../../cientifico-tecnologico.component.scss']
})
export class EquipoInvestigacionComponent implements OnInit {

    Convocatoria;
    displayedColumns: string[] = ['name', 'apellidos', 'id', 'grado', 'cargo', 'grupo', 'acciones'];
    public dataSource = [];
    private state: StateInterface;

    constructor(
        public data: MatDialog,
        private rutaActiva: ActivatedRoute,
        private saveStateService: SaveStateService
    ) {
    }

    ngOnInit(): void {
        this.getEquipo();
    }

    getEquipo(): void {
        this.state = this.saveStateService.getState();
        if (this.state) {
            this.dataSource = [...this.state.segundoPaso.equipoDeInvestigacion];
        }
    }

    registrarPersona(): void {
        let cv = this.rutaActiva.snapshot.params;
        this.Convocatoria = cv.id;
        let datos: EquipoInvestigacion = {
            actualizar: false,
            idCon: this.Convocatoria
        };
        const dialogRef = this.data.open(RegistrarPersonaComponent, {
            data: datos
        });
        dialogRef.afterClosed().subscribe(r => {
            this.getEquipo();
        });
    }

    deletePersona(identificacion): void {
        const equipoStorage = JSON.parse(localStorage.getItem('equipoInvestigacion'));
        const equipofiltro = equipoStorage.filter(r => r.identificacion !== identificacion);
        localStorage.setItem('equipoInvestigacion', JSON.stringify(equipofiltro));

        this.state.segundoPaso.equipoDeInvestigacion = this.state.segundoPaso.equipoDeInvestigacion
            .filter(investigador => investigador.identificacion !== identificacion);
        this.updateState();
        this.getEquipo();
    }

    updatePersona(objeto): void {
        let cv = this.rutaActiva.snapshot.params;
        this.Convocatoria = cv.id;
        let datos: EquipoInvestigacion = {
            actualizar: true,
            idCon: this.Convocatoria,
            nombres: objeto.nombres,
            apellidos: objeto.apellidos,
            identificacion: objeto.identificacion,
            grado: objeto.grado,
            cargo: objeto.cargo,
            dedicacion: objeto.dedicacion,
            grupos: objeto.grupos,
        };
        const dialogRef = this.data.open(RegistrarPersonaComponent, {
            data: datos,
        });
        dialogRef.afterClosed().subscribe(r => {
            this.getEquipo();
        });
    }

    private updateState(): void {
        this.state = {
            ...this.saveStateService.getState(),
            segundoPaso: this.state.segundoPaso
        };
        this.saveStateService.setState(this.state);
    }
}
