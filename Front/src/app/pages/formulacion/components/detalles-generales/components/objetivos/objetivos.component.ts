import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {SaveStateService} from '../../../../../../shared/services/saveStateService/save-state.service';
import {StateInterface} from '../../../../../../shared/services/saveStateService/StateInterface';

@Component({
    selector: 'app-objetivos',
    templateUrl: './objetivos.component.html',
    styleUrls: ['../../detalles-generales.component.scss']
})
export class ObjetivosComponent implements OnInit {
    objetivoGeneral: string;
    objetivoEspecificos: FormGroup;
    displayedColumns: string[] = ['descripcion', 'acciones'];
    dataSource;

    private state: StateInterface;

    public showObjetivoGeneral = false;

    constructor(public obj: FormBuilder, private saveStateService: SaveStateService) {
    }

    ngOnInit(): void {
        this.initializeData();
        this.builder();
        this.getItem();
    }

    private initializeData(): void {
        const state = this.saveStateService.getState();
        if (state?.cuartoPaso) {
            this.state = state;
        } else {
            this.state = {
                ...state,
                cuartoPaso: {
                    objetivo: {
                        objetivosEspecificos: [],
                        objetivoGeneral: ''
                    }
                }
            };
        }
    }

    getItem(): void {
        this.objetivoGeneral = this.state.cuartoPaso.objetivo.objetivoGeneral;
        this.dataSource = [...this.state.cuartoPaso.objetivo.objetivosEspecificos];
        this.updateState();
    }

    builder(): void {
        this.objetivoEspecificos = this.obj.group({
            descr: new FormControl('', []),
        });
    }

    modificandoObjetivo(): void {
        this.showObjetivoGeneral = false;
    }

    agregarObjGnral(): void {
        this.state.cuartoPaso.objetivo.objetivoGeneral = this.objetivoGeneral;
        this.showObjetivoGeneral = Boolean(this.objetivoGeneral);
        this.updateState();
    }

    agregarObjEsp(): void {
        this.state.cuartoPaso.objetivo.objetivosEspecificos.push(this.objetivoEspecificos.value);
        this.objetivoEspecificos.controls.descr.setValue('');
        this.getItem();
    }

    deleteobj(obj): void {
        this.state.cuartoPaso.objetivo.objetivosEspecificos =
            this.state.cuartoPaso.objetivo.objetivosEspecificos.filter(objetivo => objetivo.descr !== obj.descr);
        this.getItem();
    }

    private updateState(): void {
        this.state = {
            ...this.saveStateService.getState(),
            cuartoPaso: this.state.cuartoPaso
        };
        this.saveStateService.setState(this.state);
    }
}

