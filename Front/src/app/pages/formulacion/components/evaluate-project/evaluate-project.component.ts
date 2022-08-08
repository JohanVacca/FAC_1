import {Component, Inject, OnInit} from '@angular/core';
import {ProjectService} from '../../../../shared/services/Proyect/project.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmDialogComponent} from "../../../admin/Dialog/confirm-dialog/confirm-dialog.component";
import {Calificaciones, Proyect} from "../../../../shared/models/project.model";
import {AuthStorageService} from "../../../../@core/services";
import {finalize} from "rxjs/operators";

@Component({
    selector: 'app-evaluate-project',
    templateUrl: './evaluate-project.component.html',
    styleUrls: ['./evaluate-project.component.scss']
})

export class EvaluateProjectComponent implements OnInit {

    public isScored = true;
    public evaluacion: FormGroup;

    public Rvlrequipo = 0;
    public RvlrobjGeneral = 0;
    public RvlrobjEspecifico = 0;
    public Rvlrresumen = 0;
    public RvlrpalabrasClaves = 0;
    public Rvlrmarco = 0;
    public Rvlrestado = 0;
    public Rvlrproyecto = 0;
    public Rvlrunidadependencia = 0;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: EvaluateProjectData,
        private projectService: ProjectService,
        private authStorageService: AuthStorageService,
        private dialog: MatDialog,
        private form: FormBuilder,
        private dialogRef: MatDialogRef<EvaluateProjectComponent>
    ) {
    }

    ngOnInit(): void {
        this.builder();
        this.getDataInformation();
    }

    public closeModal(): void {
        this.dialogRef.close(false);
    }

    public evaluate(): void {
        const {projectId} = this.data;
        const userId = this.authStorageService.getUserId();
        const encabezado = `Terminar Evaluacion`;
        const descripcion = `¿Se encuentra seguro de Termianr la Evaluacion?`;

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            ariaLabel: encabezado,
            role: 'alertdialog',
            autoFocus: false,
            data: {icono: 'info', severidad: 'dialog-info', encabezado, descripcion}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'true') {
                try {
                    const Valores = this.evaluacion.value;
                    const score: any = [];
                    let count = 1;
                    let suma = Number(Valores.vlrproyecto) + Number(Valores.vlrunidadependencia) +
                        Number(Valores.vlrequipo) + Number(Valores.vlrobjGeneral) +
                        Number(Valores.vlrobjEspecifico) + Number(Valores.vlrresumen) +
                        Number(Valores.vlrpalabrasClaves) + Number(Valores.vlrmarco) +
                        Number(Valores.vlrestado);

                    const calificaciones: Calificaciones = {
                        idEv: userId,
                        Evaluado: true,
                        ValorParcial: suma,
                        Valores
                    };

                    this.projectService.getById(projectId).subscribe(response => {
                        const {Proyecto: project} = response;
                        project.calificaciones.forEach(element => {
                            suma = suma + element.ValorParcial;
                            if (element.idEv._id !== userId) {
                                score.push(element);
                            }
                            count = count + 1;
                        });
                        project.ValorTotal = Math.floor(suma / count);
                        score.push(calificaciones);
                        project.calificaciones = score;
                        project.evaluadorId = userId;
                        this.projectService.update(projectId, project).subscribe(r => {
                        });
                        this.dialogRef.close(true);
                    });
                } catch (error) {
                }
            } else {
            }
        });
    }

    private builder(): void {
        this.evaluacion = this.form.group({
            vlrproyecto: new FormControl(this.Rvlrproyecto, [Validators.max(20), Validators.min(0)]),
            vlrunidadependencia: new FormControl(this.Rvlrunidadependencia, [Validators.max(15), Validators.min(0)]),
            vlrequipo: new FormControl(this.Rvlrequipo, [Validators.max(5), Validators.min(0)]),
            vlrobjGeneral: new FormControl(this.RvlrobjGeneral, [Validators.max(5), Validators.min(0)]),
            vlrobjEspecifico: new FormControl(this.RvlrobjEspecifico, [Validators.max(8), Validators.min(0)]),
            vlrresumen: new FormControl(this.Rvlrresumen, [Validators.max(7), Validators.min(0)]),
            vlrpalabrasClaves: new FormControl(this.RvlrpalabrasClaves, [Validators.max(15), Validators.min(1)]),
            vlrmarco: new FormControl(this.Rvlrmarco, [Validators.max(5), Validators.min(1)]),
            vlrestado: new FormControl(this.Rvlrestado, [Validators.max(20), Validators.min(0)]),
        });

    }

    private getDataInformation(): void {
        this.projectService.getById(this.data.projectId)
            .subscribe(data => {
                this.isScored = data.Proyecto.calificaciones.length > 0;
                if (this.isScored) {
                    const {vlrequipo, vlrestado, vlrmarco, vlrobjEspecifico, vlrobjGeneral, vlrpalabrasClaves,
                        vlrproyecto, vlrresumen, vlrunidadependencia} = data.Proyecto.calificaciones[0].Valores;
                    this.Rvlrproyecto = vlrproyecto;
                    this.Rvlrunidadependencia = vlrunidadependencia;
                    this.Rvlrequipo = vlrequipo;
                    this.RvlrobjGeneral = vlrobjGeneral;
                    this.RvlrobjEspecifico = vlrobjEspecifico;
                    this.Rvlrresumen = vlrresumen;
                    this.RvlrpalabrasClaves = vlrpalabrasClaves;
                    this.Rvlrmarco = vlrmarco;
                    this.Rvlrestado = vlrestado;
                }
            });
    }
}

export interface EvaluateProjectData {
    projectId: string;
}
