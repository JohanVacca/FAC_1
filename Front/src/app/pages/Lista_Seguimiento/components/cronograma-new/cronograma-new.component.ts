import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cronogramaService} from 'src/app/shared/services/cronograma/cronograma.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import {SucessDialogComponent} from '../../../admin/Dialog/sucess-dialog/sucess-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {finalize} from 'rxjs/operators';
import {ShowCalendarComponent} from '../show-calendar/show-calendar.component';
import {ProjectService} from '../../../../shared/services/Proyect/project.service';
import {Actividad} from '../../../../shared/services/saveStateService/StateInterface';


@Component({
    selector: 'app-cronograma-new',
    templateUrl: './cronograma-new.component.html',
    styleUrls: ['./cronograma-new.component.scss']
})
export class CronogramaNewComponent implements OnInit {
    public cronogramaCompleto;
    public cronograma: Actividad[];
    public cronogramaId: string;
    public seguimiento: FormGroup;
    public ACTIVITY = 'Actividad';
    public SUB_ACTIVITY = 'Sub Actividad';
    public START_DATE = 'Fecha de inicio';
    public PLANNING_DATE = 'Fecha planeada cumplimiento';
    public REAL_DATE = 'Fecha real cumplimiento';
    public GAP = 'Desfase';
    public ADVANCE = 'Avance estimado';
    public ACTIONS = 'Acciones';
    public NO_REAL_DATE = 'No se ha asignado fecha de cumplimiento';
    public TITLE_TABLE = 'Proyecto: ';
    public ADD_CRON = 'Agregar fecha de cumplimiento';
    public UPDATE_CRON = 'Actualizar fecha de cumplimiento';
    public DELETE_CRON = 'Eliminar fecha de cumplimiento';
    public PROJECT_NAME = '';

    constructor(
        private cronogramaService: cronogramaService,
        private rutaActiva: ActivatedRoute,
        private projectService: ProjectService,
        public form: FormBuilder,
        public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    private getAll(): void {
        const projectId = this.rutaActiva.snapshot.params.id;
        this.cronogramaService.getByProject(projectId)
            .pipe(finalize(() => this.getProject(projectId)))
            .subscribe(response => {
                this.cronograma = response.cronogramas.actividades;
                this.cronogramaId = response.cronogramas._id;
                this.cronogramaCompleto = response;
            });
    }

    private getProject(projectId): void {
        this.projectService.getById(projectId)
            .subscribe(project => {
                this.PROJECT_NAME = project.Proyecto.iniciarProyecto[0].nombreProyecto;
            });
    }

    public deleteRealFinalDate(activityId: string, subActivityId: string): void {
        const activity = this.cronograma.find(crono => crono._id === activityId);
        const subActivity = activity.subActividad.find(subActivityActual => subActivityActual._id === subActivityId);
        subActivity.fechaReal = null;
        this.cronogramaService.update(this.cronogramaId, this.cronogramaCompleto)
            .pipe(finalize(this.getAll))
            .subscribe((response) => {
                this.dialog.open(SucessDialogComponent, {
                    role: 'alertdialog',
                    autoFocus: false,
                    data: {
                        icono: 'done',
                        severidad: 'dialog-warning',
                        encabezado: `Seguimiento Actualizado`,
                        descripcion: `Fecha real de cumplimiento eliminada`
                    }
                }).afterClosed().subscribe(() => {
                    this.getAll();
                });
            });
    }

    public setRealFinalDate(name: string, activityId: string, id: string): void {
        this.dialog.open(ShowCalendarComponent, {data: {name}})
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.updateRealDate(id, activityId, result);
                }
            });
    }

    private updateRealDate(subActivityId: string, activityId: string, newDate: string): void {
        const activity = this.cronograma.find(crono => crono._id === activityId);
        const subActivity = activity.subActividad.find(subActivityActual => subActivityActual._id === subActivityId);
        subActivity.fechaReal = new Date(newDate);
        this.cronogramaService.update(this.cronogramaId, this.cronogramaCompleto)
            .subscribe(response => {
                this.dialog.open(SucessDialogComponent, {
                    role: 'alertdialog',
                    autoFocus: false,
                    data: {
                        icono: 'done',
                        severidad: 'dialog-sucess',
                        encabezado: `Seguimiento Actualizado`,
                        descripcion: `Fecha real de cumplimiento actualizada`
                    }
                }).afterClosed().subscribe(() => {
                    this.getAll();
                });
            });
    }

    public calculateGap(endDate: string, realDate: string): number {
        const end = new Date(endDate);
        const real = new Date(realDate);
        const differenceInTime = end.getTime() - real.getTime();
        return Math.ceil(differenceInTime / (1000 * 3600 * 24));
    }

    public calculateAdvance(firstDate: string, secondDate: string): number {
        const startDate = new Date(firstDate);
        const endDate = new Date(secondDate);
        const today = new Date();

        if (startDate > today) {
            return 0;
        }

        if (endDate < today) {
            return 100;
        }

        if (startDate < today && today < endDate) {
            const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
            const actualDay = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
            return Math.ceil((actualDay * 100) / totalDays);
        }
    }
}
