import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvestigadorDashboard} from '../../shared/services/saveStateService/StateInterface';

@Component({
    selector: 'app-modal-investigador',
    templateUrl: './modal-investigador.component.html',
    styleUrls: ['./modal-investigador.component.scss']
})
export class ModalInvestigadorComponent implements OnInit {

    public centros = [];
    public TITLE = 'Informacion de investigador';
    public TOTAL_HOURS = 'Total de horas: ';
    public NAME = 'Nombre: ';
    public PROJECT = 'Proyecto';
    public DEDICATION = 'Dedicación: ';
    public CLOSE_MODAL = 'Cerrar';

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: InvestigadorDashboard,
        private dialogRef: MatDialogRef<ModalInvestigadorComponent>
    ) {
    }

    ngOnInit(): void {
        this.createCentrosArray();
    }

    private createCentrosArray(): void {
        Object.keys(this.data.centros).map(key => {
            this.centros.push({
                name: key,
                proyectos: this.data.centros[key]
            });
        });
    }

    public closeModal(): void {
        this.dialogRef.close();
    }

}
