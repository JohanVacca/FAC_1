import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ProjectService} from 'src/app/shared/services/Proyect/project.service';
import {
    VistaFormulacionComponent,
} from '../../../formulacion/components/vista-formulacion/vista-formulacion.component';
import {AuthStorageService} from '../../../../@core/services/storage/auth-storage/auth-storage.service';
import {
    ConfirmDialogComponent,
} from '../../../admin/Dialog/confirm-dialog/confirm-dialog.component';
import {SucessDialogComponent} from '../../../admin/Dialog/sucess-dialog/sucess-dialog.component';
import {VerFormulariosComponent} from './ver-formularios/ver-formularios.component';
import {EvaluateProjectComponent} from '../../../formulacion/components/evaluate-project/evaluate-project.component';
import {finalize} from 'rxjs/operators';
import {SaveStateService} from '../../../../shared/services/saveStateService/save-state.service';

@Component({
    selector: 'app-vista-proyectos',
    templateUrl: './vista-proyectos.component.html',
    styleUrls: ['./vista-proyectos.component.scss']
})
export class VistaProyectosComponent implements OnInit {
    public Rol;
    public Bloqueo;
    public loading = false;
    public displayedColumns: string[] = ['Titulo', 'Puntaje', 'HabilitarSeg', 'HabilitarEdicion', 'acciones'];
    public dataSource;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: VistaProyectosData,
        private projectService: ProjectService,
        private router: Router,
        private authStorageService: AuthStorageService,
        public dialogRef: MatDialogRef<VistaProyectosComponent>,
        public dialog: MatDialog,
        public saveStateService: SaveStateService
    ) {
    }

    ngOnInit(): void {
        this.getAll(this.data.idC);
        this.Rol = this.tipoDeEvaluacion();
    }

    public editProject(e, convocatoriaId): void {
        this.loading = true;
        this.projectService.getById(e)
            .subscribe(response => {
                const {Proyecto: project} = response;
                if (project.ProyectoBloqueado) {
                    this.router.navigate([`pages/formulacion/formular/${convocatoriaId}`]);
                    this.dialogRef.close(true);
                } else {
                    this.loading = false;
                    this.Bloqueo = true;
                }
            });
    }

    public closeAlert(): void {
        this.Bloqueo = false;
    }

    private tipoDeEvaluacion(): boolean {
        const role = localStorage.getItem('Role');
        if (role === 'Investigador') {
            this.displayedColumns = ['Titulo', 'Puntaje', 'acciones'];
            return true;
        } else {
            return false;
        }
    }

    public delete(e): void {
        this.projectService.delete(e)
            .pipe(finalize(() => this.getAll(this.data.idC)))
            .subscribe(() => {});
    }

    private getAll(id): void {
        const role = localStorage.getItem('Role');
        const userId = this.authStorageService.getUserId();
        this.projectService.getIdConv(id)
            .subscribe(response => {
                const {Proyectos: projects} = response;
                if (role === 'Investigador') {
                    this.investigadorValidation(projects, userId);
                    return;
                }
                if (role === 'Evaluador') {
                    this.evaluadorValidation(projects, userId);
                    return;
                }
                this.dataSource = projects;
            });
    }

    private evaluadorValidation(projects, userId): void {
        this.dataSource = projects.filter(element => (element.evaluadorId === userId || !element.evaluadorId));
    }

    private investigadorValidation(projects, userId): void {
        this.dataSource = projects.filter(element => element.UserId._id === userId);
    }


    public verForMu(IdFor): void {
        this.dialog.open(VerFormulariosComponent, {data: {idForm: IdFor}});
    }

    public habilitarSeguimiento(element, isChecked): void {
        const {_id: id, Seguimiento: status} = element;
        element.Seguimiento = isChecked;
        const encabezado = status ? 'Desactivar el Seguimiento' : 'Activar el Seguimiento';
        const descripcion = status ? '¿Se encuentra seguro de Desactivar el Seguimiento?' : '¿Se encuentra seguro de Activar el Seguimiento?';
        const state = status;

        this.dialog.open(ConfirmDialogComponent, {
            ariaLabel: `${encabezado}  `,
            role: 'alertdialog',
            autoFocus: false,
            data: {icono: 'info', severidad: 'dialog-info', encabezado, descripcion}

        }).afterClosed().subscribe(result => {
            if (result === 'true') {
                try {
                    this.projectService.getById(id)
                        .pipe(finalize((() => this.showModalSeguimiento(encabezado))))
                        .subscribe(response => {
                            const {Proyecto: project} = response;
                            project.Seguimiento = state;
                            this.projectService.update(id, project).subscribe();
                        });
                } catch (error) {
                }
            } else {
                element.Seguimiento = !isChecked;
            }
        });

    }

    private showModalSeguimiento(encabezado): void {
        this.dialog.open(SucessDialogComponent, {
            ariaLabel: `${encabezado}  Satisfactoriamente`,
            role: 'alertdialog',
            autoFocus: false,
            data: {
                icono: 'done',
                severidad: 'dialog-sucess',
                encabezado: `${encabezado}`,
                descripcion: `El Proceso para ${encabezado}  se ha completado Satisfactoriamente`

            }
        }).afterClosed().subscribe(() => {});
    }

    public cerrardialog(): void {
        this.dialogRef.close(true);
    }

    public activateEditionProject(element, value): void {
        const {_id: id, ProyectoBloqueado: status} = element;
        element.ProyectoBloqueado = !value;
        const encabezado = status ? 'Activar Edicion' : 'Desactivar Edicion';
        const descripcion = status ? '¿Se encuentra seguro de Activar la Edicion?' : '¿Se encuentra seguro de Desactivar la Edicion?';
        this.dialog.open(ConfirmDialogComponent, {
            ariaLabel: `${encabezado}  `,
            role: 'alertdialog',
            autoFocus: false,
            data: {icono: 'info', severidad: 'dialog-info', encabezado, descripcion}

        }).afterClosed().subscribe(result => {
            if ((result === 'true')) {
                this.activateProject(id, !status, encabezado, element);
            } else {
                element.ProyectoBloqueado = status;
            }
        });
    }

    private activateProject(id: string, state: boolean, encabezado: string, element): void {
        try {
            this.projectService.getById(id)
                .subscribe(response => {
                    const {Proyecto: project} = response;
                    project.ProyectoBloqueado = state;
                    const dialogRef = this.dialog.open(SucessDialogComponent, {
                        ariaLabel: `${encabezado}  Satisfactoriamente`,
                        role: 'alertdialog',
                        autoFocus: false,
                        data: {
                            icono: 'done',
                            severidad: 'dialog-sucess',
                            encabezado: `${encabezado}`,
                            descripcion: `El Proceso para ${encabezado}  se ha completado Satisfactoriamente`

                        }
                    });
                    dialogRef.afterClosed().subscribe(() => {
                        this.updateProject(id, project);
                    });
                });
        } catch (error) {
            console.error('Error modificando proyecto => ', error);
        }
    }

    private updateProject(id, project): void {
        this.projectService.update(id, project)
            .subscribe(() => {});
    }

    public showProjectSummary(idProyecto, evaluar): void {
        let valor = [];
        let Evaluado;
        this.projectService.getById(idProyecto)
            .subscribe(response => {
                response.Proyecto.calificaciones.forEach(element => {
                    if (element.idEv._id === this.authStorageService.getUserId()) {
                        valor = element.Valores;
                        Evaluado = element.Evaluado;
                    }
                });
                this.dialog.open(VistaFormulacionComponent, {
                    data: {idProyecto, evaluar, valor, Evaluado}
                }).afterClosed().subscribe(() => {
                    this.getAll(this.data.idC);
                    this.Rol = this.tipoDeEvaluacion();
                });
            });
    }

    public evaluateProject(projectId: string): void {
        this.dialog.open(EvaluateProjectComponent, {
            data: {projectId}
        }).afterClosed().subscribe(() => {});
    }
}


export interface VistaProyectosData {
    idC: string;
}
