import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../shared/services/Proyect/project.service';
import {Proyect} from '../../shared/models/project.model';
import {Router} from '@angular/router';
import {VistaFormulacionComponent, VistaFormulacionData} from '../formulacion/components/vista-formulacion/vista-formulacion.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthStorageService} from '../../@core/services';
import {finalize} from 'rxjs/operators';
import {UsersService} from '../../@core/services/users/users.service';
import {InvCenterService} from '../../shared/services/inv-center2/inv-center.service';
import {InvestigadorDashboard} from '../../shared/services/saveStateService/StateInterface';
import {ModalInvestigadorComponent} from '../modal-investigador/modal-investigador.component';
import {ModalCentrosComponent} from '../modal-centros/modal-centros.component';
import { InvestigationProgramService } from 'src/app/shared/services/investigation-program/investigation-program.service';
import { InvestigationSubProgramService } from 'src/app/shared/services/investigation-sub-program/investigation-sub-program.service';
import { InvestigationLinesService } from 'src/app/shared/services/investigation-lines/investigation-lines.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NecesidadService } from 'src/app/shared/services/necesidad-service/necesidad.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public displayedColumns2: string[] = ['selectedValue','name','programa', 'subprograma','lineasinv', 'descripcion', 'porque', 'acciones'];
    public necesidades = [];
    public TITLE = 'Dashboard';
    public SUBTITLE = 'Listado de proyectos relacionados';
    public SUBTITLE_EVALUATOR = 'Listado de proyectos que ha evaluado';
    public PROJECTS = 'Proyectos Activos';
    public NAME = 'NOMBRE';
    public JEFE = 'JEFE DE CENTRO';
    public CONVOCATORIA = 'CONVENIO';
    public STATUS = 'ESTADO';
    public DATE = 'FECHA DE CREACIÓN';
    public ACTIONS = 'ACCIONES';
    public NO_PROJECTS = 'No tiene proyectos activos';
    public NO_PROJECTS_EVALUATOR = 'No ha evaluado ningún proyecto';
    public NO_INVESTIGADORES = 'No hay investigadores en los centros relacionados';
    public NO_NECESIDADES = 'No hay necesidades existentes';
    public NO_CENTERS = 'No hay centros relacionados';
    public projectList: Proyect[] = [];
    public isLoading = true;
    public role = '';
    public user;
    public isEvaluator = false;


    public showSecondTable = false;
    public showThirdTable = false;
    public showPropiedadesTable = false;
    public showNecesidadesTable = false;
    public investigadoresIsLoading = false;
    public ROLE_SUBDIRECTOR = 'Sub-Director';
    public ROLE_RESPONSABLE = "Responsable";
    public ROLE_JEFE = 'Jefe De Centro';
    public ROLE_COMANDANTE = 'Comandante';
    public JEFE_TITLE = 'Investigadores En Centro';
    public COMANDANTE_TITLE_INV = 'Investigadores Activos';
    public COMANDANTE_TITLE_NCED = 'Necesidades Activas';
    public COMANDANTE_TITLE = 'Centro Activos';
    public investigadores: InvestigadorDashboard[] = [];
    public HOURS = 'HORAS';
    public ID = 'Identificacion';
    public CHARGE = 'CARGO';
    public allProjectList: Proyect[] = [];
    public allProjectFilter: Proyect[] = [];
    public centrosDeInvestigacion = [];

    public centros = [];
    public centrosIsLoading = false;

    private PATH_ROOT = '/pages/seguimientoproject/';

    constructor(
        private router: Router,
        private projectService: ProjectService,
        private authStorageService: AuthStorageService,
        private usersService: UsersService,
        private invCenterService: InvCenterService,
        private dialog: MatDialog,
        private necesidadService: NecesidadService,
        private fb: FormBuilder,
        private investigationLinesService: InvestigationLinesService,
        private investigationProgramService: InvestigationProgramService,
        private investigationSubProgramService: InvestigationSubProgramService,) {
    }

    ngOnInit(): void {
        this.role = localStorage.getItem('Role');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.validateJefeRole();
        this.validateResponsable();
        this.validateComandanteRole();
        this.validateSubdir();
        this.initializeData();
    }

    public viewDetail(investigador): void {
        const data: InvestigadorDashboard = investigador;
        this.dialog.open(ModalInvestigadorComponent, {data})
            .afterClosed().subscribe(response => {});
    }

    public viewCentroDetail(centro): void {
        const proyectos = this.allProjectList.filter(proyecto => proyecto.iniciarProyecto[0].centroDeInvestigacion === centro.name);
        this.dialog.open(ModalCentrosComponent, {data: {centro, proyectos}})
            .afterClosed().subscribe(response => {});
    }

    public goToDetail(id: string): void {
        this.router.navigate([`${this.PATH_ROOT}${id}`]);
    }

    public viewPDF(id: string): void {
        let valor = [];
        let Evaluado;
        this.projectService.getById(id)
            .pipe(finalize(() => {
                this.showModalPDF(id, false, valor, Evaluado);
            }))
            .subscribe(response => {
                response.Proyecto.calificaciones.forEach(element => {
                    if (element.idEv._id === this.user._id) {
                        valor = element.Valores;
                        Evaluado = element.Evaluado;
                    }
                });
            });
    }

    private validateJefeRole(): void {
        this.showSecondTable = [this.ROLE_COMANDANTE, this.ROLE_JEFE, this.ROLE_SUBDIRECTOR].includes(this.role);
    }

    private validateResponsable(): void {
        this.showNecesidadesTable = [this.ROLE_RESPONSABLE].includes(this.role);
    }
    private validateSubdir(): void {
        this.showPropiedadesTable = [this.ROLE_SUBDIRECTOR].includes(this.role);
    }

    private validateComandanteRole(): void {
        this.showThirdTable = [this.ROLE_COMANDANTE].includes(this.role);
    }

    private showModalPDF(idProyecto, evaluar, valor, Evaluado): void {
        const data: VistaFormulacionData = {idProyecto, evaluar, valor, Evaluado};
        this.dialog.open(VistaFormulacionComponent, {data})
            .afterClosed().subscribe(response => {
            this.router.navigate(['/pages']);
        });
    }

    private initializeData(): void {
        this.isLoading = true;
        this.projectService.getAll()
            .pipe(finalize(() => {
                this.isLoading = false;
                if (this.showSecondTable) {
                    this.investigadoresIsLoading = true;
                }
                if (this.showThirdTable) {
                    this.centrosIsLoading = true;
                }
                this.getCenters();
            }))
            .subscribe((response: { Proyectos: Proyect[] }) => {
                this.allProjectList = response.Proyectos;
                this.validateWithRole(response.Proyectos);
            });
    }

    private getCenters(): void {
        this.invCenterService.getAll()
            .pipe(finalize(() => {
                if (this.showSecondTable) {
                    this.getInvestigadores();
                }
                this.centrosIsLoading = false;
            }))
            .subscribe(centros => {
                if (this.showThirdTable) {
                    this.centros = centros['invCenters'];
                }

                if (this.showSecondTable) {
                    centros['invCenters']
                        .map(centro => {
                            if (centro.jefe._id === JSON.parse(localStorage.getItem('user'))._id) {
                                this.centrosDeInvestigacion.push(centro.name);
                            }
                        });
                    this.allProjectFilter = this.allProjectList
                        .filter(project => this.centrosDeInvestigacion.includes(project.iniciarProyecto[0].centroDeInvestigacion));
                }
            });
    }

    private getInvestigadores(): void {
        this.investigadoresIsLoading = false;
        const idList = [];
        const proyects = this.showThirdTable ? this.allProjectList : this.allProjectFilter;
        proyects.map(project => {
            project.EquipoInvestigaciones.map(investigador => {
                const {identificacion, nombres, apellido, dedicacion} = investigador;
                const {nombreProyecto, centroDeInvestigacion} = project.iniciarProyecto[0];
                if (idList.includes(identificacion)) {
                    const investigadorActual = this.investigadores.find(inv => String(inv.identificacion) === String(identificacion));
                    investigadorActual.dedicacion = Number(investigadorActual.dedicacion) + Number(dedicacion);
                    this.addOtherProject(investigadorActual, centroDeInvestigacion, dedicacion, nombreProyecto);
                } else {
                    this.investigadores.push({
                        nombre: `${nombres} ${apellido}`,
                        identificacion: identificacion.toString(),
                        dedicacion: Number(dedicacion),
                        centros: {[centroDeInvestigacion]: [{dedicacion: Number(dedicacion), nombreProyecto}]}
                    });
                    idList.push(identificacion);
                }
            });
        });
    }

    private addOtherProject(investigadorActual, centroDeInvestigacion, dedicacion, nombreProyecto): void {
        if (investigadorActual.centros[centroDeInvestigacion]) {
            const centroActual = investigadorActual.centros[centroDeInvestigacion]
                .filter(center => center.nombreProyecto === nombreProyecto);
            if (centroActual.length) {
                centroActual[0].dedicacion = centroActual[0].dedicacion + Number(dedicacion);
            } else {
                investigadorActual.centros[centroDeInvestigacion].push({dedicacion: Number(dedicacion), nombreProyecto});
            }
        } else {
            investigadorActual.centros = {
                ...investigadorActual.centros,
                [centroDeInvestigacion]: [{dedicacion: Number(dedicacion), nombreProyecto}]
            };
        }
    }

    private validateWithRole(projects: Proyect[]): void {
        if (this.role === 'Investigador') {
            this.isInvestigador(projects);
            return;
        }
        if (this.role === 'Evaluador') {
            this.isEvaluador(projects);
            return;
        }
        if (['Administrador', 'Director', 'Comandante', 'Sub-Director', 'Jefe De Centro'].includes(this.role)) {
            this.projectList = projects;
        }
    }

    private isInvestigador(projects): void {
        this.isEvaluator = false;
        projects.forEach(project => {
            if (project.UserId._id === this.user._id) {
                this.projectList.push(project);
            }
        });
    }

    private isEvaluador(projects): void {
        this.isEvaluator = true;
        projects.forEach(project => {
            if (project.evaluadorId === this.user._id) {
                this.projectList.push(project);
            }
        });
    }
}
