import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InvEndorsersService} from '../../../../shared/services/inv-endorsers/inv-endorsers.service';
import {InvestigationProgramService} from '../../../../shared/services/investigation-program/investigation-program.service';
import {InvestigationSubProgramService} from '../../../../shared/services/investigation-sub-program/investigation-sub-program.service';
import {InvestigationTypesService} from '../../../../shared/services/investigation-types/investigation-types.service';
import {InvestigationLinesService} from '../../../../shared/services/investigation-lines/investigation-lines.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../../@core/services/users/users.service';
import {ActivatedRoute} from '@angular/router';
import {CommonSimpleModel} from '../../../../shared/models/common-simple.model';
import {UserModel} from '../../../../shared/models/user.model';
import {finalize, map, startWith} from 'rxjs/operators';
import {SaveStateService} from '../../../../shared/services/saveStateService/save-state.service';
import {
    CentroDeInvestigacion,
    PrimerPaso,
    StateInterface, Unidades
} from '../../../../shared/services/saveStateService/StateInterface';
import {InvCenterService} from '../../../../shared/services/inv-center2/inv-center.service';
import {UnidadService} from '../../../../shared/services/unidad-service/unidad.service';
import { MatStepper } from '@angular/material/stepper';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-informacion-general',
    templateUrl: './informacion-general.component.html',
    styleUrls: ['../formular-proyecto/formular-proyecto.component.scss']
})
export class InformacionGeneralComponent implements OnInit {
    @Input() stepper: MatStepper;
    public filteredOptions: Observable<string[]>;
    public myControl = new FormControl();

    constructor(
        private invEndorsersService: InvEndorsersService,
        private invCenterService: InvCenterService,
        private unidadService: UnidadService,
        private investigationLinesService: InvestigationLinesService,
        private investigationProgramService: InvestigationProgramService,
        private investigationSubProgramService: InvestigationSubProgramService,
        private investigationTypesService: InvestigationTypesService,
        private rutaActiva: ActivatedRoute,
        private usersService: UsersService,
        private saveStateService: SaveStateService,
        private form: FormBuilder,
    ) {
    }

    public LinesIns: CommonSimpleModel[] = [];
    public invCenters: CentroDeInvestigacion[] = [];
    public unidades: Unidades[] = [];
    public ProgamIns: CommonSimpleModel[] = [];
    public typeIns: CommonSimpleModel[] = [];
    public ProgamSubIns: CommonSimpleModel[] = [];
    public EndorIns: CommonSimpleModel[] = [];
    public ComandIns: UserModel[] = [];
    public validador = true;
    public UserIns = ' ';
    public Convocatoria: string;
    public iniciarProyecto: FormGroup;
    public hasErrorACTI = false;
    public messageErrorACTI = 'No se encuentra un usuario con el email ingresado';
    public isLoadingEmail = false;
    public isCentroDeInvestigacion = true;
    public gestorActiId;
    public comandanteId;

    private state: StateInterface; 

    @Output()
    textoCambiado: EventEmitter<string> = new EventEmitter<string>();

    public email = new FormControl('', [Validators.required, Validators.email]);

    ngOnInit(): void {
        this.initializeData();
        this.getAll();
        this.builder();
    }

    public getErrorMessage(): string {
        return !this.validador ? 'No es un email valido' : this.email.hasError('email') ? 'Not a valid email' : '';
    }

    private builder(): void {
        this.iniciarProyecto = this.form.group({
            nombreProyecto: new FormControl('', [Validators.required]),
            dependencia: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            telefonoGestor: new FormControl('', [Validators.required]),
            gestor: new FormControl('', [Validators.required]),
            comandante: new FormControl('', [Validators.required]),
            lugar: new FormControl('', [Validators.required]),
            duracion: new FormControl('', [Validators.required]),
            linea: new FormControl('', [Validators.required]),
            modelo: new FormControl('', [Validators.required]),
            programa: new FormControl('', [Validators.required]),
            subprograma: new FormControl('', [Validators.required]),
            avala: new FormControl('', [Validators.required]),
            centroDeInvestigacion: new FormControl(''),
            unidades: new FormControl(''),
        });
    }

