import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AgregarActividadComponent} from './agregar-actividad/agregar-actividad.component';
import {ActivatedRoute} from '@angular/router';
import {
    SucessDialogComponent,
} from '../../../../../admin/Dialog/sucess-dialog/sucess-dialog.component';
import {Actividad, StateInterface} from '../../../../../../shared/services/saveStateService/StateInterface';
import {SaveStateService} from '../../../../../../shared/services/saveStateService/save-state.service';

@Component({
    selector: 'app-cronograma',
    templateUrl: './cronograma.component.html',
    styleUrls: ['../../presupuesto.component.scss']
})
export class CronogramaComponent implements OnInit {

    public Convocatoria;
    public cronograma: Actividad[];
    public state: StateInterface;

    constructor(public dialogo: MatDialog, public rutaActiva: ActivatedRoute, private saveStateService: SaveStateService) {
    }


    ngOnInit(): void {
        const cv = this.rutaActiva.snapshot.params;
        this.Convocatoria = cv.id;
        this.cronograma = JSON.parse(localStorage.getItem('cronograma')) || [];
    }

    EditActividad(IdActividad): void {
        this.dialogo.open(AgregarActividadComponent, {
            data: {
                idConvocatoria: this.Convocatoria,
                SeEstaEditando: true,
                Actividad: IdActividad
            }
        }).afterClosed().subscribe(r => {
            if (r !== false && r !== undefined) {
                this.cronograma = JSON.parse(localStorage.getItem('cronograma'));
                let listPred = '';
                if (r.valor) {
                    this.cronograma.forEach(element => {
                        if (element.idUnicoTare == r.id) {
                            if (listPred === '') {
                                listPred = element.nombreAct;
                            } else {
                                listPred = listPred + ', ' + element.nombreAct;
                            }
                        }
                    });
                    this.dialogo.open(SucessDialogComponent, {
                        ariaLabel: ` Actualizar `,
                        role: 'alertdialog',
                        autoFocus: false,
                        data: {
                            icono: 'done',
                            severidad: 'dialog-sucess',
                            encabezado: 'Se edito la actividad',
                            descripcion: `estas tareas son sucesoras de la tarea actualizada por favor mirar si tienen conflictos ${listPred}`
                        }
                    });
                    listPred = '';
                }
            } else {
                console.log('proceso no finalizado');
            }
        });
    }

    Eliminar(idUnicoTare): void {
        const newCronograma: Actividad[] = [];
        this.cronograma.forEach(element => {
            if (element.idUnicoTare !== idUnicoTare) {
                newCronograma.push(element);
            }
        });
        this.cronograma = newCronograma;
        localStorage.setItem('cronograma', JSON.stringify(this.cronograma));
    }

    agregarActividad(): void {
        this.dialogo.open(AgregarActividadComponent, {
            data: {
                idConvocatoria: this.Convocatoria
            }
        }).afterClosed().subscribe(r => {
            if (r !== true) {
                console.log('proceso no finalizado');
            } else {
                this.cronograma = this.saveStateService.getState().tercerPaso.actividades;
                console.log(this.saveStateService.getState().tercerPaso.actividades);
            }
        });

    }
}
