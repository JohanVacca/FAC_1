import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../shared/services/Proyect/project.service';
import {Router} from '@angular/router';
import {VistaFormulacionComponent} from '../formulacion/components//vista-formulacion/vista-formulacion.component';
import {MatDialog} from '@angular/material/dialog';
import {ConvocatoryService} from '../admin/convocatory/services/convocatory.service';
import {VistaProyectosComponent} from './components/vista-proyectos/vista-proyectos.component';


@Component({
    selector: 'app-evaluacion',
    templateUrl: './evaluacion.component.html',
    styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {

    public displayedColumns1: string[] = ['name', 'Descripcion', 'acciones'];
    public dataSource = [];
    public Rol;
    public objetos;
    public displayedColumns: string[] = ['Titulo', 'Puntaje', 'HabilitarSeg', 'acciones'];

    constructor(
        private projectService: ProjectService,
        private router: Router,
        public dialog: MatDialog,
        private convocatoryService: ConvocatoryService) {
    }

    ngOnInit(): void {
        this.getAllConv();
    }

    public VistaPrevia(IDProyec, Value): void {
        this.projectService.getById(IDProyec)
            .subscribe(response => {
                const idProyecto = response.Proyecto._id;
                this.dialog.open(VistaFormulacionComponent, {
                    data: {
                        idProyecto,
                        evaluar: Value
                    }
                });
            });
    }

    public filtro(convocatorias) {
        this.dataSource = convocatorias.filter(response => response.isActive === true);
    }

    public view(id): void {
        this.dialog.open(VistaProyectosComponent, {
            data: {idC: id}
        }).afterClosed().subscribe(r => {

        });
    }

    private getAllConv(): void {
        this.convocatoryService.getall()
            .subscribe(convocatorias => {
                this.filtro(convocatorias);
            });
    }
}
