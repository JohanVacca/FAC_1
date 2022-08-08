import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {
    Actividad,
    ObjetivoEspecifico,
    StateInterface,
    SubActividad
} from '../../../../../../../shared/services/saveStateService/StateInterface';
import {SaveStateService} from '../../../../../../../shared/services/saveStateService/save-state.service';

@Component({
    selector: 'app-agregar-actividad',
    templateUrl: './agregar-actividad.component.html',
    styleUrls: ['./agregar-actividad.component.scss']
})
export class AgregarActividadComponent implements OnInit {

    public registroCronograma: FormGroup;
    public actividad: Actividad;
    public Convocatoria: string;
    public AgSub: SubActividad[] = [];
    public agregoSub = false;
    public editar = false;
    public nombreActEdit;
    public Prede;
    public nombreSubEdit;
    public ValFechas;
    public siEditoF = false;
    public PredecesoraACT = [];
    public objetivosEspecificos: ObjetivoEspecifico[] = [];
    public objetivo: string;

    private state: StateInterface;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: AgregarActividadData,
        public dialogRef: MatDialogRef<AgregarActividadComponent>,
        public form: FormBuilder,
        private saveStateService: SaveStateService,
        private rutaActiva: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.initializeData();
        this.editar = this.data.SeEstaEditando;
        if (this.editar) {
            this.getAll();
        } else {
            this.cargarPreDec();
        }
        this.siEditoF = false;
        this.builder();
        this.agregoSub = false;
    }


    cargarPreDec(): void {
        console.log('this.state carga :: ', this.state);
        const cronograma: Actividad[] = this.state.tercerPaso.actividades;
        const predecesoraAux = [];
        const PreBasic = {
            id: 1,
            name: 'No Tiene'
        };
        predecesoraAux.push(PreBasic);
        if (cronograma) {
            cronograma.forEach(element => {
                const Prenew = {
                    id: element.idUnicoTare,
                    name: element.nombreAct
                };
                predecesoraAux.push(Prenew);
            });
        }
        this.PredecesoraACT = predecesoraAux;
    }

    getAll(): void {
        const cronograma: Actividad[] = this.state.tercerPaso.actividades;
        const predecesoraAux = [];
        const PreBasic = {
            id: 1,
            name: 'No Tiene'
        };
        predecesoraAux.push(PreBasic);
        cronograma.forEach(element => {
            if (element.idUnicoTare === this.data.Actividad) {
                this.AgSub = element.subActividad;
                this.nombreActEdit = element.nombreAct;
                this.Prede = element.predecesora;
            } else {
                const Prenew = {
                    id: element.idUnicoTare,
                    name: element.nombreAct
                };
                predecesoraAux.push(Prenew);
            }
        });
        this.PredecesoraACT = predecesoraAux;
    }

    builder(): void {
        if (!this.editar) {
            this.registroCronograma = this.form.group({
                nombreAct: new FormControl('', [Validators.required]),
                Predecesora: new FormControl('', [Validators.required]),
                objetivo: new FormControl('', [Validators.required]),
                nombreSub: new FormControl('', [Validators.required]),
                fechaInicio: new FormControl('', [Validators.required]),
                fechaFinal: new FormControl('', [Validators.required]),
            });
        } else {
            this.registroCronograma = this.form.group({
                nombreAct: new FormControl(this.nombreActEdit, [Validators.required]),
                Predecesora: new FormControl(this.Prede, [Validators.required]),
                objetivo: new FormControl(this.objetivo, [Validators.required]),
                nombreSub: new FormControl('', [Validators.required]),
                fechaInicio: new FormControl('', [Validators.required]),
                fechaFinal: new FormControl('', [Validators.required]),
            });
        }
    }

    AgregarSub(): void {
        const valores = this.registroCronograma.value;
        if (this.actividad != null) {
            this.AgSub = this.actividad.subActividad;
        }
        const subAct: SubActividad = {
            nombreSub: valores.nombreSub,
            fechaInicio: valores.fechaInicio,
            fechaFinal: valores.fechaFinal
        };
        if (valores.fechaInicio > valores.fechaFinal) {
            this.ValFechas = true;
        } else {
            this.AgSub.push(subAct);
            this.registroCronograma = this.form.group({
                nombreAct: new FormControl(valores.nombreAct, [Validators.required]),
                nombreSub: new FormControl('', [Validators.required]),
                Predecesora: new FormControl(valores.Predecesora, [Validators.required]),
                objetivo: new FormControl(valores.objetivo, [Validators.required]),
                fechaInicio: new FormControl('', [Validators.required]),
                fechaFinal: new FormControl('', [Validators.required]),
            });
            this.agregoSub = true;
        }
    }

    obSubEdit(): void {
        const valores = this.registroCronograma.value;
        const cronograma: Actividad[] = JSON.parse(localStorage.getItem('cronograma'));
        const cronogramaNew: Actividad[] = [];
        cronograma.forEach(element => {
            if (element.idUnicoTare === this.data.Actividad) {
                element.nombreAct = valores.nombreAct;
                element.predecesora = valores.Predecesora;
                element.objetivo = valores.objetivo;
                element.subActividad = this.AgSub;
            }
            cronogramaNew.push(element);
        });
        let aux = null;
        this.AgSub.forEach(element => {
            if (aux == null) {
                aux = element.fechaFinal;
            } else {
                if (aux < element.fechaFinal) {
                    aux = element.fechaFinal;
                }
            }
        });
        const auxOb = {
            id: this.data.Actividad,
            dateFinal: aux,
            valor: this.siEditoF
        };
        this.dialogRef.close(auxOb);
        localStorage.setItem('cronograma', JSON.stringify(cronogramaNew));
    }

    editarSub(subAct): void {
        const valores = this.registroCronograma.value;
        this.siEditoF = true;
        this.AgSub.forEach(element => {
            if (element === subAct) {
                this.eliminarSub(subAct);
                this.registroCronograma = this.form.group({
                    nombreAct: new FormControl(valores.nombreAct, [Validators.required]),
                    nombreSub: new FormControl(subAct.nombreSub, [Validators.required]),
                    Predecesora: new FormControl(valores.Predecesora, [Validators.required]),
                    fechaInicio: new FormControl(subAct.fechaInicio, [Validators.required]),
                    fechaFinal: new FormControl(subAct.fechaFinal, [Validators.required]),
                });
            }
        });

    }

    CloseAlert(): void {
        this.ValFechas = false;
    }

    eliminarSub(subAct): void {
        const AgSubNew: SubActividad[] = [];
        this.AgSub.forEach(element => {
            if (element !== subAct) {
                AgSubNew.push(element);
            }
        });
        this.AgSub = AgSubNew;
    }

    public saveCronograma(): void {
        const valores = this.registroCronograma.value;
        const cronograma: Actividad[] = this.state.tercerPaso.actividades ? this.state.tercerPaso.actividades : [];
        const cronocramaObj: Actividad = {
            idUnicoTare: Math.round(Math.random() * 10000000),
            nombreAct: valores.nombreAct,
            predecesora: valores.Predecesora,
            objetivo: valores.objetivo,
            subActividad: this.AgSub
        };
        cronograma.push(cronocramaObj);
        this.state.tercerPaso.actividades = cronograma;
        this.updateState();
    }

    private initializeData(): void {
        console.log('ini!');
        this.state = this.saveStateService.getState();
        if (this.state?.cuartoPaso?.objetivo?.objetivosEspecificos) {
            this.objetivosEspecificos = this.state.cuartoPaso.objetivo.objetivosEspecificos;
        }
        if (!this.state?.tercerPaso) {
            this.state.tercerPaso = {};
        }
    }

    private updateState(): void {
        this.state = {
            ...this.saveStateService.getState(),
            tercerPaso: this.state.tercerPaso
        };
        this.saveStateService.setState(this.state);
    }
}


export interface AgregarActividadData {
    idConvocatoria: string;
    SeEstaEditando?: boolean;
    Actividad?: number;
}

