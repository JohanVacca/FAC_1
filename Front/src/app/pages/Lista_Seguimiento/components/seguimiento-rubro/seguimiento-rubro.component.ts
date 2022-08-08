import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AgregarDetallesRubros} from 'src/app/shared/models/project.model';
import {ProjectService} from 'src/app/shared/services/Proyect/project.service';
import {MatDialog} from '@angular/material/dialog';
import {AgregarPresupuestoComponent} from '../agregar-presupuesto/agregar-presupuesto.component';
import {SucessDialogComponent} from '../../../admin/Dialog/sucess-dialog/sucess-dialog.component';
import {ModalViewDocumentsRubroComponent} from '../modal-view-documents-rubro/modal-view-documents-rubro.component';

@Component({
    selector: 'app-seguimiento-rubro',
    templateUrl: './seguimiento-rubro.component.html',
    styleUrls: ['./seguimiento-rubro.component.scss']
})
export class SeguimientoRubroComponent implements OnInit {
    public listaDeRubros: AgregarDetallesRubros[];
    public displayedColumns: string[] = ['Rubros', 'PresupuestoAsignado', 'PresupuestoEjecutado', 'Cumplimiento'];
    public ACTIONS = 'Acciones';
    public RUBRO = 'Rubro';
    public PRESUPUESTO_ASIGNADO = 'Presupuesto asignado';
    public PRESUPUESTO_EJECUTADO = 'Presupuesto ejecutado';
    public CUMPLIMIENTO = 'Cumplimiento';
    public TIPO_DE_RUBRO = 'Tipo de rubro';
    public ADD_PRESUPUESTO = 'Agregar presupuesto ejecutado';
    public project;

    constructor(
        private rutaActiva: ActivatedRoute,
        private projectService: ProjectService,
        public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllRubros();
    }

    private getAllRubros(): void {
        const projectId = this.rutaActiva.snapshot.params.id;
        this.projectService.getById(projectId)
            .subscribe(response => {
                this.project = response;
                this.listaDeRubros = response.Proyecto.AgregarDetallesRubros;
            });
    }

    private updateRubro(presupuestoObject): void {
        const {id, presupuesto, factura} = presupuestoObject;
        const projectId = this.rutaActiva.snapshot.params.id;
        this.projectService.updateRubro(projectId, id, Number(presupuesto), factura)
            .subscribe(r => {
                this.dialog.open(SucessDialogComponent, {
                    ariaLabel: `Guardado el seguimiento de rubros Satisfactoriamente`,
                    role: 'alertdialog',
                    autoFocus: false,
                    data: {
                        icono: 'done',
                        severidad: 'dialog-sucess',
                        encabezado: `Seguimiento Guardado`,
                        descripcion: `Guardado el seguimiento de rubros Satisfactoriamente`
                    }
                }).afterClosed().subscribe(result => {
                    this.ngOnInit();
                });
            });
    }

    public calculateCumplimiento(assigned: number, rubro): string {
        const executed = this.getPresupuestoEjecutado(rubro);
        const total = executed * 100 / assigned;
        return `${total.toFixed(2)} %`;
    }

    public setPresupuesto(name: string, id: string, costoTotal: number, rubro): void {
        const maxLimit = costoTotal - this.getPresupuestoEjecutado(rubro);
        this.dialog.open(AgregarPresupuestoComponent, {data: {name, id, maxLimit}})
            .afterClosed()
            .subscribe(presupuestoResponse => {
                if (presupuestoResponse.presupuesto && presupuestoResponse.factura) {
                    this.updateRubro(presupuestoResponse);
                }
            });
    }

    public viewDocuments(rubroId: string): void {
        const selectedRubro = this.listaDeRubros.find(rubro => rubro._id === rubroId);
        if (!selectedRubro) {
            return;
        }

        this.dialog
            .open(ModalViewDocumentsRubroComponent, {data: {
                rubros: selectedRubro.listaRubros,
                name: selectedRubro.NombreRubro,
                projectId: this.rutaActiva.snapshot.params.id,
                rubroDetalleId: rubroId
            }})
            .afterClosed()
            .subscribe(() => {
                this.ngOnInit();
            });
    }

    public getPresupuestoEjecutado(rubro): number {
        return rubro.reduce((acc, actual) => {
            return acc + actual.rubro;
        }, 0);
    }
}