    public seleccionarLinea(event): void {
        this.iniciarProyecto.controls.linea.setValue(event);
    }

    public guardar(): void {
        this.updateState();
    }

    public CambiaTexto(texto: string): void {
        this.textoCambiado.emit(texto);
    }

    public habilitarUnidad(value: boolean): void {
        console.log('value :: ', value);
        this.isCentroDeInvestigacion = value;
    }

    public getAll(): void {
        let cv = this.rutaActiva.snapshot.params;
        this.Convocatoria = cv.id;
        this.investigationProgramService.getIdConv(this.Convocatoria).subscribe(responseProgram => {
            this.ProgamIns = responseProgram;
        });
        this.investigationSubProgramService.getIdConv(this.Convocatoria).subscribe(responseSubProgram => {
            this.ProgamSubIns = responseSubProgram;
        });
        this.investigationTypesService.getIdConv(this.Convocatoria).subscribe(responseTypes => {
            this.typeIns = responseTypes;
        });
        this.investigationLinesService.getIdConv(this.Convocatoria).subscribe(responseLines => {
            this.LinesIns = responseLines;
            if (responseLines.length > 0) {
                this.LinesIns = responseLines.sort((a, b) => {
                    return a.descr < b.descr ? -1 : 1;
                });
            }
            this.initAutoComplete();
        });
        this.usersService.getAllCommanders().subscribe(responseCommand => {
            this.ComandIns = responseCommand;
        });
        this.invEndorsersService.getIdConv(this.Convocatoria).subscribe(responseEndors => {
            this.EndorIns = responseEndors;
        });
        this.invCenterService.getAll().subscribe(responseInvCenters => {
            // @ts-ignore
            this.invCenters = responseInvCenters.invCenters;
        });
        this.unidadService.getAll().subscribe(responseUnidades => {
            // @ts-ignore
            this.unidades = responseUnidades.unidades;
        });
    }

    private initAutoComplete(): void {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value)),
        );
    }

    private _filter(name: string): string[] {
        const filterValue = name.toLowerCase();
        const newArrayList = [];
        this.LinesIns.map(option => {
            if (option.descr.toLowerCase().includes(filterValue)) {
                newArrayList.push(option.descr.toLowerCase());
            }
        });
        return newArrayList;
    }

    public correo(e): void {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const correo = e.target.value.toLowerCase();
        if (regex.test(correo)) {
            this.isLoadingEmail = true;
            this.usersService.getUserCorreo(correo)
                .pipe(finalize(() => this.isLoadingEmail = false))
                .subscribe(response => {
                    if (response.length !== 0) {
                        const {profile, _id} = response[0];
                        this.UserIns = `${profile.names} ${profile.surname}`;
                        this.validador = true;
                        this.hasErrorACTI = false;
                        this.gestorActiId = _id;
                    } else {
                        this.email.setErrors({'incorrect': true});
                        this.hasErrorACTI = true;
                        this.validador = false;
                    }
                });
        } else {
            this.validador = false;
        }
    }

    private initializeData(): void {
        this.state = this.saveStateService.getState() ? this.saveStateService.getState() : {};
    }

    private updateState(): void {
        const {avala, centroDeInvestigacion, comandante, dependencia, duracion, email, gestor, linea, unidades,
            lugar, modelo, nombreProyecto, programa, subprograma, telefonoGestor} = this.iniciarProyecto.value;
        const primerPaso: PrimerPaso = {
            comandante,
            nombreProyecto,
            telefonoGestor,
            dependencia,
            email,
            gestor,
            lugar,
            duracion,
            linea,
            modelo,
            programa,
            subprograma,
            avala,
            centroDeInvestigacion: this.isCentroDeInvestigacion ? centroDeInvestigacion : unidades,
            gestorId: this.gestorActiId
        };
        this.state = {
            ...this.saveStateService.getState(),
            primerPaso
        };
        this.saveStateService.setState(this.state);
        this.stepper.next();
    }
}
