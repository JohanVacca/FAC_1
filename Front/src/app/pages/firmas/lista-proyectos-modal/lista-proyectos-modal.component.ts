import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ProjectService} from '../../../shared/services/Proyect/project.service';
import {Router} from '@angular/router';
import {AuthStorageService} from '../../../@core/services';
import {VistaProyectosData} from '../../evaluacion/components/vista-proyectos/vista-proyectos.component';
import {finalize} from 'rxjs/operators';
import {FirmaService} from '../../../shared/services/firma/firma.service';
import {SucessDialogComponent} from '../../admin/Dialog/sucess-dialog/sucess-dialog.component';

@Component({
    selector: 'app-lista-proyectos-modal',
    templateUrl: './lista-proyectos-modal.component.html',
    styleUrls: ['./lista-proyectos-modal.component.scss']
})
export class ListaProyectosModalComponent implements OnInit {

    public displayedColumns: string[] = ['Proyecto', 'Firma', 'Acciones'];
    public listadoDeFirma = [];
    public dataSource;
    public loading;
    public PROJECT_LIST = 'Listado de Proyectos';
    public PROJECT_LIST_MESSAGE = 'En la siguiente tabla encontrará Los proyectos activos que se encuentran pendientes por firmar';

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: VistaProyectosData,
        private projectService: ProjectService,
        private router: Router,
        private authStorageService: AuthStorageService,
        public dialogRef: MatDialogRef<ListaProyectosModalComponent>,
        public dialog: MatDialog,
        private firmaService: FirmaService,
        private auth: AuthStorageService
    ) {
    }

    ngOnInit(): void {
        this.getAll(this.data.idC);
    }

    public firmar(firma): void {
        const {idFirma, idProyecto} = firma;
        this.firmaService.firmar(idFirma, idProyecto)
            .subscribe(() => {
                this.dialog.open(SucessDialogComponent, {
                    role: 'alertdialog',
                    autoFocus: false,
                    data: {
                        icono: 'done',
                        severidad: 'dialog-sucess',
                        encabezado: `Documento firmado`,
                        descripcion: `El proyecto con nombre ${firma.nombreProyecto} se ha firmado exitosamente como ${firma.name}`
                    }
                }).afterClosed().subscribe(() => {
                    this.getAll(this.data.idC);
                });
            });
    }

    private getAll(id): void {
        this.listadoDeFirma = [];
        const userId = this.auth.getUserId();
        this.loading = true;
        this.projectService.getIdConv(id)
            .pipe(finalize(() => this.loading = false))
            .subscribe(response => {
                response.Proyectos.map(proyecto => {
                   proyecto.firmas.map(firma => {
                       if (firma.idQuienFirma === userId && !firma.status) {
                           const {name, idQuienFirma, _id} = firma;
                           const nombreProyecto = proyecto.iniciarProyecto[0].nombreProyecto;
                           this.listadoDeFirma.push({name, idQuienFirma, nombreProyecto, idProyecto: proyecto._id, idFirma: _id});
                       }
                   });
                });
                if (localStorage.getItem('Role') === 'Investigador') {
                    response['Proyectos'].forEach(element => {
                        if (response['Proyectos'][0].UserId._id === this.authStorageService.getUserId()) {
                            this.dataSource = response['Proyectos'];
                        }
                    });
                } else {
                    this.dataSource = response['Proyectos'];
                }
            });
    }
}
