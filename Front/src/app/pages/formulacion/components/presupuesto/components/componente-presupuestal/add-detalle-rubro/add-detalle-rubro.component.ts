import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TablaHonorariosComponent} from '../tabla-honorarios/tabla-honorarios.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TablaHonoraiosService} from 'src/app/@core/services/tabla-honorarios/tabla-honoraios.service';
import {SaveStateService} from '../../../../../../../shared/services/saveStateService/save-state.service';
import {
    Entidad,
    Investigador,
    PersonalCientifico,
    StateInterface
} from '../../../../../../../shared/services/saveStateService/StateInterface';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-add-detalle-rubro',
    templateUrl: './add-detalle-rubro.component.html',
    styleUrls: ['./add-detalle-rubro.component.scss']
})
export class AddDetalleRubroComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: AddDetalleRubroData,
        public dialog: MatDialog,
        private form: FormBuilder,
        private tablaHonorariosService: TablaHonoraiosService,
        private saveStateService: SaveStateService
    ) {
    }

    public Perfil = [];
    public maxAmount;
    public showMaxAmount = false;
    public aux = [];
    public AddDettalle: FormGroup;
    public sisInfo;
    public sisNum;
    public esPersonalCientifico = false;
    public valButton;
    public dataSource = [];
    public displayedColumns: string[] = ['Institucion', 'Efectivo', 'Especie'];
    public Complet = false;
    public PerfilDelInvestigador = ' ';
    public tipoDeRubro = ' ';
    public entidad = ' ';
    public InvestigadorSeleccionado = ' ';
    public Formacion = ' ';
    public Experiencia = ' ';
    public NombreDelInvestigador = ' ';
    public RolDelInvestigador = ' ';
    public HorasSemanales = 0;
    public DuracionEnMeses = 0;
    public Descripcion = ' ';
    public Justificacion = ' ';
    public honorarios = [];
    public numero;
    public topeMaximoPorMes;
    public topeMaximoPorDia;
    public topeMaximoPorHora;
    public topeMaximoPorSemana;
    public calculoSemana;
    public calculoMes;
    public costoTotal;
    public HorasSemanalesForm;
    public isCreate = true;
    public cantidad = 0;
    public valorUnitario = 0;
    public monto = 0;
    public tiposDeRubro = ['Efectivo', 'Especie'];
    public entidades: Entidad[] = [];

    private state: StateInterface;
    private investigadores: Investigador[];
    private investigadorSeleccionado: Investigador;

    ngOnInit(): void {
        this.valButton = this.data.Val;
        this.sisInfo = this.data.desc;
        this.sisNum = this.data.cons;
        this.valid();
        this.initializeData();
        this.DataS();
        this.numeroparalasuma();
    }

    public verTabla(): void {
        this.dialog.open(TablaHonorariosComponent, {});
    }

    private numeroparalasuma(): void {
        const numero = this.dataSource.length;
        for (let i; i < numero; i++) {
            this.numero = i;
        }
    }

    private DataS(): void {
        this.tablaHonorariosService.getall().subscribe(r => {
            this.Perfil = r['honorarios'];
        });
    }

    private valid(): void {
        this.esPersonalCientifico = this.data.desc.toLowerCase() === 'personal cientifico'
            || this.data.desc.toLowerCase() === 'personal científico';
    }

    public guardarOtro(): void {
        const otroRubro: PersonalCientifico = this.AddDettalle.value;
        otroRubro.EntidadesCostos = this.monto;
        this.state.tercerPaso.componentePresupuestal.personalCientifico.push(otroRubro);
        this.updateState();
    }

    public guardarRubro(): void {
        const personalCientifico: PersonalCientifico = this.AddDettalle.value;
        personalCientifico.EntidadesCostos = this.costoTotal;
        this.state.tercerPaso.componentePresupuestal.personalCientifico.push(personalCientifico);
        this.updateState();
    }

    calculateAmountWithUnitValue(valorUnitario: number): void {
        this.valorUnitario = valorUnitario;
        this.monto = this.cantidad * this.valorUnitario;
    }

    calculateAmountWithUnitCount(cantidad: number): void {
        this.cantidad = cantidad;
        this.monto = this.cantidad * this.valorUnitario;
    }

    private validateAllFields(): void {
        const {
            HorasSemanales,
            DuracionEnMeses,
            PerfilDelInvestigador,
            tipoDeRubro,
            entidad
        } = this.AddDettalle.controls;
        if (HorasSemanales.value && DuracionEnMeses.value && PerfilDelInvestigador.value) {
            this.HorasSemanalesForm = HorasSemanales.value;
            this.DuracionEnMeses = DuracionEnMeses.value;
            this.tipoDeRubro = tipoDeRubro.value;
            this.entidad = entidad.value;
            this.topeMaximoPorMes = this.honorarios
                .find(honorario => honorario.honorarioId.toString() === PerfilDelInvestigador.value.honorarioId.toString()).topeMaximo;
            this.topeMaximoPorDia = (Number(this.topeMaximoPorMes) / 20).toFixed(2);
            this.topeMaximoPorHora = (Number(this.topeMaximoPorDia) / 8).toFixed(2);
            this.topeMaximoPorSemana = Number(this.topeMaximoPorDia) * 5;
            this.calculoSemana = Number(this.topeMaximoPorHora) * Number(HorasSemanales.value);
            this.calculoMes = Number(this.calculoSemana) * 4;
            this.costoTotal = Number(this.calculoMes) * Number(DuracionEnMeses.value);
            this.showMaxAmount = true;
            this.updateState();

        } else {
            this.showMaxAmount = false;
        }
    }

    private initializeData(): void {
        const state = this.saveStateService.getState();
        if (state?.tercerPaso) {
            this.state = state;
            this.entidades = state.tercerPaso.componentePresupuestal.entidades;
        } else {
            this.state = {
                ...state,
                tercerPaso: {
                    componentePresupuestal: {
                        rubros: [],
                        entidades: [],
                        personalCientifico: []
                    }
                }
            };
        }
        if (this.state.segundoPaso) {
            const selectedInvestigadores = this.state?.tercerPaso?.componentePresupuestal?.personalCientifico;
            if (selectedInvestigadores.length > 0) {
                const idInvestigadores = [];
                selectedInvestigadores.map(inv => idInvestigadores.push(inv.InvestigadorSeleccionado.identificacion));
                this.investigadores =
                    this.state.segundoPaso.equipoDeInvestigacion.filter(inv => !idInvestigadores.includes(inv.identificacion));
            } else {
                this.investigadores = this.state.segundoPaso.equipoDeInvestigacion;
            }
        }
        this.builder();
        this.setData();
    }

    private builder(): void {
        if (this.esPersonalCientifico) {
            this.AddDettalle = this.form.group({
                idRubro: this.data.id,
                PerfilDelInvestigador: new FormControl(this.PerfilDelInvestigador),
                InvestigadorSeleccionado: new FormControl(this.InvestigadorSeleccionado),
                Formacion: new FormControl(this.Formacion, [Validators.required]),
                Experiencia: new FormControl(this.Experiencia, [Validators.required]),
                NombreDelInvestigador: new FormControl(this.NombreDelInvestigador, [Validators.required]),
                RolDelInvestigador: new FormControl(this.RolDelInvestigador, [Validators.required]),
                HorasSemanales: new FormControl(this.HorasSemanales, [Validators.required]),
                DuracionEnMeses: new FormControl(this.DuracionEnMeses, [Validators.required]),
                tipoDeRubro: new FormControl(this.tipoDeRubro, [Validators.required]),
                entidad: new FormControl(this.entidad, [Validators.required]),
                Descripcion: new FormControl(this.Descripcion, [Validators.required]),
                Justificacion: new FormControl(this.Justificacion, [Validators.required]),
                EntidadesCostos: 0,
                NombreRubro: this.data.desc,
                monto: 0,
                cantidad: 0,
                valorUnitario: 0,
            });
        } else {
            this.AddDettalle = this.form.group({
                idRubro: this.data.id,
                PerfilDelInvestigador: ' ',
                InvestigadorSeleccionado: ' ',
                Formacion: ' ',
                Experiencia: ' ',
                NombreDelInvestigador: ' ',
                RolDelInvestigador: ' ',
                tipoDeRubro: ' ',
                entidad: ' ',
                HorasSemanales: 0,
                DuracionEnMeses: 0,
                Descripcion: new FormControl(this.Descripcion, [Validators.required]),
                Justificacion: new FormControl(this.Justificacion, [Validators.required]),
                EntidadesCostos: 0,
                NombreRubro: this.data.desc,
                monto: 0,
                cantidad: 0,
                valorUnitario: 0,
            });
        }
    }

    private setData(): void {
        if (this.state.primerPaso) {
            this.AddDettalle.controls['DuracionEnMeses'].setValue(this.state.primerPaso.duracion);
        }
    }

    public seleccionarInvestigador(investigador): void {
        this.investigadorSeleccionado = investigador;
        this.NombreDelInvestigador = `${investigador.nombres} ${investigador.apellido}`;
        this.HorasSemanales = investigador.dedicacion;
        this.AddDettalle.controls['HorasSemanales'].setValue(investigador.dedicacion);
        this.AddDettalle.controls['RolDelInvestigador'].setValue(investigador.rol);
        this.AddDettalle.controls['NombreDelInvestigador'].setValue(this.NombreDelInvestigador);
        this.validateAllFields();
    }

    public cargar(perfil): void {
        const {honorarioId} = perfil;
        this.tablaHonorariosService.getall()
            .pipe(finalize(() => this.validateAllFields()))
            .subscribe(response => {
                this.honorarios = response['honorarios'];
                response['honorarios'].forEach(element => {
                    if (element.honorarioId === honorarioId) {
                        this.Formacion = element.formacion;
                        this.RolDelInvestigador = element.formacion;
                        this.Experiencia = element.experiencia;
                        this.AddDettalle.controls['Experiencia'].setValue(element.experiencia);
                        this.AddDettalle.controls['Formacion'].setValue(element.formacion);
                        this.AddDettalle.controls['RolDelInvestigador'].setValue(element.formacion);
                    }
                });
            });
    }

    public seleccionarTipoDeRubro(tipo): void {
        this.tipoDeRubro = tipo;
    }

    public seleccionarEntidad(entidad): void {
        this.entidad = entidad;
    }

    private updateState(): void {
        this.state = {
            ...this.saveStateService.getState(),
            tercerPaso: {
                ...this.state.tercerPaso,
            }
        };
        this.saveStateService.setState(this.state);
    }
}

export interface AddDetalleRubroData {
    id: string;
    desc: string;
    cons: number;
    Val: boolean;
}
