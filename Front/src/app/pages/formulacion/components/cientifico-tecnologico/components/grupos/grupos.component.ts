import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RegistrarGrupoComponent} from './registrar-grupo/registrar-grupo.component';
import {RegistrarGrupoData} from './registrar-grupo/registrar-grupo.component';
import {ActivatedRoute, Params} from '@angular/router';
import {SaveStateService} from '../../../../../../shared/services/saveStateService/save-state.service';
import {Grupo, StateInterface} from '../../../../../../shared/services/saveStateService/StateInterface';


@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html',
    styleUrls: ['../../cientifico-tecnologico.component.scss']

})
export class GruposComponent implements OnInit {

    Convocatoria: string;
    displayedColumns: string[] = ['name', 'codigo', 'antiguedad', 'entidad', 'acciones'];
    dataSource = [];
    private state: StateInterface;

    constructor(
        public dialog: MatDialog,
        private rutaActiva: ActivatedRoute,
        private changeDetectorRefs: ChangeDetectorRef,
        private saveStateService: SaveStateService)
    {}

    ngOnInit(): void {
        this.initializeData();
    }

    private initializeData(): void {
        const state = this.saveStateService.getState();
        if (state?.segundoPaso) {
            this.state = state;
        } else {
            this.state = {
                ...state,
                segundoPaso: {
                    listaDeGrupos: [],
                    equipoDeInvestigacion: []
                }
            };
        }
    }

    registrarGrupo() {
        let cv = this.rutaActiva.snapshot.params;
        this.Convocatoria = cv.id;
        let datos: RegistrarGrupoData = {
            actualizar: false,
            idCon: this.Convocatoria
        };
        const dialogRef = this.dialog.open(RegistrarGrupoComponent, {
            data: datos
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result?.segundoPaso?.listaDeGrupos) {
                this.dataSource = [...result.segundoPaso.listaDeGrupos];
                this.state.segundoPaso.listaDeGrupos = this.dataSource;
                this.updateState();
            }
        });
    }

    updateGrupo(objeto) {
        let cv = this.rutaActiva.snapshot.params;
        this.Convocatoria = cv.id;
        let datos: RegistrarGrupoData = {
            actualizar: true,
            idCon: this.Convocatoria,
            nombreGrupo: objeto.nombreGrupo,
            codigoGrupo: objeto.codigo,
            categoria: objeto.categoria.descr,
            antiguedad: objeto.antiguedad,
            entidad: objeto.entidad,
        };
        const dialogRef = this.dialog.open(RegistrarGrupoComponent, {
            data: datos
        });
        this.dataSource = [];
        dialogRef.afterClosed().subscribe(result => {
            this.getGrupo();
        });
    }

    public deleteGrupo(codigo): void {
        this.state.segundoPaso.listaDeGrupos = this.state.segundoPaso.listaDeGrupos.filter(group => group.codigo !== codigo);
        this.dataSource = this.state.segundoPaso.listaDeGrupos;
        this.updateState();
    }

    getGrupo(): void {
        this.state = this.saveStateService.getState();
        this.dataSource = this.state.segundoPaso.listaDeGrupos;
        this.changeDetectorRefs.detectChanges();
    }

    private updateState(): void {
        this.state = {
            ...this.saveStateService.getState(),
            segundoPaso: this.state.segundoPaso
        };
        this.saveStateService.setState(this.state);
    }
}
