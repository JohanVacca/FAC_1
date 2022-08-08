import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cronogramaService} from 'src/app/shared/services/cronograma/cronograma.service';
import {AgregarDetallesRubros, Proyect} from 'src/app/shared/models/project.model';
import {ProjectService} from 'src/app/shared/services/Proyect/project.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {SucessDialogComponent} from '../../../admin/Dialog/sucess-dialog/sucess-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {finalize} from 'rxjs/operators';
import {Actividad, Entidad} from '../../../../shared/services/saveStateService/StateInterface';
import {FirmaService} from '../../../../shared/services/firma/firma.service';

@Component({
    selector: 'app-reportes',
    templateUrl: './reportes.component.html',
    styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
    public proyectoParaActualizar;
    public iniciarproyect: Proyect[];
    public rubros: AgregarDetallesRubros[] = [];
    public cronograma: Actividad[];
    public Total = 0;
    public totalDays = 0;
    public nombreproject;
    public InvestigadorLider;
    public Correo;
    public UnidadDependencia;
    public Telefono;
    public FechaInforme;
    public nuevocrono = [];
    public avanceGlobal = 0;
    public totalasignado = 0;
    public totalejecutado = 0;
    public totalcumplimiento = 0;
    public entidades: Entidad[] = [];
    public hasReport = false;
    public finalizeCronograma = false;
    public finalizeRubros = false;
    public isLoading = false;
    public fechaDeInicio = '';
    public finalDate;
    public duracion: number;
    public NO_REAL_DATE = 'No se ha asignado fecha de cumplimiento';
    public name = '';
    public firmaInvestigador;
    public version;

    constructor(
        private cronogramaService: cronogramaService,
        private rutaActiva: ActivatedRoute,
        private projectService: ProjectService,
        private firmaService: FirmaService,
        public dialog: MatDialog) {
    }

    ngOnInit(): void {
        const {profile} = JSON.parse(localStorage.getItem('user'));
        this.name = `${profile.names} ${profile.surname}`;
        this.getFirma();
    }

    private validateEndpoints(): void {
        this.hasReport = this.finalizeCronograma && this.finalizeRubros;
        this.isLoading = !(this.finalizeCronograma && this.finalizeRubros);
    }

    public getTotalAsignado(): number {
        return this.rubros.reduce((acc, actual) => {
            return acc + actual.EntidadesCostos;
        }, 0);
    }


    public getTotalEjecutado(): number {
        return this.rubros.reduce((acc, actual) => {
            return acc + (this.getPresupuestoEjecutado(actual.listaRubros) || 0);
        }, 0);
    }

    public calculateCumplimiento(assigned: number, rubro): string {
        const executed = this.getPresupuestoEjecutado(rubro);
        const total = executed * 100 / assigned;
        return `${total.toFixed(2)} %`;
    }

    public getPresupuestoEjecutado(rubro): number {
        return rubro.reduce((acc, actual) => {
            return acc + actual.rubro;
        }, 0);
    }

    public calculateCumplimientoTotal(assigned: number, executed: number = 0): string {
        const total = executed * 100 / assigned;
        return `${total.toFixed(2)} %`;
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

    private calculateTotalAdvance(): void {
        let count = 0;
        let totalPercentage = 0;
        this.cronograma.map(activity => {
            activity.subActividad.map(subActividad => {
                count += 1;
                totalPercentage += this.calculateAdvance(String(subActividad.fechaInicio), String(subActividad.fechaFinal));
            });
        });
        const total = 100 * count;
        this.avanceGlobal = totalPercentage * 100 / total;
    }

    private calculateEndDate(): void {
        const fechaDeInicioArray = this.fechaDeInicio.split('-');
        const nuevaFecha = `${fechaDeInicioArray[1]}-${fechaDeInicioArray[0]}-${fechaDeInicioArray[2]}`;
        const firstDate = new Date(nuevaFecha);
        const endDate = new Date(nuevaFecha);
        endDate.setMonth(Number(fechaDeInicioArray[1]) - 1 + Number(this.duracion));
        this.finalDate = endDate;
        this.fechaDeInicio = `${fechaDeInicioArray[1]}/${fechaDeInicioArray[0]}/${fechaDeInicioArray[2]}`;
        this.totalDays = Math.ceil((endDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24));
    }

    private getFirma(): void {
        const {_id} = JSON.parse(localStorage.getItem('user'));
        this.firmaService.getFirma(_id)
            .subscribe(
                response => {
                    this.firmaInvestigador = response.firma;
                },
                error => console.log('error>>> ', error)
            );
    }

    GenerarReporte(): void {
        this.isLoading = true;
        this.getAllCronograma();
        this.getAllRubros();
    }

    getAllCronograma(): void {
        this.finalizeCronograma = false;
        const projectId = this.rutaActiva.snapshot.params.id;
        this.cronogramaService.getByProject(projectId)
            .pipe(finalize(() => {
                this.finalizeCronograma = true;
                this.validateEndpoints();
                this.calculateTotalAdvance();
            }))
            .subscribe(r => {
                this.cronograma = r.cronogramas.actividades;
                this.cronograma.forEach(element => {
                    const subact = element.subActividad;
                    subact.forEach(element => {
                        this.nuevocrono.push(element);
                    });
                });
            });
    }

    getAllRubros(): void {
        this.finalizeRubros = false;
        let div = 0;
        const projectId = this.rutaActiva.snapshot.params.id;
        this.projectService.getById(projectId)
            .pipe(finalize(() => {
                this.finalizeRubros = true;
                this.validateEndpoints();
                this.calculateEndDate();
            }))
            .subscribe(r => {
                this.proyectoParaActualizar = r;
                const {Proyecto} = r;
                this.entidades = Proyecto.Entidades;
                this.version = Proyecto.version ? Proyecto.version : 0;
                this.fechaDeInicio = Proyecto.date;
                this.rubros = Proyecto.AgregarDetallesRubros;
                this.iniciarproyect = Proyecto.iniciarProyecto[0];
                this.duracion = Proyecto.iniciarProyecto[0].duracion;
                this.nombreproject = Proyecto.iniciarProyecto[0].nombreProyecto;
                this.InvestigadorLider = Proyecto.iniciarProyecto[0].gestor;
                this.Correo = Proyecto.iniciarProyecto[0].email;
                this.UnidadDependencia = Proyecto.iniciarProyecto[0].dependencia;
                this.Telefono = Proyecto.iniciarProyecto[0].telefonoGestor;
                this.FechaInforme = new Date();
                this.rubros.forEach(element => {
                    let ejecutado;
                    let asignado;
                    let cumplimiento;

                    ejecutado = element.PresupuestoEjecutado;
                    asignado = element.TotalEfectivo;
                    cumplimiento = element.Cumplimiento;

                    this.totalasignado = parseInt(asignado) + this.totalasignado;
                    this.totalejecutado = parseInt(ejecutado) + this.totalejecutado;
                    this.totalcumplimiento = parseInt(cumplimiento) + this.totalcumplimiento;
                    div = div + 1;
                });
                this.totalcumplimiento = this.totalcumplimiento / div;
                this.totalcumplimiento = parseFloat(this.totalcumplimiento.toFixed(2));

            });
    }

    private updateVersion(): void {
        this.proyectoParaActualizar.Proyecto.version = this.version + 1;
        this.projectService.update(this.proyectoParaActualizar.Proyecto._id, this.proyectoParaActualizar.Proyecto).subscribe( () => {});
    }

    downloadPDF(): void {
        this.dialog.open(SucessDialogComponent, {
            ariaLabel: `Se va a descarga el reporte en un momento`,
            role: 'alertdialog',
            autoFocus: false,
            data: {
                icono: 'done',
                severidad: 'dialog-sucess',
                encabezado: `Descargando Reporte`,
                descripcion: `Se va a descarga el reporte en un momento`
            }
        }).afterClosed().subscribe(result => {
            this.updateVersion();
        });

        this.hasReport = false;
        var data = document.getElementById('GHJEAFR042');
        html2canvas(data).then(canvas => {
            var margin = 2;
            var imgWidth = 200 - 2 * margin;
            var pageHeight = 285;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png', 10);
            var options = {
                size: '70px',
                background: '#fff',
                pagesplit: true,
            };
            let pdf = new jsPDF('p', 'mm'); // A4 size page of PDF
            var position = 20;

            var width = pdf.internal.pageSize.width;
            var height = pdf.internal.pageSize.height;
            pdf.addImage(contentDataURL, 'PNG', margin, position, imgWidth, imgHeight - 10, options);
            pdf.addImage(contentDataURL, 'PNG', margin, position, imgWidth, imgHeight - 10, options);
            heightLeft -= pageHeight;
            while (heightLeft >= 0) {

                position = (heightLeft - imgHeight);
                pdf.addPage();
                pdf.addImage(contentDataURL, 'PNG', margin, position, imgWidth, imgHeight - 10, options);
                heightLeft -= pageHeight;
            }
            pdf.save('Reporte Seguimiento.pdf');
        });
    }
}
